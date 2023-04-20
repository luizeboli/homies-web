"use client";

import { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "./context";
import { Socket, io } from "socket.io-client";

type WebsocketProviderProps = {
  children: React.ReactNode;
};

export function WebsocketProvider({ children }: WebsocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(process.env.NEXT_PUBLIC_API_URL, {
      autoConnect: false,
      path: "/ws",
      withCredentials: true,
    });

    socketIo.connect();
    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return (
    <WebsocketContext.Provider value={socket}>
      {children}
    </WebsocketContext.Provider>
  );
}

export function useWebsocket() {
  const context = useContext(WebsocketContext);

  if (context === undefined) {
    throw new Error("useWebsocket must be used within a WebsocketProvider");
  }

  return context;
}
