"use client"

import Categories from "../components/categories";
import Gigs from "../components/gigs"; // Capitalized component name
import { getProductsList } from "../services";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [productList, setProductList]=useState([])

  useEffect(()=>{
    getProductList();
  }, [])

  const getProductList = async()=>{
    const result = await getProductsList();
    console.log(result);
    setProductList(result?.products)
  }



  return (
    <div className="md:p-5">
      <hr className="md:hidden" />
      <Categories />
      <Gigs products={productList} /> {/* Corrected component name */}
    </div>
  );
}
