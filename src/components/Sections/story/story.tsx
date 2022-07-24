import BarreLord from 'assets/barre-lord.png';
import Parcho from 'assets/bg.jpg';

const Story = () => {
    return (
        <section className='h-full bg-no-repeat bg-cover relative' style={{ backgroundImage: `url(${Parcho})` }}>
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
            <img src={BarreLord} alt='barre-lord' className='absolute left-1/2 w-32 -translate-x-1/2 bottom-1/4' />
        </section>
    );
};

export default Story;
