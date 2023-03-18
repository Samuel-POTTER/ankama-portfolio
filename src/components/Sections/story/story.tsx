import Parcho from "assets/bg.jpg";
import Selector from "components/selector";
import React from "react";

const Story = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="h-full bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${Parcho})` }}
    >
      <p className="text-center md:w-1/3 w-full absolute text-white px-2 md:px-0 left-1/2 -translate-x-1/2 top-1/4 md:-translate-y-16 font-bold text-black-shadow">
        Nous sommes en <span className="text-orange_dofus">2008</span>, en
        classe de 6ème. En pleine récréation, moi et mes amis étions à la
        recherche d'un nouveau jeu où nous pourrions nous y retrouver après les
        cours. Après quelques minutes de réflexion et un tour de table, une
        connaissance vint nous parler d'un
        <span className="text-orange_dofus"> MMORPG</span>.
        <br /> <br />A peine rentré chez nous, j'installais pour la première
        fois, ce jeu qui allait me suivre pendant{" "}
        <span className="text-orange_dofus">mes 6 prochaines années</span>.
        <br />
        <br />
        <span className="text-orange_dofus uppercase text-2xl font-extrabold">
          DOFUS
        </span>
        <br />
        <br />
        C'est ainsi sous la 1.29, que{" "}
        <span className="text-orange_dofus">Barre-Lorde</span> arriva dans le
        Monde des Douze. Un jeune Crâ Terre sur{" "}
        <span className="text-orange_dofus">Hel Munster</span>, le serveur qui
        allait devenir LA référence dans notre collège.
      </p>
      <Selector />
    </section>
  );
});

export default Story;
