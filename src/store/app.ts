import { Conversation } from "@/types";
import { create, createStore } from "zustand";
import createSelectors from "./createSelectors";

interface AppProps {
  conversations: Conversation[];
}

export interface AppState extends AppProps {
  addConversation: (conversation: Conversation) => void;
}

export type AppStore = ReturnType<typeof createAppStore>;

export const createAppStore = (initProps?: Partial<AppProps>) => {
  const DEFAULT_PROPS: AppProps = {
    conversations: [],
  };

  return createStore<AppState>((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addConversation: (conversation: Conversation) =>
      set((state) => ({
        conversations: [conversation, ...state.conversations],
      })),
  }));
};
