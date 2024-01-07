"use client";

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[50]">
            <div className="font-bold text-[16px]">Community</div>
            <a
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              href="https://github.com/galaxylight1"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
            <a
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              href="https://leetcode.com/galaxylight/"
            >
              <SiLeetcode />
              <span className="text-[15px] ml-[6px]">LeetCode</span>
            </a>
            <a
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              href="https://discordapp.com/users/prateeksingh99"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[50]">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              href="https://www.instagram.com/itsprateeksingh/"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              href="https://www.linkedin.com/in/prateeksingh9941/"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px]">
                prateeksingh9941@gmail.com
              </span>
            </p>
          </div>

          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                prateeksingh9941@gmail.com
              </span>
            </p>
          </div> */}
        </div>

        <div className="mb-[20px] mt-[40px] text-[15px] text-center">
          &copy; 2024. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
