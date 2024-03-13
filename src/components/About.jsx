import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#cdea67] rounded-tl-3xl  rounded-tr-3xl text-black">
      <h1 className='w-[80%] font-["Neue_Montreal"] text-[3.5vw] leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, explain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="flex justify-between gap-5 w-full border-t-[1px] mt-10 pt-2 mb-20 border-[#a1b562]">
        <h5 className="w-1/2 font-light">What can you expect:</h5>
        <div className="para w-[30%] font-light">
            <p>
            We create tailored presentations to help you persuade your colleagues,
            clients, or investors. Whether it’s live or digital, delivered for one
            or a hundred people. 
            <p className="mt-10">We believe the mix of strategy and design (with a
            bit of coffee) is what makes your message clear, convincing, and
            captivating.</p>
            </p>
        </div>
        <div className="w-[20%]">
            <h5>S</h5>
        </div>
     </div>
      <div className="flex gap-5 w-full border-t-[1px] mt-10 pt-10 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className='font-["Neue_Montreal"] text-[3.5vw]'>Our appoach:</h1>
          <button className="flex items-center gap-8 uppercase px-8 py-4 bg-zinc-900 mt-6 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] bg-cover bg-center'></div>
      </div>
    </div>
  );
};

export default About;
