"use client";

import { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "./context";
import { Socket, io } from "socket.io-client";
import { WEBSOCKET_EVENTS } from "@/utils/constants";
import { useAppStore } from "@/store/app";

type WebsocketProviderProps = {
  children: React.ReactNode;
};

export function WebsocketProvider({ children }: WebsocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const addConversation = useAppStore.use.addConversation();

  useEffect(() => {
    const socketIo = io(process.env.NEXT_PUBLIC_API_URL, {
      autoConnect: false,
      path: "/ws",
      withCredentials: true,
    });
    socketIo.connect();
    setSocket(socketIo);

    socketIo.on(WEBSOCKET_EVENTS.EXCEPTION, async (error) => {
      if (error.message === "Forbidden resource") {
        socketIo.disconnect();
        socketIo.connect();
      }
    });

    socketIo.on(WEBSOCKET_EVENTS.CONVERSATION.CREATED, (conversation) => {
      addConversation(conversation);
    });

    return () => {
      socketIo.off(WEBSOCKET_EVENTS.CONVERSATION.CREATED);
      socketIo.disconnect();
    };
  }, [addConversation]);

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
