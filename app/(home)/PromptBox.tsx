"use client";

import Button from "@internal/ui/Button";
import { Input } from "@internal/ui/Input";
import { Loader } from "@internal/ui/Loader";
import { LoadingQuotes } from "@internal/ui/LoadingQuotes";
import { Markdown } from "@internal/ui/Markdown";
import { useState } from "react";
import DropDown from "@internal/ui/DropDown";

export const VibeTypes = ["Sarcastic", "Dark", "Edgy", "Dry"];

export const PromptBox = () => {
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [vibe, setVibe] = useState(VibeTypes[0]);

  const onUserChangedText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
  };

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    setApiOutput("");

    const response = await fetch("/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userInput,
        vibe,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setApiOutput((prev) => prev + chunkValue);
    }

    setIsGenerating(false);
  };

  return (
    <div className="w-full max-w-prose grid gap-6 py-6">
      <Input
        className="text-left"
        id="url"
        label="Enter a topic for a joke"
        onChange={onUserChangedText}
        placeholder="A rabbit dancing on the moon"
      />
      <DropDown
        vibes={VibeTypes}
        vibe={vibe}
        setVibe={(newVibe) => setVibe(newVibe)}
      />

      <div className="grid justify-center pb-6">
        <Button
          className="w-auto h-10"
          onClick={callGenerateEndpoint}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <span className="grid justify-center">
              <Loader />
            </span>
          ) : (
            "Make me laugh ✨"
          )}
        </Button>
      </div>
      {isGenerating && <LoadingQuotes />}
      {apiOutput && (
        <>
          <hr />
          <Markdown>{apiOutput}</Markdown>
        </>
      )}
    </div>
  );
};
