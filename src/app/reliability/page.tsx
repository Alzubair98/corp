import Hero from "@/components/hero";
import reliability from "../../../public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliability}
      imgAlt="reliability image"
      title="Super high reliability hosting"
    />
  );
}
