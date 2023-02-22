import { Container } from "@internal/ui/Container";
import { Paragraph } from "@internal/ui/Paragraph";
import { PromptBox } from "@internal/app/(home)/PromptBox";
import { Footer } from "@internal/app/(home)/Footer";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen">
        <Container className="grid py-12 space-y-8 place-items-center text-center">
          <Paragraph className="text-pink-400 font-semibold" variant="small">
            BE THAT FUNNY GUY
          </Paragraph>
          <h1 className="text-6xl font-semibold text-pink-600">Ai Joker</h1>
          <Paragraph className="prose text-center" variant="large">
            Get your daily dose of laughter with our AI-powered joke generator.
            From witty one-liners to hilarious puns, our algorithm has got you
            covered
          </Paragraph>
          <PromptBox />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
