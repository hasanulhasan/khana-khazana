import Nav from "@/components/Home/Nav";
import RecipeCard from "@/components/Home/RecipeCard";
import React from "react";

export default function CategoryPage() {
  return (
    <div>
      <Nav />
      <section class="container py-8">
        <div>
          <h3 class="font-semibold text-xl">Appetizers & Snacks</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        </div>
      </section>
    </div>
  );
}
