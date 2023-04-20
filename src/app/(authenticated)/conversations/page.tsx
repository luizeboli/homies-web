"use client";
import { useEffect } from "react";
import { ChatList } from "./ChatList";
import { ChatTimeline } from "./ChatTimeline";
import { useWebsocket } from "@/contexts/Websocket/Provider";

export default function Page() {
  const socket = useWebsocket();

  useEffect(() => {
    if (!socket) return;

    setTimeout(() => {
      socket.emit("onFelps", { fl: 1 });
    }, 2000);
  }, [socket]);

  return (
    <main className="flex h-full">
      <ChatList conversations={[]} />

      <ChatTimeline />
    </main>
  );
}
