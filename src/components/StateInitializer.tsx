"use client";
import { AppStoreState, useAppStore } from "@/store/app";

type State = {
  [S in keyof AppStoreState]?: AppStoreState[S];
};

type StateInitializerProps = {
  children: React.ReactNode;
  state?: State;
};

export function StateInitializer({ children, state }: StateInitializerProps) {
  const initializeState = useAppStore.use.initializePieceOfState();

  if (state) {
    initializeState(state);
  }

  return <>{children}</>;
}
