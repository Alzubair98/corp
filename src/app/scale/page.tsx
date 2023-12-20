import Hero from "@/components/hero";
import scale from "../../../public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgData={scale}
      imgAlt="scale image"
      title="Scale your app to infinity"
    />
  );
}
