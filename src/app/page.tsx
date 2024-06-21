import Image from "next/image";
import Header from "./component/Header";
import Category from "./component/Category";
import ProductMain from "./component/Product/ProductMain";

export default function Home() {
  return (
  <main>
  <Category/>
  <ProductMain/>
  </main>  );
}
