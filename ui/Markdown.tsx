import type { PropsWithChildren } from "react";

import { clsx } from "clsx";
import ReactMarkdown from "react-markdown";

const baseStyle =
  "prose text-left prose:text-gray-900 max-w-prose prose-h1:font-semibold prose-h1:text-gray-900 prose-p:text-gray-900 prose-li:text-gray-900 prose-h3:font-semibold prose-h3:text-base prose-h2:font-normal prose-h2:text-base prose-h3:inline prose-p:inline prose-li:marker:text-gray-900";

interface MarkdownProps {
  className?: string;
}

export const Markdown: React.FC<PropsWithChildren<MarkdownProps>> = ({
  className,
  ...props
}) => {
  className = clsx(baseStyle, className);

  return (
    <article className={className}>
      {typeof props.children === "string" && (
        <ReactMarkdown>{props.children}</ReactMarkdown>
      )}
    </article>
  );
};
