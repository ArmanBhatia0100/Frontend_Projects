export default function ChooseYourPlan() {
  return (
    <section className="flex flex-col items-center font-bold">
      <h1 className="my-20 text-6xl text-white">Choose Your Plan Today</h1>
      <div className="flex justify-evenly w-full plan-cards-container">
        <div className="bg-[#4A4A4A] shadow-black shadow-md p-10 rounded-xl w-96 h-80 text-white card">
          <h1 className="font-bold text-[#C0C0C0] text-3xl">FREE</h1>
          <h1 className="font-bold text-3xl">$0</h1>
          <ul className="my-5 ml-4 text-[#C0C0C0] text-xl list-disc">
            <li className="p-1 font-normal">5 Workout routines</li>
            <li className="p-1 font-normal">2x nutrition plan per year</li>
            <li className="p-1 font-normal"> Free Calorie Calculator</li>
            <li className="p-1 font-normal"> 3x beginner lvl Workout plan</li>
          </ul>
        </div>
        <div className="bg-[#4A4A4A] shadow-black shadow-md p-10 rounded-xl w-96 h-80 text-white card">
          <h1 className="font-bold text-[#C0C0C0] text-3xl">STANDARD</h1>
          <h1 className="font-bold text-3xl">$4.99</h1>
          <ul className="my-5 ml-4 text-[#C0C0C0] text-xl list-disc">
            <li className="p-1 font-normal">10 Workout routines</li>
            <li className="p-1 font-normal">4x nutrition plan per year</li>
            <li className="p-1 font-normal">Free Calorie Calculator</li>
            <li className="p-1 font-normal">5x beginner lvl Workout plan</li>
          </ul>
        </div>
        <div className="bg-[#4A4A4A] shadow-black shadow-md p-10 rounded-xl w-96 h-80 text-white card">
          <h1 className="font-bold text-[#C0C0C0] text-3xl">PREMIUM</h1>
          <h1 className="font-bold text-3xl">$7.99</h1>
          <ul className="my-5 ml-4 text-[#C0C0C0] text-xl list-disc">
            <li className="p-1 font-normal">Unlimited Workout routines</li>
            <li className="p-1 font-normal">6x nutrition plan per year</li>
            <li className="p-1 font-normal">Free Calorie Calculator</li>
            <li className="p-1 font-normal">7x beginner lvl Workout plan</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
