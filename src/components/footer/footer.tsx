import DownloadButton from 'assets/btn-play1.png';
import Player from 'components/player';

const Footer = () => {
    return (
        <footer className='fixed w-full bottom-0 h-24 z-50 flex items-center justify-center bg-black/30'>
            <img src={DownloadButton} alt='bouton téléchargement CV' className='relative' />
            <h6 className='uppercase text-[#454540] font-bold text-2xl absolute'>telecharger cv</h6>
            <Player />
        </footer>
    );
};

export default Footer;
