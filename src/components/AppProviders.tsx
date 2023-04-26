"use client";
import { WebsocketProvider } from "@/contexts/Websocket/Provider";
import queryClient from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WebsocketProvider>{children}</WebsocketProvider>
    </QueryClientProvider>
  );
}
