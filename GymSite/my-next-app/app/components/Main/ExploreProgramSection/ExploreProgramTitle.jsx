import BgTextProgram from "../../UI/BgText-program";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import ProgramCard from "./ProgramCard"

export default function ExploreProgramTitle() {
  return (
    <>
      {" "}
      <BgTextProgram path={"bgText-program.png"}></BgTextProgram>
      <div className="relative z-20 flex justify-between mb-14 align-middle title-explore-our-pro">
        <h1 className="drop-shadow-2xl font-bold text-6xl text-white">Explore Our Programs</h1>
        <div className="cardBtn-next-previous">
          <button
            type="button"
            className="border-white hover:bg-[#699BF7] m-2 p-1 border rounded-full text-lg text-white"
          >
            <GrLinkPrevious size={"2.5rem"}></GrLinkPrevious>
          </button>
          <button
            type="button"
            className="border-white hover:bg-[#699BF7] m-2 p-1 border rounded-full text-lg text-white"
          >
            <GrLinkNext size={"2.5rem"}></GrLinkNext>
          </button>
        </div>
      </div>
      <div className="flex justify-evenly cards-container">
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
      </div>
    </>
  );
}
