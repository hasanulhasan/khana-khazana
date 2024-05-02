import { Inter } from "next/font/google";
import "./globals.css";
import { mongoConnect } from "@/services/mongoDbConnect";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana",
  description: "Khana Khazana by Next JS",
};

export default async function RootLayout({ children }) {
  await mongoConnect();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
