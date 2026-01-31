
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// If drei is not available, we use standard mesh with geometries.
// But earlier I saw @react-three/fiber in package.json.
// I will assume basics are available or use standard mesh. 
// "I'm not installing drei" -> So I should avoid imports from '@react-three/drei' if possible 
// OR just use native mesh with args.

const Mug = ({ scrollY }: { scrollY: number }) => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Floating animation
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;

            // Scroll based rotation
            // scrollY provides a value we can map to rotation
            // We want to rotate on Y axis
            const rotationTarget = scrollY * 0.005;
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotationTarget, 0.1);

            // Also tilt slightly based on mouse or just constant movement
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Mug Body */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1, 0.8, 2, 32]} />
                <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.2} />
            </mesh>

            {/* Mug Inside (slightly smaller cylinder to simulate hollowness if we wanted, 
          but for simplicity just a top cap or standard cylinder is fine. 
          To make it look like a cup, we can use a tube or just a cylinder top color) */}

            {/* Handle */}
            <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <torusGeometry args={[0.6, 0.15, 16, 32, Math.PI]} />
                <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.2} />
            </mesh>

            {/* 'iprint' text or logo simulation - simple colored band */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.01, 0.81, 1, 32, 1, true]} />
                {/* Openended cylinder for label? Or just standard material on body. 
             Let's just make a colored band. */}
                <meshStandardMaterial color="#ee2bad" transparent opacity={0.8} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};

// Ambient Ring Animation
const AmbientRing = () => {
    const ringRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
            ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.6, 0.02, 16, 100]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} transparent opacity={0.3} />
        </mesh>
    )
}

const ThreeDMug = () => {
    const [scrollY, setScrollY] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full h-[400px] md:h-[500px] relative z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -5, -5]} color="#ff00ff" intensity={0.5} />

                <Mug scrollY={scrollY} />
                <AmbientRing />
            </Canvas>
        </div>
    );
};

export default ThreeDMug;
