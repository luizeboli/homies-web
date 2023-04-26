import { User } from "@/types";

type FormatConversationUsersParams = {
  users: User[];
  owner: User;
  userId: string | null | undefined;
};

/**
 * Returns a list of users that is part of a conversation.
 */
export function formatConversationUsers({
  owner,
  userId,
  users,
}: FormatConversationUsersParams) {
  const imTheOwner = owner.id === userId;
  if (imTheOwner) {
    return users;
  }

  const usersWithoutMe = users.filter((user) => user.id !== userId);
  return [owner, ...usersWithoutMe];
}
