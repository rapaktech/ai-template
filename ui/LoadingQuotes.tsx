"use client";

import { useInterval } from "@internal/hooks/useInterval";
import { Paragraph } from "@internal/ui/Paragraph";
import { useState } from "react";

const quotes = [
  "",
  "Still working on it...",
  "OpenAI is quite busy today...",
  "Almost there...",
];

export const LoadingQuotes = () => {
  const [quoteIdx, setQuoteIdx] = useState(0);

  useInterval(() => {
    if (quoteIdx < 3) setQuoteIdx(quoteIdx + 1);
  }, 6000);

  return (
    <Paragraph
      variant="small"
      className="transition duration-300 ease-in-out inline"
    >
      {quotes[quoteIdx]}
    </Paragraph>
  );
};
