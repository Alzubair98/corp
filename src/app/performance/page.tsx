import Hero from "@/components/hero";
import performace from "../../../public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performace}
      imgAlt="performance image"
      title=" we serve high performance applications"
    />
  );
}
