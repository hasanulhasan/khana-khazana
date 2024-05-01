/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Nav() {
  return (
    <nav>
    <div class="container flex justify-between py-6">
      <a href="/">
        <img src="/assets/images/logo.png" alt="" class="object-cover h-[40px]" />
      </a>

      <ul class="flex gap-4 text-sm text-gray-500">
        <li class="py-2 active">
          <a href="/">Home</a>
        </li>

        <li class="py-2">
          <a href="/recipe">Recipe</a>
        </li>

        <li class="py-2">
          <a href="/about">About us</a>
        </li>

        <li class="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
