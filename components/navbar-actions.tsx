"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
// import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useCart } from "@/hooks/use-cart";

export function NavbarActions() {
  const [isMounted, setIsMounted] = React.useState(false);
  const router = useRouter();
  const cart = useCart();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        type="button"
        size="sm"
        aria-label="See what's in your cart"
        onClick={() => router.push("/cart")}
        className="rounded-full bg-black px-4"
      >
        <Icons.shoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      {/* <UserButton /> */}
    </div>
  );
}
