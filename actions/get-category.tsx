import { env } from "@/env.mjs";
import { Category } from "@/types";

const URL = `${env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategory(id: string): Promise<Category> {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
}
