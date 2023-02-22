import type { PropsWithChildren } from "react";

import { clsx } from "clsx";

const baseStyle = "text-grey-700";

const variants = {
  "extra-small": "text-xs",
  small: "text-sm",
  normal: "text-base",
  large: "text-lg",
};

interface ParagraphProps {
  variant?: "extra-small" | "small" | "normal" | "large";
  className?: string;
}

export const Paragraph: React.FC<PropsWithChildren<ParagraphProps>> = ({
  variant = "normal",
  className,
  ...props
}) => {
  className = clsx(baseStyle, variants[variant], className);

  return <p className={className} {...props} />;
};
