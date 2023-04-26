import { auth } from "@clerk/nextjs/app-beta";
import { notFound } from "next/navigation";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyInit;
  cache?: RequestCache;
};

export async function serverFetcher<TData>(
  pathname: string,
  options: RequestOptions = {}
) {
  const { getToken } = auth();
  const token = await getToken();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${pathname}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ...options,
    }
  );

  if (response.status === 404) notFound();

  if (response.status !== 200) throw new Error("Something wrong happened");

  return (await response.json()) as TData;
}
