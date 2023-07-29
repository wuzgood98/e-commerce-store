"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import { toast } from "@/components/ui/use-toast";
import { env } from "@/env.mjs";

export function Summary() {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast({ description: "Payment completed." });
      removeAll();
    }

    if (searchParams.get("cancelled")) {
      toast({ description: "Something went wrong.", variant: "destructive" });
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const ids = { productIds: items.map((item) => item.id) };

  async function checkout() {
    const response = await axios.post(
      `${env.NEXT_PUBLIC_API_URL}/checkout`,
      ids
    );

    window.location = response.data.url;
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <p className="text-base font-medium text-gray-900">Order total</p>
          <Currency value={totalPrice} />
        </div>
      </div>
      {/* Make disabled dynamic when you create a new account */}
      <Button
        aria-label="Checkout"
        type="button"
        onClick={checkout}
        disabled={items.length === 0}
        className="w-full mt-6 rounded-full"
      >
        Checkout
      </Button>
    </div>
  );
}
