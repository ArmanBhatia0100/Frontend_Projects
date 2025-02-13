const BgTextProgram = (props) => {
  return (
      <div className={`top-3 left-3 -z-5 absolute bg-[url('/${props.path}')] bg-no-repeat opacity-5 w-full h-36 backgroundText-Programs`}></div>
  );
};

export default BgTextProgram;
