import { AllProduct } from "@/components";

export default async function page() {
  const result = await fetch("https://fakestoreapi.com/products");
  const products = await result.json();

  return <AllProduct products={products} />;
}
