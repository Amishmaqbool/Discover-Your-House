import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DISCOVER YOUR HOUSE",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="shortcut icon" href="/Assets/logo.svg" />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
