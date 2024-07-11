import { Hike } from '../../@types/hike';
import './HikeDetail.scss';

// Components
import Map from '../Map/Map';

// libs
import { Button } from '@mui/material';

// utils

import { formatHikeTime } from '../../utils/regEx';
import { RenderDifficulty } from '../RenderTagDifficulty/RenderTagDifficultyStyle';

function HikeDetail(hike: Hike) {
  const text = hike.details;
  const regex = /\(\d+\)/g;
  const formatedDetails = text.replace(regex, (match) => `\n${match}`);
  const lines = formatedDetails.split('\n');
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
        <h1>{hike.title}</h1>
        <h2>Description :</h2>
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
          <span className="hike__tag-localisation">{hike.localisation}</span>
          <span className="hike__tag-difficulty">{hike.difficulty}</span>
          <span className="hike__tag-time">{formatHikeTime(hike.time)}</span>
          <span className="hike__tag-distance">{hike.distance} kms</span>
        </section>
        <section className="hike__details">
          <h3>Infos pratiques et itinéraire :</h3>
          <p>
            {lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </p>
        </section>

        <section className="hike__map">
          <Map />
        </section>
      </main>

      <footer className="hike__footer"></footer>
    </>
  );
}

export default HikeDetail;
