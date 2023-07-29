import { env } from "@/env.mjs";
import { Size } from "@/types";

const URL = `${env.NEXT_PUBLIC_API_URL}/sizes`;

export async function getSizes(): Promise<Size[]> {
  const response = await fetch(URL);

  return response.json();
}
