import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yudya",
  description: "My own private nook for realizing my schizophrenic fantasies.",
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
