import IopHead from 'assets/characters.png';
import Logo from 'assets/logopotter.png';
import Reunion from 'assets/reunion.png';
import Me from 'assets/samuel.potter.jpg';
import { ModalProps } from 'components/modal/modal';

const Navbar = ({ setShowModal, setScrollTop }: ModalProps) => {
    return (
        <nav className='bg-black h-28 z-50 fixed w-full'>
            <div className='mx-40 flex justify-end items-center space-x-2'>
                <img src={IopHead} alt='iop head' />
                <h4 className='uppercase font-bold text-white'>samuel potter</h4>
                <img src={Me} alt='drapeau ile de la réunion' className='w-8' />
                <img src={Reunion} alt='drapeau ile de la réunion' className='w-8' />
            </div>
            <div className='relative'>
                <div className='h-1 bg-green_dofus'></div>
                <div id='triangle-code' className='absolute left-1/2 -translate-x-1/2'></div>
                <img
                    src={Logo}
                    alt='logo potter samuel'
                    className='absolute w-32 left-1/2 -translate-x-1/2 -translate-y-7'
                />
            </div>
            <ul className='mx-40 uppercase text-white font-bold flex items-center justify-between mt-5'>
                <li
                    onClick={() => setScrollTop && setScrollTop('first')}
                    className='cursor-pointer hover:text-green_dofus transition duration-150 delay-75 ease-in-out'
                >
                    dofus une histoire d'amour
                </li>
                <li
                    onClick={() => setScrollTop && setScrollTop('second')}
                    className='cursor-pointer hover:text-green_dofus transition duration-150 delay-75 ease-in-out'
                >
                    parcours
                </li>
                <li
                    onClick={() => setScrollTop && setScrollTop('third')}
                    className='cursor-pointer hover:text-green_dofus transition duration-150 delay-75 ease-in-out'
                >
                    le projet: road to ankama
                </li>
                <li
                    onClick={() => setShowModal(true)}
                    className='cursor-pointer hover:text-green_dofus transition duration-150 delay-75 ease-in-out'
                >
                    contacts
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
