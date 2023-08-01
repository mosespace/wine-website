import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export function getProducts() {
  const filePath = path.join(process.cwd(), "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const products = JSON.parse(fileContents);
  return products;
}

export async function GET(request) {
  const products = await getProducts();
  return NextResponse.json(products);
}
