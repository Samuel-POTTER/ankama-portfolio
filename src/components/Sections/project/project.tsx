import Dofus from 'assets/video.mp4';
import React from 'react';

const Project = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} className='md:relative bg-[#53273C] p-4 md:px-0'>
            <video className='hidden md:block' autoPlay loop muted>
                <source src={Dofus} type='video/mp4' />
            </video>
            <h1 className='text-primary_dofus uppercase text-5xl md:text-7xl md:absolute md:right-20 top-1/4 font-bebas'>
                road to ankama
            </h1>
            <p style={{textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}} className='font-bebas uppercase text-white text-base md:text-2xl md:w-1/3 md:text-right md:absolute right-20 top-1/2 stroke-black'>
                Qu'est ce que le
                <span className='text-orange_dofus'> projet road to ankama </span>? Il s'agit de mon objectif
                <span className='text-orange_dofus'> personnel </span>
                mais aussi de
                <span className='text-orange_dofus'> carrière</span>. Comme vous avez pu le constater, j'ai une envie de
                <span className='text-orange_dofus'> travailler pour vous </span>
                comme développeur. Il y a un ans j'ai vu votre offre en tant que
                <span className='text-orange_dofus'> développeur unity</span>. Afin de mettre toutes les chances de mon
                côté, j'ai décidé
                <span className='text-orange_dofus'> pendant 1 ans </span>
                de m'investir dans le développement de jeux. Le projet ankama consiste en cela, développer des jeux les
                plus complets possible afin de démontrer mes
                <span className='text-orange_dofus'> compétences </span>
                et
                <span className='text-orange_dofus'> capacités </span>
                sur unity afin de pouvoir
                <span className='text-orange_dofus'> postuler chez vous</span>.
            </p>
        </section>
    );
});

export default Project;
