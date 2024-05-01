import RecipeCard from "./RecipeCard";

export default function Recipes() {
  return (
    <div class="col-span-12 md:col-span-9">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
}
