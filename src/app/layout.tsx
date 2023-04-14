import { inter } from "@/utils/fonts";
import "@/utils/globals.css";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { dark } from "@clerk/themes";
import classnames from "classnames";

export const metadata = {
  title: "Homies Chat",
  description: "Your chat app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          formFieldInput: formFieldInputClassnames,
          formButtonPrimary: formButtonPrimeryClassnames,
        },
      }}
    >
      <html lang="pt-BR" className={inter.className}>
        <body className="h-screen overflow-hidden bg-neutral-900">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

const formFieldInputClassnames = classnames(
  "w-full rounded-md border-neutral-700 bg-neutral-800 text-sm text-white/90 placeholder:text-neutral-500 focus:border-neutral-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
);

const formButtonPrimeryClassnames = classnames(
  "flex w-full justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-wait disabled:opacity-60"
);
