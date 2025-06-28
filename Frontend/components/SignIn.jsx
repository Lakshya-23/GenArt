import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import useAppStore from "../store/useAppStore";
import toast from "react-hot-toast";


function SignIn() {
  const [showPass, setshowPass] = useState(false);
  const [formdata,setformdata] = useState({
    email:'',
    password:'',
  })

  const setsignInState = useAppStore((state) => state.setsignInState);
  const setshowsignin = useAppStore((state) => state.setshowsignin);
  const signin = useAppStore((state)=> state.signin)

  function validateForm(data) {
    const { email, password } = data;

    if (!email) return toast.error("Email is required");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return toast.error("Incorrect email format");
  
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters long");
    return true;
  }
  
  function handleSubmit(e) {
    e.preventDefault();
  
    // Trim form data before validation
    const trimmed = {
      email: formdata.email.trim(),
      password: formdata.password.trim(),
    };
  
    const isValid = validateForm(trimmed);
  
    if (isValid === true) {
      setformdata(trimmed);
      signin(trimmed);
    }
  }



  //Prevent scroll on signin form
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex items-center justify-center">
      <motion.form onSubmit={handleSubmit} className=" bg-white px-10 py-9 rounded-2xl shadow-sm relative"
      initial={{ opacity: 0.2, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      >
        <h1 className="text-center text-2xl">Sign In</h1>
        <p className="text-zinc-600 mb-8 text-center">
          Welcome Back! Please Sign in to continue
        </p>
        <div className="flex items-center text-xl p-1 opacity-60 gap-3">
          <HiOutlineMail />
          <input
            type="text"
            className="p-1.5 pr-10"
            placeholder="Email"
            required
            value={formdata.email}
            onChange={(e)=> setformdata({...formdata,email:e.target.value})}
          />
        </div>
        <div className="flex items-center my-4 text-xl  p-1 opacity-60 gap-3">
          <FaLock />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              className=" p-1.5 pr-10"
              placeholder="Password"
              required
              value={formdata.password}
              onChange={(e)=> setformdata({...formdata,password:e.target.value})}
            />
            <button
              type="button"
              className="absolute top-2 right-3 text-2xl text-zinc-800"
              onClick={() => setshowPass(!showPass)}
            >
              {showPass ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
        </div>
        <Link className="my-3 text-blue-600">Forgot Password?</Link>
        <button type='submit' className="block px-10 py-2.5 text-white mx-auto my-5 bg-blue-500 rounded-full cursor-pointer active:scale-[1.02] transition-all duration-300 ">
          Sign In
        </button>
        <p>
          Dont have an account
          <Link onClick={setsignInState} className="text-blue-600 underline">

            Sign Up
          </Link>
        </p>
        <IoClose
          className="absolute top-2 right-2 text-2xl opacity-60 active:bg-gray-200  rounded-md cursor-pointer"
          onClick={() => setshowsignin(false)}
        />
      </motion.form>
    </div>
  );
}

export default SignIn;
