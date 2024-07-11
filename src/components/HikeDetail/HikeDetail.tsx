import { Hike } from '../../@types/hike';
import './HikeDetail.scss';

// Components
import Map from '../Map/Map';

// libs
import { Button } from '@mui/material';

// utils
import { formatHikeTime } from '../../utils/regEx';
import { RenderDifficulty } from '../RenderTagDifficulty/RenderTagDifficultyStyle';

type HikeDetailProps = {
  hike: Hike;
};

// The actual component
function HikeDetail({ hike }: HikeDetailProps) {
  const geoDatas = hike.gps_coordinate;

  function renderPictures() {
    /* On ajoute le "?" sur "hike.pictures?" pour prévoir le cas ou les photos ne peuvent pas être
     chargées immediatement. Ainsi l'action sera effectuée quand les photos auront été chargées */
    try {
      return hike.pictures?.map((picture, index) => {
        index++;
        return (
          <figure key={index} className={`hike__picture-${index}`}>
            <img src={picture} alt={`Une photo de ${hike.title}`} />
            <figcaption hidden={true}>{hike.description}</figcaption>
            <meta property="og:title" content={hike.title} />
            <meta property="og:type" content="photo" />
            <meta
              property="og:description"
              content={hike.description}
              hidden={true}
            />
            <meta property="og:site_name" content="O'Rando" />
          </figure>
        );
      });
    } catch {
      throw new Error('Pas de photos trouvées');
    }
  }

  return (
    <>
      {/* Prévoir un logo pour représenter les favoris et le positionner prévoir de sortir cette logique 
      dans un composant "mettre en favoris" pour pouvoir coller le composant ou on souhaite par la suite*/}
      <Button
        aria-label="Ajouter aux favoris"
        size="small"
        variant="contained"
        color="warning"
      >
        Ajouter aux favoris
      </Button>
      <header className="hike__header">
        <h1 className="page_title">{hike.title}</h1>
        <h2>Description :</h2>
        <span className="hike__description">{hike.description}</span>
      </header>
      <main>
        <section aria-label="Photos qui présentent divers points de vue de la randonnée">
          {renderPictures()}
        </section>
        <section className="hike__tags">
          <span className="hike__tag-localisation">{hike.localisation}</span>
          <span className="hike__tag-difficulty">{RenderDifficulty(hike)}</span>
          <span className="hike__tag-time">{formatHikeTime(hike.time)}</span>
          <br />
          <span className="hike__tag-distance">{hike.distance} km</span>
        </section>
      </main>
      <section className="hike__details">
        <h3>Infos pratiques et itinéraire :</h3>
        <p>{hike.details}</p>
      </section>

      <section className="hike__map">
        <Map geoDatas={geoDatas} />
      </section>

      <footer className="hike__footer"></footer>
    </>
  );
}

export default HikeDetail;
