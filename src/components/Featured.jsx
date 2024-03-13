import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-10">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-800">
        <h1 className='text-6xl font-["Neue_Montreal"]'>Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 w-full mt-10">
          <div className="relative cardcontainer w-1/2  h-[70vh]">
            <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea67] z-[9] text-8xl font-["Founders_Grotesk_Condensed"] font-semibold leading-none tracking-tight'>
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt="first"
              ></img>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2  h-[70vh]">
            <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea67] z-[9] text-8xl font-["Founders_Grotesk_Condensed"] font-semibold leading-none tracking-tight'>
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt="second"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
