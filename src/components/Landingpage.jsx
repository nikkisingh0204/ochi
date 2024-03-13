import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Landingpage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <div className="w-[9vw] mr-[1vw] rounded-md h-[5.5vw] relative top-[-.2vw] bg-green-500"></div>
                )}
                <h1 className='text-[9vw] h-full uppercase leading-[6.5vw] text-tight font-["Founders_Grotesk_Condensed"] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
