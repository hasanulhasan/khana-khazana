/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import UserInfo from "./UserInfo";

export default function Nav() {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <a href="/">
          <img
            src="/assets/images/logo.png"
            alt=""
            className="object-cover h-[40px]"
          />
        </a>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2">
            <a href="/">Home</a>
          </li>

          <li className="py-2">
            <a href="/recipe">Recipe</a>
          </li>

          <li className="py-2">
            <a href="/about">About us</a>
          </li>

          <UserInfo />
        </ul>
      </div>
    </nav>
  );
}
