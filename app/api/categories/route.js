import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export function getCategories() {
  const filePath = path.join(process.cwd(), "categories.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const categories = JSON.parse(fileContents);
  return categories;
}

export async function GET(request) {
  const categories = await getCategories();
  return NextResponse.json(categories);
}
