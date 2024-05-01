import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div class="col-span-12 md:col-span-3">
      <h3 class="font-bold text-xl">Recipes</h3>
      <ul class="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        <li>
          <Link href="/category/something">Morning Bliss Café</Link>
        </li>

        <li>
          <Link href="/category/something">Sunrise Bites Kitchen</Link>
        </li>

        <li>
          <Link href="/category/something">Brunch Haven Delights</Link>
        </li>

        <li>
          <Link href="/category/something">Rise & Dine Eatery</Link>
        </li>

        <li>
          <Link href="/category/something">Breakfast Oasis Junction</Link>
        </li>
      </ul>
    </div>
  );
}
