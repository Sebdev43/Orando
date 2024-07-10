import './Map.scss';

type geoDatas = {
  geoDatas: string;
};

export default function Map({ geoDatas }: geoDatas) {
  // console.log(geoDatas);

  return (
    <>
      <div>Je suis l'encart de la Map</div>
      <p>{geoDatas}</p>
    </>
  );
}
