import { useAppSelector } from '../../hooks/redux';
import { Hike } from '../../@types/hike';
import './Home.scss';

// components
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import CardComponent from '../../components/CardComponent/CardComponent';
import ScrollToTop from '../../components/ScollToTop/ScrollToTop';

// Le composant actuel est la page Accueil
export default function Home() {
  // On récupère les états de notre store que l'on stock en copie locale
  const hikes = useAppSelector((state) => state.hikesRandom.randomHikesList);
  const loading = useAppSelector((state) => state.hikesRandom.loading);

  // Le rendu final du composant
  return (
    <main className="home">
      <article>
        <img className="home__banner" />
        <h1 className="page_title">Bienvenue sur O'Rando !</h1>
        <article className="home__text-presentation">
          Bienvenue sur O'Rando, votre guide incontournable pour découvrir les
          plus beaux sentiers de{' '}
          <a
            className="lien_wiki"
            href="https://fr.wikipedia.org/wiki/Randonn%C3%A9e"
            target="_blank"
          >
            randonnée
          </a>{' '}
          à travers notre magnifique pays. Que vous soyez un randonneur débutant
          ou un passionné expérimenté, notre site a été conçu pour répondre à
          toutes vos attentes et vous offrir une expérience inoubliable en
          pleine nature. Chez O'Rando, nous croyons que chaque promenade est une
          opportunité de découvrir des paysages époustouflants, des trésors
          cachés et une biodiversité exceptionnelle. Notre mission est de vous
          aider à explorer les nombreux départements français, chacun offrant
          des itinéraires uniques et des aventures passionnantes.
          <br />
          <br />
          Notre plateforme propose une large gamme de randonnées soigneusement
          sélectionnées dans des régions variées, des sommets alpins majestueux
          aux collines verdoyantes du{' '}
          <a
            className="lien_wiki"
            href="https://fr.wikipedia.org/wiki/Massif_central"
            target="_blank"
          >
            Massif Central
          </a>{' '}
          , en passant par les plages sauvages de la{' '}
          <a
            className="lien_wiki"
            href="https://fr.wikipedia.org/wiki/C%C3%B4te_atlantique_fran%C3%A7aise"
            target="_blank"
          >
            Côte Atlantique
          </a>{' '}
          et les forêts enchantées des{' '}
          <a
            className="lien_wiki"
            href="https://fr.wikipedia.org/wiki/Vosges"
            target="_blank"
          >
            Vosges
          </a>
          . Chaque randonnée est décrite en détail, avec des informations
          précises sur la distance, le dénivelé, la durée estimée et le niveau
          de difficulté.
          <br />
          <br />
          Nous comprenons que la préparation est essentielle pour une randonnée
          réussie. C'est pourquoi O'Rando met à votre disposition des cartes
          interactives, des tracés GPS téléchargeables et des conseils pratiques
          pour vous aider à planifier votre sortie en toute sérénité. Vous
          trouverez également des suggestions d'équipements adaptés à chaque
          type de randonnée, qu'il s'agisse de courtes balades ou de{' '}
          <a
            className="lien_wiki"
            href="https://fr.wikipedia.org/wiki/Trekking"
            target="_blank"
          >
            treks
          </a>{' '}
          de plusieurs jours.
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

      <h2 className="page_title">Quelques randonnées :</h2>
      <article className="cards__content">
        {loading ? (
          <SkeletonLoader skeletonNumber={4} />
        ) : (
          hikes.map((hike: Hike, index: number) => (
            <CardComponent key={index} {...hike} />
          ))
        )}
      </article>
    </main>
  );
}
