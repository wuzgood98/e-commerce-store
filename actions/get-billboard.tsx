import { BillboardType } from "@/types";
import { env } from "@/env.mjs";

const URL = `${env.NEXT_PUBLIC_API_URL}/billboards`;

export async function getBillboard(id: string): Promise<BillboardType> {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
}
