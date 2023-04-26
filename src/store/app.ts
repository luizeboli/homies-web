import { Conversation } from "@/types";
import { createStore } from "zustand";

interface AppProps {
  conversations: Conversation[];
  activeConversation: Conversation | null;
}

export interface AppState extends AppProps {
  addConversation: (conversation: Conversation) => void;
  setActiveConversation: (conversation: Conversation) => void;
}

export type AppStore = ReturnType<typeof createAppStore>;

export const createAppStore = (initProps?: Partial<AppProps>) => {
  const DEFAULT_PROPS: AppProps = {
    conversations: [],
    activeConversation: null,
  };

  return createStore<AppState>((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addConversation: (conversation: Conversation) =>
      set((state) => ({
        conversations: [conversation, ...state.conversations],
      })),
    setActiveConversation: (conversation: Conversation) =>
      set({
        activeConversation: conversation,
      }),
  }));
};
