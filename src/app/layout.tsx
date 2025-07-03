import "./globals.css";
import { BackgroundDecoration } from "@/components/background/BackgroundDecoration";

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
      <head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </head>
      <body className="min-h-screen max-w-full mx-auto ">
        <BackgroundDecoration />
        {children}
      </body>
    </html>
  );
}
