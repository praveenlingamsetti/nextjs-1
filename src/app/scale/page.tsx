import Hero from "@/components/hero";
import scaleImg from "/public/images/scale.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero imageData={scaleImg} imageAlt="factory" title="Scale your app to infinity" />
    </div>
  );
}
