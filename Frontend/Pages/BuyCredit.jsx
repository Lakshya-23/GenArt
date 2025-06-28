import React from 'react'
import { plans } from '../src/assets/assets'
import CreditTile from '../components/CreditTile'
import { motion } from 'motion/react';

function BuyCredit() {
  return (
    <motion.div className='flex flex-col items-center pb-10 pt-4 min-h-[80vh]'
    initial={{opacity:0.2,y:90}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    viewport={{once:true}}
    >
      <button className=' border border-black/40 bg-white/60 sm:px-10 sm:py-1.5 rounded-full'>Our Plans</button>
      <p className=' text-xl sm:text-4xl font-medium my-10'>Choose the Plan</p>

      <div className='flex flex-wrap gap-9'>
        {plans.map((item,index)=>(
          <CreditTile item={item} index={index} key={index}/>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
