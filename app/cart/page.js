"use client";
import React from "react";
import Cart from "../components/Cart";
import { useApi } from "../context/context";

export default function Page() {
  const { cart } = useApi();
  return (
    <>
      <Cart data={cart} />
    </>
  );
}
