import { Hike } from '../../@types/hike';
import './HikeDetail.scss';

// Components
import Map from '../Map/Map';

// libs
import { Button } from '@mui/material';

// utils
import { formatHikeTime } from '../../utils/regEx';

// Le typage
type HikeDetailProps = {
  hike: Hike;
};

// The actual component
function HikeDetail({ hike }: HikeDetailProps) {
  const geoDatas = hike.gps_coordinate;

  // Traitement du texte de l'itinéraire
  const text = hike.details;
  const regex = /\(\d+\)/g;
  const formatedDetails = text.replace(regex, (match) => `\n${match}`);
  const lines = formatedDetails.split('\n');

  return (
    <>
      <header className="hike__header">
        <h1>{hike.title}</h1>
        <h2 className="hike__subtitle">Description :</h2>
        <span className="hike__description">{hike.description}</span>
      </header>
      <main>
        <section
          className="hike__pictures"
          aria-label="Photos qui présentent divers points de vue de la randonnée"
        >
          <section className="section__one">
            <figure className={`large__grid`}>
              <img
                loading="lazy"
                className="large__picture"
                src={hike.pictures[0]}
                alt={`Une photo de ${hike.title}`}
              />
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
          </section>

          <section className="section__two">
            <figure className={`small__picture`}>
              <img
                className="small__picture"
                src={hike.pictures[1]}
                alt={`Une photo de ${hike.title}`}
              />
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
            <figure className={`small__picture`}>
              <img
                className="small__picture"
                src={hike.pictures[2]}
                alt={`Une photo de ${hike.title}`}
              />
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
          </section>
        </section>
        <section className="hike__tags">
          <span className="hike__tags-localisation">{hike.localisation}</span>
          <span className="hike__tags-difficulty">{hike.difficulty}</span>
          <span className="hike__tags-time">{formatHikeTime(hike.time)}</span>
          <span className="hike__tags-distance">{hike.distance} kms</span>
        </section>
        <section className="hike__details">
          <h3>Infos pratiques et itinéraire :</h3>

          {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </section>

        <section className="hike__map">
          <Map geoDatas={geoDatas} />
        </section>

        <footer className="hike__footer"></footer>
      </main>
    </>
  );
}

export default HikeDetail;
