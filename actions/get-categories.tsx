import { Category } from "@/types";
import { env } from "@/env.mjs";

const URL = `${env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(URL);

  return response.json();
}
