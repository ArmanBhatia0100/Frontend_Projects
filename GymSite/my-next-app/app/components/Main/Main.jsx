import ChooseYourPlan from "./ChooseYourPlanSection/ChooseYourPlan";
import ExploreProgramTitle from "./ExploreProgramSection/ExploreProgramTitle";
import StartYourJourney from "./StartYourJourneySection/StartYourJourney";
import TrackerApp from "./TrackerAppSection/TrackerApp";

const Main = () => {
  return (
    <div className="relative z-10 bg-[#262626] px-24 py-16 min-w-full overflow-hidden main-container">
      <ExploreProgramTitle />
      <StartYourJourney />
      <TrackerApp />
      <ChooseYourPlan />
    </div>
  );
};
export default Main;
