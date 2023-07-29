import { env } from "@/env.mjs";
import { Product } from "@/types";

const URL = `${env.NEXT_PUBLIC_API_URL}/products`;

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
}
