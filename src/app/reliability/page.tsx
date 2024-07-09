import Hero from "@/components/hero";
import reliableImg from "/public/images/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero imageData={reliableImg} imageAlt="welding" title="super high reliability hosting" />
    </div>
  );
}
