import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/insta.jpg"
          title="Reels Clone"
          url="https://github.com/galaxylight1/instagram-reels-clone"
          description="Share fun and engaging videos."
        />
        <ProjectCard
          src="/covid.jpg"
          url="https://github.com/galaxylight1/automated-covid19-updates-on-twitter"
          title="Automated COVID-19 Updates"
          description="Get updates on twitter from verified sources."
        />
        <ProjectCard
          src="/excel2.jpg"
          url="https://github.com/galaxylight1/excel-clone"
          title="Excel Clone"
          description="Use it just like the real excel."
        />
        <ProjectCard
          src="/camera2.jpg"
          url="https://github.com/galaxylight1/camera-app"
          title="Camera Filters"
          description="Take photos and videos with filters."
        />
      </div>
    </div>
  );
};

export default Projects;
