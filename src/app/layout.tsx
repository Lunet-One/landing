import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel-var",
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUnet — DnD платформа для русскоязычного сообщества",
  description:
    "Найди группу, веди кампании, общайся. LUnet — единая платформа для русскоязычного DnD сообщества. Скоро.",
  metadataBase: new URL("https://lunet.one"),
  openGraph: {
    title: "LUnet",
    description: "DnD платформа для русскоязычного сообщества",
    url: "https://lunet.one",
    siteName: "LUnet",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cinzel.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
