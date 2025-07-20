import { create } from "zustand";
import { assets, models } from "../src/assets/assets";
import { axiosinstance } from "../lib/axios"; 
import { toast } from "react-hot-toast";



const useAppStore = create((set,get)=>({
    authUser:null,
    isLoggedIn:false,                   //user
    loading:true,                       //keep this true else checkauth cannot be loaded in time and we get routed to home page
    isImageloaded:false,
    isImageLoading:false,
    signInState:false,
    showsignin:false,
    imageurl:null,
    isDisabled:false,
    model:"FLUX.1.1-pro",

    setshowsignin: (value) => set({showsignin:value}),
    setmodel:(modeldata)=>set({model:modeldata}),

    setisImageloaded : () => {
        const {isImageloaded} = get();
        set({isImageloaded:!isImageloaded})
    },
    setsignInState :()=>{
        const {signInState} =  get();
        set({signInState:!signInState})
    },

    

    signup:async (formdata)=>{
        try {
            set({loading:true})
            const res = await axiosinstance.post('/auth/signup',formdata)
            set({authUser:res.data,isLoggedIn:true,showsignin:false})
            toast.success('Account Created Successfully')
        } catch (error) {
            console.log("Error in signup",error);
            toast.error(error.response?.data?.mssg)
        }finally{
            set({loading:false})
        }
    },
    signin:async(formdata)=>{
        try {
            set({loading:true})
            const res = await axiosinstance.post('/auth/signin',formdata)

            set({authUser:res.data,isLoggedIn:true,showsignin:false})
            toast.success("Successfully Signed In")
        } catch (error) {
            console.log("Error in signin",error);
            toast.error(error.response?.data?.mssg)
        }finally{
            set({loading:false})
        }
    },
    logout:async()=>{
        try {
            await axiosinstance.post('/auth/logout')
            set({authUser:null,isLoggedIn:false,imageurl:null})
            toast.success("Logout Successful");

        } catch (error) {
            console.log(error);
        }
    },

    checkAuth:async()=>{
        try {
            set({loading:true})
            const res = await axiosinstance.get('/auth/check');
            set({authUser:res.data,isLoggedIn:true})

        } catch (error) {
            console.log('error in check auth',error);
            set({authUser:null})
        }finally{
            set({loading:false})
        }
    },
    generateimage:async(prompt,model)=>{
        const {authUser} = get();
        try {
            set({isImageLoading:true,isDisabled:true})
            const modelId = models.find((item) => item.id === model)?.Model_ID;
            if(authUser.creditBalance <= 0) return toast.error("Insufficient Credits")
            const res = await axiosinstance.post('/image/generate-image',{prompt,modelId})          //always send object to backend

            set({imageurl:res.data.resultimage , authUser:{...authUser,creditBalance:res.data.creditBalance},isImageloaded:true})
            toast.success(res.data.mssg)
        } catch (error) {
            console.log("error in generate image",error);
            toast.error(error.response?.data?.mssg)
            set({isImageloaded:false})
        }finally{
            set({isImageLoading:false,isDisabled:false})
        }
    }

}))




export default useAppStore;