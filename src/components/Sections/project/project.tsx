import Dofus from "assets/video.mp4";
import React from "react";

const Project = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="md:relative bg-[#53273C] p-4 md:p-0">
      <video className="hidden md:block" autoPlay loop muted>
        <source src={Dofus} type="video/mp4" />
      </video>
      <h1 className="text-primary_dofus uppercase text-5xl md:text-7xl md:absolute md:right-20 top-1/4 font-bebas">
        road to ankama
      </h1>
      <p
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
        className="font-bebas uppercase text-white text-base md:text-2xl md:w-2/3 lg:w-1/3 md:text-right md:absolute right-20 top-1/2 stroke-black"
      >
        Qu'est ce que le
        <span className="text-orange_dofus"> projet road to ankama </span>? Il
        s'agit de mon objectif
        <span className="text-orange_dofus"> personnel </span>
        mais aussi de
        <span className="text-orange_dofus"> carrière</span>. Comme vous avez pu
        le constater, j'ai une envie de
        <span className="text-orange_dofus"> travailler pour vous </span>
        comme développeur. Cela fait de nombreuses années que je vois vos postes
        <span className="text-orange_dofus"> développeur</span>. Imaginez la
        joie que ce serait de travailler pour vous après avoir passé des années
        sur
        <span className="text-orange_dofus"> dofus</span>.
      </p>
    </section>
  );
});

export default Project;
