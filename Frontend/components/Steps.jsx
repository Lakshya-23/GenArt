import React from "react";
import { stepsData } from "../src/assets/assets";
import { motion } from "motion/react"

function Steps() {
  return (
    <motion.div className="flex flex-col items-center mb-28"
    initial={{opacity:0.2,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    viewport={{once:true}}
    >
      <h1 className="text-4xl font-medium ">How it Works</h1>
      <p className="text-lg mt-2 text-zinc-600">Transform words into stunning images</p>
      <div className="mt-7">
        {stepsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center mt-4 gap-3 border/60 rounded-md px-11 py-7 bg-white/55 shadow-sm cursor-pointer hover:scale-[1.02] transition-all duration-200 " >
                <div className="text-xl  bg-blue-300 p-3 rounded-lg">
                    
              <Icon />
                </div>
              <div>
                <label className="text-lg sm:text-xl">{item.title}</label>
                <p className="text-zinc-600">"{item.description}"</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Steps;
