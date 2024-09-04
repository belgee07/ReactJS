import { Hero } from "@/components";
import Products from "@/components/products/Products";

export default async function Home() {
  const result = await fetch("https://fakestoreapi.com/products");
  const products = await result.json();

  return (
    <div className="flex justify-center items-center flex-col gap-20">
      <Hero />
      <Products products={products} />
    </div>
  );
}
