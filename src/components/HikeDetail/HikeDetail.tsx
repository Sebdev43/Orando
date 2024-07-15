import { Hike } from '../../@types/hike';
import './HikeDetail.scss';

// Components
import Map from '../Map/Map';
import Slider from 'react-slick';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

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
          <Slider {...sliderSettings}>
            {hike.pictures.map((picture, index) => (
              <div key={index}>
                <Zoom>
                  <img
                    loading="lazy"
                    className="slide-image"
                    src={picture}
                    alt={`Une photo de ${hike.title}`}
                  />
                </Zoom>
              </div>
            ))}
          </Slider>
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
