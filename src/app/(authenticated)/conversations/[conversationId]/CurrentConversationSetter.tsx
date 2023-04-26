"use client";

import { useAppStore } from "@/contexts/AppStore/Provider";
import { Conversation } from "@/types";
import { useState } from "react";

type CurrentConversationSetterProps = {
  children: React.ReactNode;
  conversation: Conversation;
};

export function CurrentConversationSetter({
  children,
  conversation,
}: CurrentConversationSetterProps) {
  const [activeConversation, setActiveConversation] = useAppStore((state) => [
    state.activeConversation,
    state.setActiveConversation,
  ]);

  if (activeConversation?.id !== conversation.id) {
    setActiveConversation(conversation);
  }

  return <>{children}</>;
}
