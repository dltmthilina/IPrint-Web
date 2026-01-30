export type HoverColor =
  | "primary"
  | "secondary"
  | "purple"
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "cyan";


export type Product = {
  imageUrl: string;
  title: string;
  description: string;
  hoverColor: HoverColor;
}