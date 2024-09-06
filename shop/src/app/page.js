import {
  Advantage,
  Hero,
  Categories,
  Featured,
  Month,
  OurProducts,
  Products,
} from "@/components";

export default async function Home() {
  const result = await fetch("https://fakestoreapi.com/products");
  const products = await result.json();

  return (
    <div className="flex justify-center items-center flex-col gap-[100px]">
      <Hero />
      <Products products={products} />
      <Categories />
      <Month products={products} />
      <OurProducts products={products} />
      <Featured />
      <Advantage />
    </div>
  );
}
