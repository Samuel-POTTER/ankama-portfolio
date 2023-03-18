import Turtle from "assets/bg-news.png";
import React from "react";

const Parcours = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="h-full bg-no-repeat bg-right-bottom bg-cover relative pt-10 md:pt-40 px-4 md:px-16"
      style={{ backgroundImage: `url(${Turtle})` }}
    >
      <h1 className="text-primary_dofus uppercase font-bebas text-5xl md:text-7xl">
        mon parcours
      </h1>
      <div className=" flex flex-col items-center absolute top-1/4 translate-y-4">
        <p className="text-primary_dofus text-2xl md:text-4xl  uppercase relative font-bebas">
          lycee
        </p>
        <div className="w-[5px] bg-primary_dofus h-28"></div>
        <p className="text-primary_dofus text-2xl md:text-4xl  uppercase font-bebas">
          universite
        </p>
        <div className="w-[5px] bg-primary_dofus h-28"></div>
        <p className="text-primary_dofus text-2xl md:text-4xl  uppercase font-bebas">
          epitech
        </p>
      </div>
      <div className="relative inset-x-0 h-3/4 md:w-1/3 md:left-40">
        <span className="absolute uppercase right-0 md:left-0 text-base md:text-xl top-1/4 -translate-y-20 font-semibold w-2/3 text-white">
          Bac scientifique specialite physique/chimie au lycee Antoine de
          saint-exupery a l'ile de la Reunion
        </span>
        <span className="absolute uppercase right-0 md:left-0 text-base md:text-xl top-1/2 -translate-y-16 font-semibold w-2/3 text-white">
          premiere annee commune aux etudes sante option medecine.
        </span>
        <span className="absolute uppercase right-0 md:left-0 text-base md:text-xl top-3/4 -translate-y-16 font-semibold w-2/3 text-white">
          ecole d'ingenieur en informatique nous formant dans de nombreux
          domaine de l'informatique. Le jeu vidéo, le web, la securité,
          l'intelligence artificielle, les mathématiques et autres.
        </span>
      </div>
    </section>
  );
});

export default Parcours;
