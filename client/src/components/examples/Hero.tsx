import Hero from "../Hero";

export default function HeroExample() {
  return (
    <Hero onBrowseClick={() => console.log("Browse catalog clicked")} />
  );
}
