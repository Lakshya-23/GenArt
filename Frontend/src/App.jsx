import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import BuyCredit from "../Pages/BuyCredit";
import NotFoundPage from "../Pages/NotFoundPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenerateImgPage from "../Pages/GenerateImgPage";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import useAppStore from "../store/useAppStore";
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import Loader from "../components/loader";



function App() {

  const signInState = useAppStore((state)=> state.signInState)
  const showsignin = useAppStore((state)=> state.showsignin)
  const authUser = useAppStore((state)=> state.authUser)
  const checkAuth = useAppStore((state)=> state.checkAuth)
  const loading = useAppStore((state)=> state.loading)

  function CustomRoutes() {
    const element = useRoutes([
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/buy",
        element: <BuyCredit />,
      },
      {
        path: "/generate",
        element: loading?<Loader/>:authUser?<GenerateImgPage />: <Navigate to='/'/>,
      },
      {
        path: "*",
        element: [<NotFoundPage />]
      },
    ]);
    return element;
  }
 
  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-14 lg:px-24 bg-gradient-to-b from-[#f8fcff] to-[#e2f0ff] pb-5">
      <Navbar/>
      {showsignin && !authUser && (signInState ?<SignUp/>:<SignIn/>)}
      <CustomRoutes />
      <Footer/>
      <Toaster position="top-center"/>
    </div>
  );
}

export default App;
