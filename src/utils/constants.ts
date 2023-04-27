export const WEBSOCKET_EVENTS = {
  EXCEPTION: "exception",
  CONVERSATION: {
    CREATED: "conversation.created",
    JOINED: "conversation.joined",
  },
  MESSAGE: {
    CREATED: "message.created",
  },
} as const;
