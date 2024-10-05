import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@components/provider/Themeprovider";
import { inter } from "@nextfonts";

export const metadata: Metadata = {
  title: "Yaswanth Kosuru",
  description: "Yaswanth Kosuru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
