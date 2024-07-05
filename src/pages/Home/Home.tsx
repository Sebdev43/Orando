import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Hike } from '../../@types/hike';

import './Home.scss';
import CardComponent from '../../components/CardComponent/CardComponent';
import Skeleton from '@mui/joy/Skeleton/Skeleton';
import Box from '@mui/joy/Box/Box';

function Home() {
  const hikes = useSelector((state: any) => state.hikes.randomList);

  // TODO : faire le chargement dans le store
  const loading = true;

  // const loading = useSelector((state: any) => state.hikes.loadingRandomsHikes);
  // console.log('je suis loading sur HOME et je suis :', loading);

  function renderHikes() {
    return hikes.map((hike: Hike, index: number) => {
      return loading ? (
        <CardComponent key={index} {...hike} />
      ) : (
        <Box key={index}>
          <Skeleton variant="rectangular" width={360} height={360} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', width: '360' }} />
          <Skeleton variant="rectangular" width={360} height={80} />
        </Box>
      );
    });
  }

  return (
    <main className="home">
      <article>
        <img className="home__banner" />
        <h1 className="home__title">Bienvenue sur O'Rando !</h1>
        <article className="home__text-presentation">
          Bienvenue sur O'Rando, votre guide incontournable pour découvrir les
          plus beaux sentiers de randonnée à travers notre magnifique pays. Que
          vous soyez un randonneur débutant ou un passionné expérimenté, notre
          site a été conçu pour répondre à toutes vos attentes et vous offrir
          une expérience inoubliable en pleine nature. Chez O'Rando, nous
          croyons que chaque promenade est une opportunité de découvrir des
          paysages époustouflants, des trésors cachés et une biodiversité
          exceptionnelle. Notre mission est de vous aider à explorer les
          nombreux départements français, chacun offrant des itinéraires uniques
          et des aventures passionnantes.
          <br />
          <br />
          Notre plateforme propose une large gamme de randonnées soigneusement
          sélectionnées dans des régions variées, des sommets alpins majestueux
          aux collines verdoyantes du Massif Central, en passant par les plages
          sauvages de la Côte Atlantique et les forêts enchantées des Vosges.
          Chaque randonnée est décrite en détail, avec des informations précises
          sur la distance, le dénivelé, la durée estimée et le niveau de
          difficulté.
          <br />
          <br />
          Nous comprenons que la préparation est essentielle pour une randonnée
          réussie. C'est pourquoi O'Rando met à votre disposition des cartes
          interactives, des tracés GPS téléchargeables et des conseils pratiques
          pour vous aider à planifier votre sortie en toute sérénité. Vous
          trouverez également des suggestions d'équipements adaptés à chaque
          type de randonnée, qu'il s'agisse de courtes balades ou de treks de
          plusieurs jours.
          <br />
          <br />
          La sécurité étant notre priorité, nous fournissons des indications sur
          les conditions météorologiques, les périodes idéales pour partir et
          les précautions à prendre pour chaque itinéraire. De plus, notre
          communauté de randonneurs partage régulièrement des avis et des
          retours d'expérience, vous permettant de bénéficier de conseils avisés
          et de découvrir des astuces locales. Nous sommes fiers de promouvoir
          le respect de l'environnement et l'éthique de la randonnée
          responsable.
          <br />
          <br />
          À travers des articles et des guides, nous sensibilisons nos
          utilisateurs à l'importance de préserver les écosystèmes et de
          respecter les règles en vigueur dans les espaces naturels. O'Rando,
          c'est aussi une invitation à la convivialité et à l'échange. Rejoignez
          notre communauté en ligne pour partager vos propres aventures, vos
          photos et vos itinéraires préférés. Participez à nos forums de
          discussion pour poser des questions, trouver des compagnons de
          randonnée et échanger des bons plans. Que vous souhaitiez explorer les
          sentiers battus ou partir à la découverte de nouveaux horizons,
          O'Rando est là pour vous accompagner à chaque étape de votre aventure.
          <br />
          <br />
          Embarquez avec nous pour une expérience enrichissante, ressourçante et
          pleine de découvertes. Prêt à enfiler vos chaussures de randonnée et à
          partir à l'aventure ? Explorez notre site dès aujourd'hui et trouvez
          votre prochaine randonnée idéale. O'Rando : votre partenaire pour des
          escapades nature inoubliables à travers le pays !
          <br />
          <br />
        </article>
      </article>
      <NavLink to="/randonnees" className="no-decoration">
        <h2 className="home__title-cards">Voir les Randonnées ...</h2>
      </NavLink>
      <article className="cards__content">{renderHikes()}</article>
    </main>
  );
}

export default Home;
