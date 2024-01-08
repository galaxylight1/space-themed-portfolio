"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  src: string;
  url: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, url, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[45]">
      <a target="_blank" href={url}>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="object-contain cursor-pointer opacity-85"
        />
      </a>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
