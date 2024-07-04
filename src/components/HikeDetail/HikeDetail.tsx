import { Hike } from '../../@types/hike';
import './HikeDetail.scss';

// Components
import Map from '../Map/Map';

// libs
import { Button } from '@mui/material';

function HikeDetail(hike: Hike) {
  //
  // A fonction to show the pictures of the hike
  //TODO : Problème à régler ici : les images ne sont pas chargeées !
  function renderPictures() {
    return hike.pictures.map((picture: string, index: number) => {
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
  }

  return (
    <>
      {/* Prévoir un logo pour représenter les favoris et le positionner */}
      {/* prévoir de sortir cette logique dans un composant "mettre en favoris" */}
      {/* pour pouvoir coller le composant ou on souhaite */}
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
        <section aria-label="Photos qui présentent divers points de vue de la randonnée">
          {renderPictures()}
        </section>
        <section className="hike__tags">
          <span className="hike__tag-difficulty">{hike.difficulty}</span>
          <span className="hike__tag-time">{hike.time}</span>
          <span className="hike__tag-distance">{hike.distance}</span>
        </section>
      </main>
      <section className="hike__details">
        <h3>Infos pratiques et itinéraire :</h3>
        <p>{hike.details}</p>
      </section>

      <section className="hike__map">
        <Map />
      </section>

      <footer className="hike__footer"></footer>
    </>
  );
}

export default HikeDetail;
