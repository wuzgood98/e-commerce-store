"use client";

import * as React from "react";
import { Dialog } from "@headlessui/react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Filter } from "@/components/filter";
import { Color, Size } from "@/types";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = React.useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <Button
        type="button"
        aria-label="Open dialog"
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2 lg:hidden rounded-full"
      >
        Filters
        <Icons.add size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={close}
      >
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25 motion-safe:transition-opacity motion-reduce:transition-none" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs motion-safe:transition motion-reduce:transition-none flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <Button
                type="button"
                aria-label="Close dialog"
                onClick={close}
                className="rounded-full h-auto w-auto bg-white hover:bg-white px-2 border shadow-md hover:scale-110 motion-safe:transition-transform motion-reduce:transition-none"
              >
                <Icons.close size={15} className="text-muted-foreground" />
              </Button>
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
