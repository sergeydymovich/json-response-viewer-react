import { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<SVGElement> {
  className?: string;
}

export type IconType = (props: IconProps) => JSX.Element;
