import type { PropsWithChildren } from "react";

import { clsx } from "clsx";

const baseStyle = "py-2 font-medium leading-7 tracking-tight";

const variants = {
  small: "text-base",
  normal: "text-xl",
  medium: "text-2xl",
  large: "text-4xl",
};

interface TitleProps {
  variant?: "small" | "normal" | "medium" | "large";
  className?: string;
}

export const Title: React.FC<PropsWithChildren<TitleProps>> = ({
  variant = "normal",
  className,
  ...props
}) => {
  className = clsx(baseStyle, variants[variant], className);

  return <h1 className={className} {...props} />;
};
