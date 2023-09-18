import Link from "next/link";
import Tutorials from "./tutorials/page";
import Image from "next/image";
import Hero from "./layout/hero";
import Hero2 from "./layout/hero2";

export default async function Home() {
  return (
    <>
      <Hero/>
      <Tutorials />
      <Hero2/>
    </>
  );
}