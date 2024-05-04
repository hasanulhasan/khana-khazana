import { getRecipeByCategory } from "@/app/db/queries";
import Nav from "@/components/Home/Nav";
import RecipeCard from "@/components/Home/RecipeCard";

export async function generateMetadata({ params: { ctname } }) {
  const recipes = await getRecipeByCategory(ctname);
  const recipe = recipes.find(recipe => recipe?.category === ctname);

  return {
    title: `${recipe?.category}`,
    description: `khana kahzana desciption page`,
  };
}

export default async function CategoryPage({ params: { ctname } }) {
  const recipes = await getRecipeByCategory(ctname);
  console.log(ctname)
  
  return (
    <div>
      <Nav />
      <section className="container py-8">
        <div>
          <h3 className="font-semibold text-xl">Appetizers & Snacks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe?._id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
