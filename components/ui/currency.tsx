"use client";

import * as React from "react";
import { formatter } from "@/lib/utils";

interface CurrencyProps {
  value?: number | string;
}

export function Currency({ value = 0 }: CurrencyProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <p className="font-semibold">{formatter.format(Number(value))}</p>;
}
