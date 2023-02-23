import { Container } from "@internal/ui/Container";
import { Paragraph } from "@internal/ui/Paragraph";
import { PromptBox } from "@internal/app/(home)/PromptBox";
import { Footer } from "@internal/app/(home)/Footer";
import { SUB_TITLE, TEXT, TITLE } from "@internal/content";

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
