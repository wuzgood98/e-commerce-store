import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("a58a1633-59e0-47e0-9825-7c948f364ce1");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex-col flex gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured products" products={products} />
        </div>
      </div>
    </Container>
  );
}
