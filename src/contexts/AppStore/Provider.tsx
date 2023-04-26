"use client";
import { useContext, useRef } from "react";
import { AppStoreContext } from "./context";
import { AppState, createAppStore } from "@/store/app";
import { Conversation } from "@/types";
import { useStore } from "zustand";
import createSelectors from "@/store/createSelectors";

type AppStoreProviderProps = {
  children: React.ReactNode;
  conversations: Conversation[];
};

export function AppStoreProvider({
  children,
  conversations,
}: AppStoreProviderProps) {
  const storeRef = useRef(createSelectors(createAppStore({ conversations })));

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
}

export function useAppStore<T>(
  selector: (state: AppState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(AppStoreContext);
  if (!store) throw new Error("Missing AppStoreContext.Provider in the tree");
  return useStore(store, selector, equalityFn);
}
