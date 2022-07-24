import AllMember from 'assets/bg2.jpg';

const Project = () => {
    return (
        <section
            className='h-full bg-no-repeat bg-right bg-cover relative pt-40 px-16'
            style={{ backgroundImage: `url(${AllMember})` }}
        >
            <h1 className='text-primary_dofus uppercase text-7xl absolute right-20 top-1/4 font-bebas'>
                road to ankama
            </h1>
            <p className='font-bebas uppercase text-white text-2xl w-1/3 text-right absolute right-20 top-1/2'>
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
};

export default Project;
