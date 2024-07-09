import Hero from "@/components/hero";
import home from "/public/images/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero imageData={home} imageAlt="factory" title="Professional cloud hosting" />
    </div>
  );
}
