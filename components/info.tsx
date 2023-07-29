"use client";

import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { Currency } from "@/components/ui/currency";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

interface InfoProps {
  data: Product;
}

export function Info({ data }: InfoProps) {
  const cart = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          type="button"
          aria-label={`Add ${data?.name} to cart`}
          onClick={() => cart.addItem(data)}
          className="flex items-center gap-x-2 rounded-full"
        >
          Add To Cart
          <Icons.shoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
