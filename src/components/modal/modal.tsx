import ModalImg from 'assets/card.png';

import { AiFillMail } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';

export type ModalProps = {
    setShowModal: (showModal: boolean) => void;
};

const Modal = ({ setShowModal }: ModalProps) => {
    return (
        <div onClick={() => setShowModal(false)} className='fixed h-screen w-screen bg-black/50 z-50'>
            <img
                src={ModalImg}
                alt='modal contact'
                className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
            />
            <div className='absolute top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6 left-1/2 -translate-x-1/2'>
                <div className='flex text-primary_dofus items-center space-x-4 text-3xl'>
                    <AiFillMail />
                    <p className='font-bold'>samuel.potter@epitech.eu</p>
                </div>
                <div className='text-primary_dofus flex items-center space-x-4 text-3xl'>
                    <BsTelephoneFill />
                    <p className='text-primary_dofus font-bold'>0692 33 03 06</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
