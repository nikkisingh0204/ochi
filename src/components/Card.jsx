const Card = () => {
  return (
    <div className="flex gap-10 items-center px-32 w-full h-screen bg-zinc-100">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="relative flex items-center justify-center card w-full h-full rounded-xl bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          ></img>
          <button className="absolute px-3 py-1 rounded-full text-[#cdea67] border-[#cdea67] left-10 bottom-8 border-[1px]">
            &copy;2023-2024
          </button>
        </div>
      </div>
      <div className="flex gap-5 cardcontainer w-1/2 h-[50vh]">
        <div className=" relative flex items-center justify-center card w-1/2 h-full rounded-xl bg-zinc-900">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          ></img>
          <button className="absolute px-3 py-1 rounded-full uppercase text-zinc-100 border-zinc-100 left-5 bottom-8 border-[1px] font-light text-sm">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="relative flex items-center justify-center card w-1/2 h-full rounded-xl bg-zinc-900">
          <img
            className="w-32"
            src="https://assets-global.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg"
            alt=""
          ></img>
          <button className="absolute px-3 py-1 rounded-full uppercase text-zinc-100 border-zinc-100 left-5 bottom-8 border-[1px] font-light text-sm">
            bussiness bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
