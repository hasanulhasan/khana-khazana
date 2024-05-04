import Hero from "@/components/Home/Hero";
import Nav from "@/components/Home/Nav";
import Recipes from "@/components/Home/Recipes";
import Sidebar from "@/components/Home/Sidebar";
import { getAllCategory, getAllRecipes } from "./db/queries";

export default async function Home() {
  const recipes = await getAllRecipes();
  const categories = await getAllCategory();

  return (
    <div>
      <Nav />
      <main>
        {/* <Hero /> */}
        <section className="container py-8">
          <div className="grid grid-cols-12 py-4">
            <Sidebar categories={categories} />
            <Recipes recipes={recipes} />
          </div>
        </section>
      </main>
    </div>
  );
}
