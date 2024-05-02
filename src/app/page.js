import Hero from "@/components/Home/Hero";
import Nav from "@/components/Home/Nav";
import Recipes from "@/components/Home/Recipes";
import Sidebar from "@/components/Home/Sidebar";
import { getAllRecipes } from "./db/queries";

export default async function Home() {
  const recipes = await getAllRecipes();
  // console.log(recipes);

  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <section class="container py-8">
          <div class="grid grid-cols-12 py-4">
            <Sidebar />
            <Recipes recipes={recipes} />
          </div>
        </section>
      </main>
    </div>
  );
}
