import "@internal/styles/globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${manrope.className}`} lang="en">
      <head />
      <body className="bg-emerald-50">{children}</body>
    </html>
  );
}
