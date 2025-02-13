import StartYourJourneyCard from "./StartYourJourneyCard";
import img1 from "@/public/gymGirlAbs.jpg";
import img2 from "@/public/gymGuy.jpg";
import SmallCards from "./SmallCards";

export default function StartYourJourney() {
  return (
    <section className="my-24">
      <h1
        data-title="start-your-journey-title"
        className="drop-shadow-2xl font-extrabold text-6xl text-center text-white"
      >
        Get Into The Best Version Of You,<br></br> Start your journey Today
      </h1>
      <article className="flex justify-between items-center my-24">
        <StartYourJourneyCard img={img1.src} imgAlt={"gym Girl"} />
        <SmallCards />
        <StartYourJourneyCard img={img2.src} imgAlt={"gym Guy"} />
      </article>
    </section>
  );
}
