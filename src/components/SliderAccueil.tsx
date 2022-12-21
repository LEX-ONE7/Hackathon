const SliderAccueil = () =>  {
  return (
    <div className="container-fluid">
  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://www.entv.dz/wp-content/uploads/2019/12/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D8%B9%D8%A7%D9%85%D8%A9_%D8%B9%D9%86_%D9%83%D8%B1%D8%A9_%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D8%B1%D8%A9.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
          <h5>Volley-Ball</h5>
          <p>Le volley-ball est un sport collectif opposant deux équipes de six joueurs séparées par un filet de hauteur variable selon le niveau, qui s'affrontent avec un ballon sur un terrain rectangulaire de 18 mètres de long sur 9 mètres de large.
            Le volley-ball se joue soit dans un gymnase. Des variantes se jouent selon des règles et sur des terrains de dimensions différentes, telles le beach-volley sur terrain de sable, le Snow Volleyball sur neige, le Water Volleyball dans l'eau.'</p>
      </div>
</div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src="https://www.letelegramme.fr/images/2018/04/17/les-m17-filles-et-garcons-du-pavb-ont-conforte-leur-deuxieme_3907400.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Description du Sport</h5>
            <p>Sport collectif par excellence et sans contact direct avec l’adversaire, il développe des valeurs d’abnégation, de partage, d’adaptation et de respect. Cette discipline favorise le mouvement, la dépense physique, la motricité et la coordination. C’est un sport idéal pour toute la famille qui privilégie le plaisir et le jeu plus que les aspects techniques complexes que l’on retrouve en compétition. La mixité des équipes est également autorisée selon les catégories d’âge et niveaux de pratique.</p>
        </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src="https://static.actu.fr/uploads/2019/07/3-J6-JEUX-Volley-F-960x640.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Rencontre équipe Mixte</h5>
            <p>Match mixte organiser pendant l'interquartier afin de connaitre les différents techniques de chaque équipes. Ainsi optimiser les jeunes qui ne ce sont pas encore lancé dans un loisirs ou ceux qui hésite encore à ce lancé.</p>
        </div>
        </div>
</div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    </div>
);
};

export default SliderAccueil;