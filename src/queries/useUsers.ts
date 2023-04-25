import { User } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type UseUsersProps = {
  username: string;
};

export function useUsers({ username }: UseUsersProps) {
  return useQuery({
    queryKey: ["get-users", username],
    queryFn: () =>
      axios.get<User[]>("/homies/users/search", {
        params: { username, includeSelf: false },
      }),
    enabled: !!username,
    select: (data) => data.data,
  });
}
