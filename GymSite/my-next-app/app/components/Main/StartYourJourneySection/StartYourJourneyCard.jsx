import Image from "next/image";
import { FaSmileBeam } from "react-icons/fa";

export default function StartYourJourneyCard(props) {
  return (
    <div data-set="card-container" className="relative w-[31.25rem] max-w-[31.25rem]">
      
      <div data-set="img-container" className="overflow-hidden">
        <Image width={"616"} height={512} className="object-bottom shadow-black shadow-lg rounded-3xl w-[38.5rem] h-[32rem] object-cover" src={props.img} alt={props.imgAlt} />
      </div>
      <div data-set="smallCard" className="-bottom-20 left-7 absolute flex content-start bg-[#262626] shadow-black shadow-lg p-3 rounded-xl max-w-[28rem]">
      <FaSmileBeam
            style={{
              color: "#699BF7",
              height:"30px",
              fontSize: "6rem",
              marginRight: "0.4rem",
              display:"inline-block"
            }}
          />
        <div className="">
          <h3 className="font-bold text-white text-xl">Cardio Strength</h3>
          <p className="text-[#B3B3B3]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
