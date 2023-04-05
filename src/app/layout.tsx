import { inter } from "@/app/fonts";
import "./globals.css";

export const metadata = {
  title: "Homies Chat",
  description: "Your chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="h-screen overflow-hidden">{children}</body>
    </html>
  );
}
