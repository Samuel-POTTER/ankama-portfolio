import BarreDamn from 'assets/barre-damn.png';
import BarreLalcool from 'assets/barre-lalcool.png';
import BarreLord from 'assets/barre-lord.png';
import BarreMistva from 'assets/barre-mitsva.png';
import { useState } from 'react';

const Selector = () => {
    const character = [
        {
            img: BarreLord,
            name: 'Lord'
        },
        {
            img: BarreDamn,
            name: 'Damn'
        },
        {
            img: BarreLalcool,
            name: 'Lalcool'
        },
        {
            img: BarreMistva,
            name: 'Mistva'
        }
    ];

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
        <div className='hidden md:block'>
            <svg
                onClick={() => changeCharacter(false)}
                className='fill-orange_dofus cursor-pointer translate-y-24 md:translate-y-5 w-10 absolute right-1/2 -translate-x-20 bottom-1/4 md:bottom-1/3 rotate-180'
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
            <div className='absolute left-1/2 -translate-x-1/2 translate-y-40 md:translate-y-0 bottom-1/4 flex flex-col justify-center'>
                <img src={character[index].img} alt='barre-lord' className='w-32' />
                <span className='text-orange_dofus text-center font-semibold'>Barre-{character[index].name}</span>
            </div>
            <svg
                onClick={() => changeCharacter(true)}
                className='fill-orange_dofus cursor-pointer translate-y-24 md:translate-y-5 w-10 absolute left-1/2 translate-x-20 bottom-1/4 md:bottom-1/3'
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
        </div>
    );
};

export default Selector;
