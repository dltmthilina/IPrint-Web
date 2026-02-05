import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useNavigate, useLocation } from 'react-router-dom';
import * as THREE from 'three';
import iprintLogo from '../assets/iprintlogo.jpeg';

interface Mug3DProps {
  currentPage: number;
  targetPage: number;
  onTransitionComplete: () => void;
  manualRotation: number;
}

const MugMesh: React.FC<Mug3DProps> = ({ currentPage, targetPage, onTransitionComplete, manualRotation }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'zoomOut' | 'rotate' | 'zoomIn'>('idle');
  const zoomProgress = useRef(0);
  const rotationProgress = useRef(0);
  const initialRotation = useRef(0);
  const targetRotationValue = useRef(0);
  
  // Load the logo texture
  const logoTexture = useLoader(THREE.TextureLoader, iprintLogo);

  useEffect(() => {
    if (currentPage !== targetPage && !isAnimating) {
      setIsAnimating(true);
      setAnimationPhase('zoomOut');
      zoomProgress.current = 0;
      rotationProgress.current = 0;
      initialRotation.current = meshRef.current?.rotation.y || 0;
      
      // Calculate rotation direction (shortest path) - 5 faces around the mug
      const rotationPerFace = (Math.PI * 2) / 5;
      const targetRotation = targetPage * rotationPerFace;
      let diff = targetRotation - initialRotation.current;
      
      // Normalize to [-PI, PI]
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      
      targetRotationValue.current = initialRotation.current + diff;
    }
  }, [currentPage, targetPage, isAnimating]);

  useFrame((state, delta) => {
    if (!meshRef.current || !isAnimating) {
      // Apply manual rotation when idle
      if (meshRef.current) {
        meshRef.current.rotation.y = manualRotation;
      }
      return;
    }

    const animationSpeed = 2.5;

    if (animationPhase === 'zoomOut') {
      zoomProgress.current += delta * animationSpeed;
      const ease = 1 - Math.pow(1 - Math.min(zoomProgress.current, 1), 3);
      meshRef.current.position.z = -5 + ease * -8; // Zoom out from -5 to -13

      if (zoomProgress.current >= 1) {
        setAnimationPhase('rotate');
        rotationProgress.current = 0;
      }
    } else if (animationPhase === 'rotate') {
      rotationProgress.current += delta * animationSpeed;
      const ease = rotationProgress.current < 0.5
        ? 4 * Math.pow(rotationProgress.current, 3)
        : 1 - Math.pow(-2 * rotationProgress.current + 2, 3) / 2;
      
      // Rotate for visual effect
      meshRef.current.rotation.y = Math.PI * 2 * ease;

      if (rotationProgress.current >= 1) {
        setAnimationPhase('zoomIn');
        zoomProgress.current = 0;
      }
    } else if (animationPhase === 'zoomIn') {
      zoomProgress.current += delta * animationSpeed;
      const ease = 1 - Math.pow(1 - Math.min(zoomProgress.current, 1), 3);
      meshRef.current.position.z = -13 + ease * 8; // Zoom in from -13 to -5
      
      // Return logo to facing forward
      meshRef.current.rotation.y = Math.PI * 2 * (1 - ease);

      if (zoomProgress.current >= 1) {
        meshRef.current.rotation.y = 0; // Ensure it ends at 0
        setAnimationPhase('idle');
        setIsAnimating(false);
        onTransitionComplete();
      }
    }
  });

  // Create mug geometry
  const createMugGeometry = () => {
    const group = new THREE.Group();
    
    // Mug body (cylinder) with logo texture
    const bodyGeometry = new THREE.CylinderGeometry(1.5, 1.2, 3, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      map: logoTexture,
      metalness: 0.2,
      roughness: 0.5
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);
    
    // Inner cylinder (to make it hollow looking)
    const innerGeometry = new THREE.CylinderGeometry(1.35, 1.05, 2.8, 32);
    const innerMaterial = new THREE.MeshStandardMaterial({ 
      color: '#333333',
      side: THREE.BackSide
    });
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    inner.position.y = 0.1;
    group.add(inner);
    
    // Handle (realistic C-shaped handle using CatmullRomCurve3 and TubeGeometry)
    const handleCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.4, 0.9, 0),    // Top connection point
      new THREE.Vector3(1.9, 0.7, 0),    // Top outer curve
      new THREE.Vector3(2.1, 0, 0),      // Middle outer point
      new THREE.Vector3(1.9, -0.7, 0),   // Bottom outer curve
      new THREE.Vector3(1.4, -0.9, 0),   // Bottom connection point
    ]);
    
    const handleGeometry = new THREE.TubeGeometry(handleCurve, 20, 0.12, 8, false);
    const handleMaterial = new THREE.MeshStandardMaterial({ 
      color: '#ffffff',
      metalness: 0.3,
      roughness: 0.4
    });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    group.add(handle);
    
    return group;
  };

  const mugGroup = createMugGeometry();

  return (
    <primitive 
      ref={meshRef} 
      object={mugGroup} 
      position={[0, 0, -5]} 
      rotation={[0, 0, 0]}
    />
  );
};

const Mug3DNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const pages = ['/', '/services', '/portfolio', '/about', '/contact'];
  const [currentPage, setCurrentPage] = useState(pages.indexOf(location.pathname));
  const [targetPage, setTargetPage] = useState(pages.indexOf(location.pathname));
  
  // Dragging state
  const [position, setPosition] = useState(() =>
    typeof window !== 'undefined'
      ? { x: window.innerWidth / 2 - 128, y: window.innerHeight / 2 - 128 }
      : { x: 0, y: 0 }
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [manualRotation, setManualRotation] = useState(0);
  const [rotationStart, setRotationStart] = useState({ rotation: 0, mouseX: 0 });

  useEffect(() => {
    const newIndex = pages.indexOf(location.pathname);
    if (newIndex !== -1 && newIndex !== currentPage) {
      setTargetPage(newIndex);
    }
  }, [location.pathname]);

  const handleTransitionComplete = () => {
    setCurrentPage(targetPage);
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Middle mouse button (scroll wheel click) - for moving
    if (e.button === 1) {
      setIsMoving(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
    // Left mouse button - for rotation
    else if (e.button === 0) {
      setIsDragging(true);
      setRotationStart({
        rotation: manualRotation,
        mouseX: e.clientX
      });
    }
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (isMoving) {
      // Update position only
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    } else if (isDragging) {
      // Update rotation based on horizontal mouse movement
      const deltaX = e.clientX - rotationStart.mouseX;
      const rotationDelta = deltaX * 0.01; // Sensitivity factor
      setManualRotation(rotationStart.rotation + rotationDelta);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    setIsMoving(false);
  };
  
  useEffect(() => {
    if (isDragging || isMoving) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isMoving, dragStart, rotationStart, manualRotation]);

  return (
    <div 
      className="fixed w-64 h-64 transition-shadow hover:shadow-2xl hidden md:block" 
      style={{ 
        zIndex: 1, 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        cursor: isMoving ? 'grabbing' : isDragging ? 'ew-resize' : 'grab',
        pointerEvents: 'auto'
      }}
      onMouseDown={handleMouseDown}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />
        <MugMesh 
          currentPage={currentPage} 
          targetPage={targetPage}
          onTransitionComplete={handleTransitionComplete}
          manualRotation={manualRotation}
        />
      </Canvas>
    </div>
  );
};

export default Mug3DNavigation;
