import Image from "next/image";

import { Currency } from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  data: Product;
}

export function CartItem({ data }: CartItemProps) {
  const cart = useCart();

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <Button
            type="button"
            aria-label="Remove item"
            onClick={() => cart.removeItem(data.id)}
            className="rounded-full h-auto w-auto bg-white hover:bg-white px-2 border shadow-md hover:scale-110 motion-safe:transition-transform motion-reduce:transition-none"
          >
            <Icons.close size={20} className="text-muted-foreground" />
          </Button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
}
