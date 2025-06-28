import React from 'react'
import { assets } from '../src/assets/assets'
import useAppStore from '../store/useAppStore'

function CreditTile({item}) {
    const isLoggedIn = useAppStore((state)=> state.isLoggedIn)
   
  return (
    <div className='border border-black/5 rounded-md py-12 px-14 bg-white/50 shadow-md  hover:scale-105 transition-all duration-300 '>
        <img src={assets.logo} alt="logo"  className='w-10 mb-4'/>
        <label className='text-zinc-800 font-medium text-xl'>{item.id}</label>
        <p className='mt-1 '>{item.desc}</p>
        <p className='mt-7 mb-14'><span className='text-3xl font-medium pr-2'>${item.price}</span>/{item.credits} credits</p>
        <button className='px-14 py-2.5 bg-zinc-900 text-white rounded-md cursor-pointer'>{isLoggedIn? "Purchase" : "Get Started"}</button>
    </div>
  )
}

export default CreditTile
