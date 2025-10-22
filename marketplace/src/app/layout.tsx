import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 👈 1. Import เข้ามา

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TreeEz - Your Plant Marketplace", // 👈 2. เปลี่ยน Title
  description: "Find the best plants for your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* 👈 3. วาง Navbar ไว้บนสุด */}
        {children}
        {/* คุณอาจจะเพิ่ม Footer ไว้ตรงนี้ */}
      </body>
    </html>
  );
}