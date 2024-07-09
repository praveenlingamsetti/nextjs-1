import Hero from "@/components/hero";
import performanceImg from "/public/images/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      <Hero imageData={performanceImg} imageAlt="welding" title="We serve high performance app" />
    </div>
  );
}
