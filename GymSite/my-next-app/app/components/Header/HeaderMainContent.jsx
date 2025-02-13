export default function HeaderMainContent() {
  return (
    <main className="relative z-30">
      <div className="my-10 pl-[6.5rem]">
        <h1 className="drop-shadow-2xl p-0 font-bold text-[#EAEAEA] text-[150px] text-left leading-none">
          Be
        </h1>
        <h1 className="drop-shadow-2xl font-bold text-[#AF1E1E] text-[150px] leading-none">
          Focused
        </h1>
      </div>
      <div className="mb-16 pl-28 subPara">
        <p className="font-extrabold text-[#EAEAEA] text-2xl leading-10">
          To enjoy the power <br></br>
          and feel the vibe.
        </p>
      </div>
      <div className="pl-28 btn-container">
        <button
          type="button"
          className="bg-[#EAEAEA] hover:bg-[#699BF7] rounded-md w-40 h-16 font-semibold text-lg hover:text-[#EAEAEA]"
        >
          Start the workout
          {/* Add tailwind button */}
        </button>
      </div>
    </main>
  );
}
