"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions";
import { SparklesIcon } from "@heroicons/react/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mt-8 mb-5"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          It all starts with an idea..
        </h1>
      </motion.div> */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[30px] text-center mb-[15px]"
      >
        Skills
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[25px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Tech stacks I have worked with
      </motion.div>
    </div>
  );
};

export default SkillText;
