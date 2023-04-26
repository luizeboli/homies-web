export type User = {
  id: string;
  username: string;
};

export type Conversation = {
  id: string;
  ownerUsername: string;
  owner: User;
  users: User[];
  messages: Message[];
};

export type CreateConversation = {
  usernames: string[];
};

export type Message = {
  id: string;
  conversationId: string;
  authorId: string;
  content: string;
  createdAt: Date;
};
