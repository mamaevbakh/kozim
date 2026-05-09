import type { Metadata } from "next";
import { PT_Sans, PT_Serif } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  variable: "--font-sans",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ptSerif = PT_Serif({
  variable: "--font-serif",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ижтимоий сўровнома · 2024–2025 қиёсий таҳлил",
  description:
    "Жамият ижтимоий-маънавий ҳолати бўйича сўровнома натижалари — республика, ҳудуд ва туман даражаларида қиёсий таҳлил.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz-Cyrl"
      className={`${ptSans.variable} ${ptSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
