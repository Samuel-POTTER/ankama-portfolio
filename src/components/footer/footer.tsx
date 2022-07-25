import DownloadButton from 'assets/btn-play1.png';
import Cawotte from 'assets/dofuscawotte.png';
import Ocre from 'assets/dofusocre.png';
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
        <footer className='fixed w-full bottom-0 h-24 z-50 flex items-center justify-center bg-black/30'>
            <img src={DownloadButton} alt='bouton téléchargement CV' className='relative z-50' />
            <h6 className='uppercase text-[#454540] font-bold text-2xl absolute z-50'>telecharger cv</h6>
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
