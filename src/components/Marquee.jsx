import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[19vw] uppercase leading-none font-["Founders_Grotesk_Condensed"] -mb-[2vw] pb-10 font-semibold'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[19vw] uppercase leading-none font-["Founders_Grotesk_Condensed"] -mb-[2vw] pb-8 font-semibold'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[19vw] uppercase leading-none font-["Founders_Grotesk_Condensed"] -mb-[2vw] pb-8 font-semibold'
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
