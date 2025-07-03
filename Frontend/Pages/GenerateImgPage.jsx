import React, { useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import useAppStore from "../store/useAppStore";
import { motion } from "motion/react";
import { assets, models } from "../src/assets/assets";

function GenerateImgPage() {
  const [inputValue, setinputValue] = useState("");
  
  

  const {
    isImageLoading,
    isImageloaded,
    generateimage,
    setisImageloaded,
    imageurl,
    model,
    setmodel,
    isDisabled
  } = useAppStore(
    useShallow((state) => ({
      isImageLoading: state.isImageLoading,
      inputValue: state.inputValue,
      isImageloaded: state.isImageloaded,
      setisImageloaded: state.setisImageloaded,
      generateimage: state.generateimage,
      imageurl: state.imageurl,
      model: state.model,
      setmodel: state.setmodel,
      isDisabled: state.isDisabled,
    }))
  );

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => setIsOpen(!isOpen);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    generateimage(inputValue.trim(),model);
  };

  return (
    <motion.div
      className="flex flex-col  min-h-[90vh] mt-7"
      initial={{ opacity: 0.2, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <form onSubmit={onSubmitHandler} className=" flex flex-col items-center">
        <div>
          <div className="relative overflow-hidden">
            <img
              src={imageurl || assets.sampleimg_1}
              alt="sample_img"
              className="max-w-sm rounded-sm"
            />
            <span
              className={
                isImageLoading
                  ? "absolute bottom-0 left-0 bg-blue-500 w-full h-1.5 rounded-r transition-all duration-[11s]"
                  : "w-0"
              }
            />
          </div>
          {isImageLoading && <p className="text-md">Loading...</p>}
        </div>
        {!isImageloaded && (
          <div className="flex text-white bg-neutral-500 rounded-full p-0.5 w-full max-w-xl mt-10">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
              className=" flex-1 ml-8 max-sm:w-20 sm:w-xl outline-none bg-transparent"
              placeholder="Describe what you want to generate"
            />
            <button
              type="submit"
              className="bg-black/75 px-10 py-3 sm:px-16 rounded-full cursor-pointer"
              disabled={isDisabled}
            >
              Generate
            </button>
          </div>
        )}
        {!!isImageloaded && (
          <div className="flex items-center gap-2 mt-10">
            <button
              onClick={setisImageloaded}
              className="px-4 py-2.5 border rounded-full cursor-pointer bg-white/80"
            >
              Generate Another
            </button>
            <a
              href={imageurl}
              download={`generated-${Date.now()}.png`}
              className="px-9 py-3 rounded-full bg-black/75 text-white"
            >
              Download
            </a>
          </div>
        )}
      </form>
      
      <div className="w-full mt-6 pl-14">
        <div className="flex">
        <button
          onClick={toggle}
          className="text-left px-4 py-2 bg-black/85 text-white/90 rounded cursor-pointer"
        >
          {isOpen ? "Models ▲" : "Models ▼"}
        </button>
        <p className="px-4 py-2 bg-black/85 text-white/85 rounded ml-3">Current Model : {model}</p>
        </div>

        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-4">
            {models.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-black/70 text-white shadow-sm rounded hover:scale-[1.01] transition-all ease-in-out cursor-pointer"
                onClick={()=>setmodel(item.id)}
              >
                <label className="font-semibold text-lg">{item.title}</label>
                <p>{item.description}</p>
                <p className="bg-black w-fit py-0.5 px-2 rounded-sm mt-1.5">
                  {item.avg_time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default GenerateImgPage;
