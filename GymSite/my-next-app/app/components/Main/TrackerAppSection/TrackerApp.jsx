import Image from "next/image";
import trackerApp from "@/public/trackerApp.png";

// TODO:
// Change the tracker image to high quality.

export default function TrackerApp() {
  return (
    <section className="relative -z-10 flex justify-between mt-56 pt-20 border-t-4">
      <div
        className={`top-60 left-0 -z-5 absolute bg-[url('/FitnessBgText-Fitness.png')] bg-no-repeat opacity-15 w-full h-96 backgroundText-Programs`}
      ></div>
      <h1 className="font-bold text-6xl text-white">
        Fast And Easily<br></br>
        Track your progress.
      </h1>
      <div className="image-container">
        <Image width={500} height={512} className="relative z-10" src={trackerApp.src} alt="Tracker App" />
      </div>
    </section>
  );
}
