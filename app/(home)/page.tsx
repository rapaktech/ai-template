import { Container } from "@internal/ui/Container";
import { Paragraph } from "@internal/ui/Paragraph";
import { PromptBox } from "@internal/app/(home)/PromptBox";
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
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-center py-2 pb-4 prose">
        Powered by{" "}
        <a
          href="https://janr.xyz"
          target="_blank"
          rel="noreferrer"
          className="font-medium"
        >
          janr.xyz.
        </a>{" "}
        If you want, you can{" "}
        <a
          href="https://www.buymeacoffee.com/janrxyz"
          className="font-medium"
          target="_blank"
          rel="noreferrer"
        >
          buy me a coffee
        </a>
        .
      </footer>
    </div>
  );
}
