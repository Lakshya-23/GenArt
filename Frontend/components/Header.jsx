import React from "react";
import { PiShootingStarFill } from "react-icons/pi";
import { RiSparkling2Fill } from "react-icons/ri";
import { assets } from "../src/assets/assets";
import { motion } from "motion/react";
import useAppStore from "../store/useAppStore";
import { useNavigate } from "react-router-dom";

function Header() {

  const setshowsignin = useAppStore((state)=> state.setshowsignin)
  const isLoggedIn = useAppStore((state)=> state.isLoggedIn)
  const authUser = useAppStore((state)=> state.authUser)

  const navigate = useNavigate();

  const handleCLick = ()=>{
    if(authUser) navigate('/generate')
    else setshowsignin(true)
  }

  return (
    <motion.div
      className="flex flex-col items-center mt-16 mb-28"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      animate={{ opacity: 100, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="flex text-md border px-7 py-1.5 rounded-full gap-1 items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      >
        Best Text to image generator
        <span className="text-orange-400 rotate-y-180 text-xl">
          <PiShootingStarFill />
        </span>
      </motion.p>
      <h1 className="text-4xl  mx-w-[300px] sm:text-7xl sm:max-w-[590px] text-center mt-9">
        Turn text to <span className="text-blue-500">image</span>, in seconds.
      </h1>
      <motion.p className="mt-7  sm:text-lg sm:max-w-xl text-center"
        initial={{opacity:0, y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.6,duration:0.8,ease:'easeInOut'}}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just type , and watch the magic happen.
      </motion.p>
      <motion.button className="flex items-center gap-2 px-5 py-3 text-white bg-black rounded-full mt-10 cursor-pointer hover:scale-105 transition-all"
          whileTap={{scale:0.95}}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{default:{duration:-0.5},opacity:{delay:0.8,duration:1}}}   //default is applied to every other property excepted listed

          onClick={handleCLick}
      >
        Generate Images
        <RiSparkling2Fill className="text-yellow-300 text-xl  " />
      </motion.button>
      <motion.div className="flex flex-wrap gap-4 mt-11 "
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1,duration:1}}
      >
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              src={assets.sampleimg_1}
              alt="sample_img"
              className="w-14 sm:w-20 rounded-md  cursor-pointer hover:scale-105 transition-all duration-200 border border-black/50"
              key={index}
            />
          ))}
      </motion.div>
      <motion.p className="text-zinc-600"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2,duration:0.8}}
      >Generate Images from GenArt</motion.p>
    </motion.div>
  );
}

export default Header;
