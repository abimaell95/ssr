import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Que tal Ronaldo PRO !! Hybrid Rendering with Next.js</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const initialData = await res.json();

  return {
    props: { initialData },
  };
}
