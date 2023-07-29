import qs from "query-string";

import { env } from "@/env.mjs";
import { Product } from "@/types";

const URL = `${env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export async function getProducts(query: Query): Promise<Product[]> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url);

  return response.json();
}
