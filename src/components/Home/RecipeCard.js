/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function RecipeCard() {
  return (
    <div class="card">
      <img
        src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
        class="rounded-md"
        alt=""
      />
      <h4 class="my-2">Chef Johns Turkey Sloppy Joes</h4>
      <div class="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ 5.0</span>
        <span>By: John Doe</span>
      </div>
    </div>
  );
}
