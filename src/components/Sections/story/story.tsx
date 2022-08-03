import BarreDamn from 'assets/barre-damn.png';
import BarreLalcool from 'assets/barre-lalcool.png';
import BarreLord from 'assets/barre-lord.png';
import BarreMistva from 'assets/barre-mitsva.png';
import Parcho from 'assets/bg.jpg';
import React, { useState } from 'react';

const Story = React.forwardRef<HTMLElement>((props, ref) => {
    const character = [BarreLord, BarreLalcool, BarreMistva, BarreDamn];
    const [index, setIndex] = useState(0);

    const changeCharacter = (right: boolean) => {
        if (right) {
            setIndex(index + 1);
            if (index === character.length - 1) {
                setIndex(0);
            }
        } else {
            if (index - 1 < 0) {
                setIndex(character.length - 1);
            } else setIndex(index - 1);
        }
    };

    return (
        <section
            ref={ref}
            className='h-full bg-no-repeat bg-cover relative'
            style={{ backgroundImage: `url(${Parcho})` }}
        >
            <p className='text-center w-1/3 absolute text-white left-1/2 -translate-x-1/2 top-1/4 -translate-y-16 font-bold'>
                Nous sommes en <span className='text-orange_dofus'>2008</span>, en classe de 6ème. En pleine récréation,
                moi et mes amis étions à la recherche d'un nouveau jeu où nous pourrions nous y retrouver après les
                cours. Après quelques minutes de réflexion et un tour de table, une connaissance vint nous parler d'un
                <span className='text-orange_dofus'> MMORPG</span>.
                <br /> <br />A peine rentré chez nous, j'installais pour la première fois, ce jeu qui allait me suivre
                pendant <span className='text-orange_dofus'>mes 6 prochaines années</span>.
                <br />
                <br />
                <span className='text-orange_dofus uppercase text-2xl font-extrabold'>DOFUS</span>
                <br />
                <br />
                C'est ainsi sous la 1.29, que <span className='text-orange_dofus'>Barre-Lorde</span> arriva dans le
                Monde des Douze. Un jeune Crâ Terre sur <span className='text-orange_dofus'>Hel Munster</span>, le
                serveur qui allait devenir LA référence dans notre collège.
            </p>
            <svg
                onClick={() => changeCharacter(false)}
                className='fill-orange_dofus cursor-pointer translate-y-5 w-10 absolute right-1/2 -translate-x-20 bottom-1/3 rotate-180'
                version='1.1'
                id='Calque_1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 100 100'
            >
                <path
                    className='st0'
                    d='M74.1,36c-6-6-23.7-23.4-30.6-30c-5.4-5.4-14.8-5.4-20.5,0c-3.8,4.1-3.2,13.9-3.2,16.7v53.4
	c0,2.8-0.6,12.6,3.5,16.7c5.4,5.4,14.8,5.4,20.5,0c6.9-6.9,24.3-24,30.6-30C81.7,54.9,81.7,42.9,74.1,36z'
                />
            </svg>
            <img
                src={character[index]}
                alt='barre-lord'
                className='absolute left-1/2 w-32 -translate-x-1/2 bottom-1/4'
            />
            <svg
                onClick={() => changeCharacter(true)}
                className='fill-orange_dofus cursor-pointer translate-y-5 w-10 absolute left-1/2 translate-x-20 bottom-1/3'
                version='1.1'
                id='Calque_1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 100 100'
            >
                <path
                    className='st0'
                    d='M74.1,36c-6-6-23.7-23.4-30.6-30c-5.4-5.4-14.8-5.4-20.5,0c-3.8,4.1-3.2,13.9-3.2,16.7v53.4
	c0,2.8-0.6,12.6,3.5,16.7c5.4,5.4,14.8,5.4,20.5,0c6.9-6.9,24.3-24,30.6-30C81.7,54.9,81.7,42.9,74.1,36z'
                />
            </svg>
        </section>
    );
});

export default Story;
