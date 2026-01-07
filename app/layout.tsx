import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moscone Holding B.V.",
  description: "A Technology Investment Company",
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
