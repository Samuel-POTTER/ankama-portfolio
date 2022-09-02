import DownloadButton from 'assets/btndl.png';
import CV from 'assets/cv.pdf';
import Cawotte from 'assets/dofuscawotte.png';
import Ocre from 'assets/dofusocre.png';
import Tofus from 'assets/tofus_fat.png';
import Player from 'components/player';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
    const img = [Cawotte, Ocre];
    const [imageInc, setImageInc] = useState(0);

    const handleClick = () => {
        imageInc === img.length - 1 ? setImageInc(0) : setImageInc(imageInc + 1);
    };

    return (
        <footer className='fixed w-full bottom-0 h-24 z-50 hidden md:flex items-center justify-center bg-black/30'>
            <motion.img
                initial={{ y: -1000 }}
                animate={{ y: -30 }}
                transition={{ type: 'spring', duration: 2, delay: 2 }}
                src={Tofus}
                alt='tofus'
                className='absolute left-10'
            />
            <a href={CV} target='_blank' rel='noreferrer'>
                <img src={DownloadButton} alt='bouton téléchargement CV' className='relative z-50' />
            </a>
            <Player />
            <motion.img
                onClick={handleClick}
                animate={{ scale: 1.1 }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
                src={img[imageInc]}
                alt='cawotte'
                className='absolute w-24 right-10 cursor-pointer'
            />
        </footer>
    );
};

export default Footer;
