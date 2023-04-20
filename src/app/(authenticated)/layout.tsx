import { AppProviders } from "@/components/AppProviders";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <AppProviders>{children}</AppProviders>;
}
