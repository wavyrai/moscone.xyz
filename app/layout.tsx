import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moscone.xyz"),
  title: "Moscone Holding B.V.",
  description: "A technology investment company",
  openGraph: {
    title: "Moscone Holding B.V.",
    description: "A technology investment company",
    siteName: "Moscone Holding B.V.",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
