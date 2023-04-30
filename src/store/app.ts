import { Conversation, Message } from "@/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import createSelectors from "./createSelectors";

export interface AppStoreState {
  messages: { [messageId: string]: Message };
  conversations: Conversation[];
}
export interface AppStore extends AppStoreState {
  addMessage: (message: Message) => void;
  updateMessage: (messageId: string, message: Partial<Message>) => void;
  removeMessage: (messageId: string) => void;
  addConversation: (conversation: Conversation) => void;
  initializePieceOfState: (state: Partial<AppStoreState>) => void;
}

const store = create(
  immer<AppStore>((set) => ({
    messages: {},
    addMessage: (message) =>
      set((state) => {
        state.messages = { [message.id]: message, ...state.messages };
      }),
    updateMessage: (messageId, message) => {
      set((state) => {
        state.messages[messageId] = {
          ...state.messages[messageId],
          ...message,
        };
      });
    },
    removeMessage: (messageId) => {
      set((state) => {
        delete state.messages[messageId];
      });
    },

    conversations: [],
    addConversation: (conversation) =>
      set((state) => ({
        conversations: [conversation, ...state.conversations],
      })),

    initializePieceOfState: (state) => {
      set(state);
    },
  }))
);

export const useAppStore = createSelectors(store);
