import Image from "next/image";
import HeartIcon from "../../../../public/icons/tdesign_heart-filledheart-Icon.png";
import FireIcon from "../../../../public/icons/Vectorfire-icon.png";

export default function SmallCards() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col items-center bg-[#191919] shadow-black shadow-md my-6 p-4 rounded-xl smallCard1">
        <div className="bg-[#262626] my-2 p-1 rounded-full">
          <Image width={30} height={30} src={HeartIcon.src} alt="HeartBeat" />
        </div>
        <h2 className="text-center text-white">
          HeartBeat<br></br>124BPM
        </h2>
      </div>

      <div className="flex flex-col items-center bg-[#191919] shadow-black shadow-md p-4 rounded-xl smallCard2">
        <div className="bg-[#262626] my-2 p-1 rounded-full">
          <Image width={30} height={30}  src={FireIcon.src} alt="fireIcon" />
        </div>
        <h2 className="text-center text-white">
          Calories<br></br>1867Kcal
        </h2>
      </div>
    </div>
  );
}
