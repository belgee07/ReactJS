import { AllProduct } from "@/components";

export default async function page() {
  const result = await fetch("https://fakestoreapi.com/products");
  const products = await result.json();

  return (
    <div className="flex justify-center pt-10">
      <AllProduct products={products} />
    </div>
  );
}
