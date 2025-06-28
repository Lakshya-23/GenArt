import React from "react";
import { assets } from "../src/assets/assets";
import { motion } from "motion/react";

function Description() {
  return (
    <motion.div className="flex flex-col items-center mb-28 "
    initial={{opacity:0.2,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    viewport={{once:true}}
    >
      <h2 className="text-4xl font-medium">Create AI Images</h2>
      <p className="text-lg mt-2 text-zinc-600">Turn your imagination into visuals</p>
      <div className="sm:flex mt-16 gap-7 sm:gap-10 items-center ">
        <img src={assets.sampleimg_1} alt="sample_image1" className="w-72 sm:w-96 rounded-lg " />
        <section className="pt-5">
          <h2 className="text-3xl font-medium text-zinc-800 max-w-lg">Introducing the AI-Powered Text to Image Generator</h2>
          <p className="pt-5 text-zinc-600 max-w-xl">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="pt-5 text-zinc-600 max-w-xl">
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don't yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the
            creative possibilities are limitless!
          </p>
        </section>
      </div>
    </motion.div>
  );
}

export default Description;
