import Footer from 'components/footer';
import Modal from 'components/modal';
import Navbar from 'components/navbar';

import Parcours from 'components/Sections/parcours';
import Project from 'components/Sections/project';
import Story from 'components/Sections/story';

import { useEffect, useRef, useState } from 'react';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [scrollTop, setScrollTop] = useState('');

    const storyRef = useRef<HTMLElement>(null);
    const parcoursRef = useRef<HTMLElement>(null);
    const projectRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const scrollingEvent = () => {
            switch (scrollTop) {
                case 'first':
                    storyRef.current && storyRef.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'second':
                    parcoursRef.current && parcoursRef.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'third':
                    projectRef.current && projectRef.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                default:
                    break;
            }
        };
        scrollingEvent();
    }, [scrollTop]);

    return (
        <div className='h-screen relative'>
            <Navbar setScrollTop={setScrollTop} setShowModal={setShowModal} />
            {showModal && <Modal setShowModal={setShowModal} />}
            <div className='h-full'>
                <Story ref={storyRef} />
                <Parcours ref={parcoursRef} />
                <Project ref={projectRef} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
