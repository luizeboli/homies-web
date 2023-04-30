"use client";
import Image from "next/image";
import { ChatMessageInput } from "./ChatMessageInput";
import { useAppStore } from "@/store/app";
import { useEffect, useMemo } from "react";
import { formatConversationUsers } from "@/utils/formatConversationUsers";
import { useAuth } from "@clerk/nextjs";
import { ChatMessagesList } from "./ChatMessagesList";
import { notFound, useParams } from "next/navigation";
import { useWebsocket } from "@/contexts/Websocket/Provider";
import { WEBSOCKET_EVENTS } from "@/utils/constants";

export function ChatTimeline() {
  const { userId } = useAuth();
  const socket = useWebsocket();

  const params = useParams();
  const { conversationId } = params;
  const activeConversation = useAppStore((state) =>
    state.conversations.find(
      (conversation) => conversation.id === conversationId
    )
  );
  const messages = useAppStore.use.messages();
  const addMessage = useAppStore.use.addMessage();

  const usersToDisplay = useMemo(() => {
    if (!activeConversation) return [];

    const { owner, users } = activeConversation;
    return formatConversationUsers({ owner, userId, users });
  }, [activeConversation, userId]);

  useEffect(() => {
    if (!socket) return;

    socket.on(WEBSOCKET_EVENTS.MESSAGE.CREATED, (message) => {
      // Messages from current user is handled by the mutation
      const isFromCurrentUser = message.author.id === userId;
      if (isFromCurrentUser) return;

      addMessage({ ...message, isSent: true });
    });

    return () => {
      socket.off(WEBSOCKET_EVENTS.MESSAGE.CREATED);
    };
  }, [socket, addMessage, userId]);

  useEffect(() => {
    if (!socket) return;

    socket.emit(WEBSOCKET_EVENTS.CONVERSATION.JOINED, conversationId);
  }, [socket, conversationId]);

  if (!activeConversation) {
    notFound();
  }

  return (
    <div className="flex h-full w-full flex-col pb-4">
      <div className="mb-10 flex items-center gap-4">
        <Image
          src="https://placehold.co/36.png"
          alt="Avatar"
          width={36}
          height={36}
          className="shrink-0 rounded-full ring-2 ring-purple-500 ring-offset-2 ring-offset-neutral-900"
        />
        <h2 className="text-sm text-zinc-300">
          Conversation with{" "}
          <b>{usersToDisplay?.map((user) => user.username).join(", ")}</b>
        </h2>
      </div>

      <div className="flex h-full grow flex-col overflow-hidden rounded-xl bg-neutral-800">
        <ChatMessagesList messages={Object.values(messages)} />

        <ChatMessageInput activeConversation={activeConversation} />
      </div>
    </div>
  );
}
