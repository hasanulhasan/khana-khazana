import Hero from "@/components/Home/Hero";
import Nav from "@/components/Home/Nav";
import Recipes from "@/components/Home/Recipes";
import Sidebar from "@/components/Home/Sidebar";

export default function Home() {
  return (
    <div>
      <Nav/>
      <main>
        <Hero/>
        <section class="container py-8">
      <div class="grid grid-cols-12 py-4">
        <Sidebar/>
        <Recipes/>
        </div>
        </section>
      </main>
    </div>
  );
}
