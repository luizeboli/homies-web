import { inter } from "@/app/fonts";

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
      <body>{children}</body>
    </html>
  );
}
