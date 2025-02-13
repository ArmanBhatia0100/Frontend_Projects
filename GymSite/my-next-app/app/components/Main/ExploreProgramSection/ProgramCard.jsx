import { FaSmileBeam } from "react-icons/fa";

const ProgramCard = () => {
  return (
    <div className="drop-shadow-2xl program-card mx-2 card">
      <div
        href="#"
        className="bg-[#535353] dark:bg-gray-800 shadow-lg p-6 rounded-lg max-w-sm"
      >
        <div className="flex align-middle">
          <FaSmileBeam
            style={{
              color: "#699BF7",
              fontSize: "2rem",
              marginRight: "0.4rem",
            }}
          />
          <h5 class="mb-2 font-bold text-2xl text-white tracking-tight">
            Cardio Strength
          </h5>
        </div>

        <p class="font-normal text-[#B3B3B3]">
          your goal for cardio exercise should be to feel an increase in your
          breathing and heart rate. The goal for strength workouts is to feel
          muscle fatigue.
        </p>
      </div>
    </div>
  );
};

export default ProgramCard;
