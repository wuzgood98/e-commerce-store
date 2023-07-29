import "@/styles/globals.css";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/toaster";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";

const urban = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "La Tienda",
    template: `%s | La Tienda`,
  },
  description: "La tienda para todos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background min-h-screen", urban.className)}>
        <NextTopLoader color="var(--background)" />
        <Navbar />
        {children}
        <Toaster />
        <ModalProvider />
        <TailwindIndicator />
        <Footer />
      </body>
    </html>
  );
}
