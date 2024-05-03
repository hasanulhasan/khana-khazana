/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <Link href={`/details/${recipe?._id}`}>
      <div className="card">
        <img src={recipe?.thumbnail} className="rounded-md" alt="" />
        <h4 className="my-2">{recipe?.name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {recipe?.rating}</span>
          <span>By: {recipe?.author}</span>
        </div>
      </div>
    </Link>
  );
}
