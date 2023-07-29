import { env } from "@/env.mjs";
import { Color } from "@/types";

const URL = `${env.NEXT_PUBLIC_API_URL}/colors`;

export async function getColors(): Promise<Color[]> {
  const response = await fetch(URL);

  return response.json();
}
