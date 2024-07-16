import { useAppSelector } from '../../hooks/redux';

// Le composant actuel est la page Favoris
export default function Bookmarks() {
  const tokenStore = useAppSelector((state) => state.userConnection.token);
  const tokenStorage = localStorage.getItem('token');

  return (
    <>
      <header>
        <h1 className="page_title">Favoris</h1>
      </header>
      {/* <main>
        {tokenStore || tokenStorage ? (
          // afficher ici les favoris
        ) : (
          <p>Veuillez vous connecter pour accéder à votre compte.</p>
        )}
      </main> */}
    </>
  );
}
