import { Advantage, Hero } from "@/components";
import Categories from "@/components/categories/Categories";
import Featured from "@/components/featured/Featured";
import Month from "@/components/month/Month";
import OurProducts from "@/components/our_products/OurProducts";
import Products from "@/components/products/Products";

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
