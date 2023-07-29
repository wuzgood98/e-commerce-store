"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { Product } from "@/types";
import { Icons } from "./icons";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const previewModal = usePreviewModal();
  const router = useRouter();
  const cart = useCart();

  return (
    <div
      onClick={() => router.push(`/product/${product?.id}`)}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={product.images?.[0]?.url}
          alt="Product image"
          height={221}
          width={221}
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-reduce:transition-none absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <Button
              type="button"
              aria-label="Open product preview modal"
              onClick={(event) => {
                event.stopPropagation();
                previewModal.open(product);
              }}
              className="rounded-full h-auto w-auto bg-white hover:bg-white px-2 border shadow-md hover:scale-110 motion-safe:transition-transform motion-reduce:transition-none"
            >
              <Icons.expand size={20} className="text-muted-foreground" />
            </Button>

            <Button
              type="button"
              aria-label={`Add ${product?.name} to cart`}
              onClick={(event) => {
                event.stopPropagation();
                cart.addItem(product);
              }}
              className="rounded-full h-auto w-auto bg-white hover:bg-white px-2 border shadow-md hover:scale-110 motion-safe:transition-transform motion-reduce:transition-none"
            >
              <Icons.shoppingCart size={20} className="text-muted-foreground" />
            </Button>
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
      </div>
      {/* Price & Review */}
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  );
}
