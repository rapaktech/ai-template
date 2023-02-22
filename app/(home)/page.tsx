import { Container } from "@internal/ui/Container";
import { Paragraph } from "@internal/ui/Paragraph";
import { PromptBox } from "@internal/app/(home)/PromptBox";
import { Footer } from "@internal/app/(home)/Footer";

// IMPORTANT: You can change your prompt here
export const BASE_PROMPT_PREFIX = `
  I want you to act as a comedian. 
  I will provide you with a topic and you will use your wit, creativity and skills to create a joke around this topic. 
  Make it a very dry joke, like a dad joke. 
  My topic is: `;

// IMPORTANT: You can change the copy text here
const SUB_TITLE = "ALWAYS BE HILARIOUS";
const TITLE = "GPT-Joker";
const TEXT = `Get your daily dose of laughter with our AI-powered joke generator.
From witty one-liners to hilarious puns, our algorithm has got you
covered`;

// IMPORTANT: You can change the labels here
export const INPUT_LABEL = "Enter a topic for a joke";
export const BUTTON_LABEL = "Make me laugh ✨";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen">
        <Container className="grid py-12 space-y-8 place-items-center text-center">
          <Paragraph className="text-emerald-700 font-semibold" variant="small">
            {SUB_TITLE}
          </Paragraph>
          <h1 className="text-6xl font-semibold text-emerald-400">{TITLE}</h1>
          <Paragraph className="prose text-center" variant="large">
            {TEXT}
          </Paragraph>
          <PromptBox />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
