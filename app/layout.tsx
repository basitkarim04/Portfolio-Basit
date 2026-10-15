import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-hand", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eshfaq Ahmad — Product Designer",
  description: "Eshfaq Ahmad — Product Designer with 4 years of experience designing web and mobile products. User research, prototyping, design systems and interaction design.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
