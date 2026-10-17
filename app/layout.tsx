import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-hand", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basit Karim — Full-Stack Developer",
  description: "Basit Karim — Full-Stack Developer with experience building responsive web and mobile applications using React, React Native, Vue.js, and Node.js. Skilled in backend architecture, database optimization, and cloud deployment.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
