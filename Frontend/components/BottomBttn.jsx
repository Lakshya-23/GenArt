import React from 'react'
import { RiSparkling2Fill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import useAppStore from '../store/useAppStore';
import { motion } from 'motion/react'; 

function BottomBttn() {

  const setshowsignin = useAppStore((state)=> state.setshowsignin)
  const isLoggedIn = useAppStore((state)=> state.isLoggedIn)

  const navigate = useNavigate();

  const handleCLick = ()=>{
    if(isLoggedIn) navigate('/generate')
    else setshowsignin(true)
  }

  return (
    <motion.div className='flex flex-col items-center mb-28'
    initial={{opacity:0.2,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    viewport={{once:true}}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">See the Magic. Try Now</h2>
      <button className="flex  items-center gap-2 px-5 py-3 text-white bg-black rounded-full mt-9 cursor-pointer hover:scale-105 transition-all"

     onClick={handleCLick}
     >
        Generate Images <RiSparkling2Fill className="text-yellow-300 text-xl" />
      </button>
    </motion.div>
  )
}

export default BottomBttn
