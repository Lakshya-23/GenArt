import React, { useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAppStore from "../store/useAppStore";
import {toast} from 'react-hot-toast'
import { motion } from "motion/react";
import Loader from "./loader";

function SignUp() {
  const [showPass, setshowPass] = useState(false);
  const [showconfirmPass, setshowconfirmPass] = useState(false);
  const [formdata,setformdata] = useState({
    name:'',
    email:'',
    password:'',
    confirmPass:''
  })


  const setsignInState = useAppStore((state)=> state.setsignInState)
  const setshowsignin = useAppStore((state)=> state.setshowsignin)
  const signup = useAppStore((state)=> state.signup)
  const loading = useAppStore((state)=> state.loading)

  function validateForm(data) {
    const { name, confirmPass, email, password } = data;

    if (!name) return toast.error("Full Name is required");
    if (!email) return toast.error("Email is required");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return toast.error("Incorrect email format");
  
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters long");
  
    if (password !== confirmPass)
      return toast.error("Confirm Password does not match Password");
    return true;
  }
  
  function handleSubmit(e) {
    e.preventDefault();
  
    // Trim form data before validation
    const trimmed = {
      name: formdata.name.trim(),
      email: formdata.email.trim(),
      password: formdata.password.trim(),
      confirmPass: formdata.confirmPass.trim(),
    };
  
    const isValid = validateForm(trimmed);
  
    if (isValid === true) {
      setformdata(trimmed);
      signup(trimmed);
    }
  }
  
  

  //Prevent scroll on signup form
  useEffect(()=>{
    document.body.style.overflow='hidden';
    return(()=> document.body.style.overflow='unset')
  },[])


  if(loading) return <Loader/>
  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex items-center justify-center">
      <motion.form  onSubmit={handleSubmit} className=" bg-white px-10 py-9 rounded-2xl shadow-sm relative"
      initial={{opacity:0.2,y:90}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5}}
      viewport={{once:true}}
      >
        <h1 className="text-center text-2xl">Sign Up</h1>
        <p className="text-zinc-600 mb-8 text-center">
          Create a account to get started
        </p>
        <div className="flex items-center my-4 text-xl p-1 opacity-60 gap-3">
          <FaUser />
          <input type="text" className="p-1.5 pr-10" placeholder="Name"  value={formdata.name} onChange={(e)=>setformdata({...formdata,name:e.target.value})} />
        </div>
        <div className="flex items-center text-xl p-1 opacity-60 gap-3">
          <HiOutlineMail />
          <input type="text" className="p-1.5 pr-10" placeholder="Email"  value={formdata.email} onChange={(e)=>setformdata({...formdata,email:e.target.value})}/>
        </div>
        <div className="flex items-center my-4 text-xl  p-1 opacity-60 gap-3">
          <FaLock />
          <div className="relative">
            <input
              type={showPass?'text':'password'}
              className=" p-1.5 pr-10"
              placeholder="Password"
              name='password'
              value={formdata.password} onChange={(e)=>setformdata({...formdata,password:e.target.value})}
            />
            <button type='button' className="absolute top-2 right-3 text-2xl text-zinc-800" onClick={()=>setshowPass(!showPass)} >
                {
                    showPass?<IoEyeOff  />: <IoEye/>
                }
              
            </button>
          </div>
        </div>
        <div className="flex items-center my-4 text-xl  p-1 opacity-60 gap-3">
          <FaLock />
          <div className="relative">
          <input
            type={showconfirmPass?'text':'password'}
            className="p-1.5 pr-10"
            name='confirm-password'
            placeholder="Confirm Password"
            value={formdata.confirmPass} 
            onChange={(e)=>setformdata({...formdata,confirmPass:e.target.value})}
            
          />
          <button type='button' className="absolute top-2 right-3 text-2xl text-zinc-800" onClick={()=>setshowconfirmPass(!showconfirmPass)}>
                {
                    showconfirmPass?<IoEyeOff  />: <IoEye/>
                }
              
            </button>
          </div>
          
        </div>
        <button type="submit" className=" block px-10 py-2.5 text-white mx-auto my-5 bg-blue-500 rounded-full cursor-pointer active:scale-[1.02] transition-all duration-300 ">
          Create Account
        </button>
        <p>
          Already have an account
          <Link className="text-blue-600 underline" onClick={setsignInState}> Sign In</Link>
        </p>
        <IoClose className='absolute top-2 right-2 text-2xl opacity-60 cursor-pointer active:bg-gray-200  rounded-md' onClick={()=>setshowsignin(false)}/>
      </motion.form>
    </div>
  );
}

export default SignUp;
