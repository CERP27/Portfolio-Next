import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Carlos Rojas – Portfolio",
  description: "Carlos Rojas Personal Portfolio, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-full mx-auto bg-gray-500">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
