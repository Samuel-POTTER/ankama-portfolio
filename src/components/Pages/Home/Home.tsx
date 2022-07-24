import Footer from 'components/footer';
import Modal from 'components/modal';
import Navbar from 'components/navbar';

import Parcours from 'components/Sections/parcours';
import Project from 'components/Sections/project';
import Story from 'components/Sections/story';

import { useState } from 'react';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='h-screen relative'>
            <Navbar setShowModal={setShowModal} />
            {showModal && <Modal setShowModal={setShowModal} />}
            <Story />
            <Parcours />
            <Project />
            <Footer />
        </div>
    );
};

export default Home;
