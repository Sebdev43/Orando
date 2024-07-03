import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';

export default function NavTel() {
  const navigate = useNavigate();

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button
            sx={{
              backgroundColor: '#73bfb7a9',
              ':hover': {
                backgroundColor: '#73bfb7',
              },
              color: 'black',
              boxShadow: '2px 2px 4px #000000',
              borderRadius: '7px',
              width: '150px',
            }}
            variant="contained"
            {...bindTrigger(popupState)}
          >
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              sx={{
                ':hover': {
                  backgroundColor: '#73bfb7',
                },
              }}
              onClick={() => {
                popupState.close();
                handleMenuClick('/');
              }}
            >
              Accueil
            </MenuItem>
            <MenuItem
              sx={{
                ':hover': {
                  backgroundColor: '#73bfb7',
                },
              }}
              onClick={() => {
                popupState.close();
                handleMenuClick('/randonnees');
              }}
            >
              Voir les randos
            </MenuItem>
            <MenuItem
              sx={{
                ':hover': {
                  backgroundColor: '#73bfb7',
                },
              }}
              onClick={() => {
                popupState.close();
                handleMenuClick('/favoris');
              }}
            >
              Favoris
            </MenuItem>
            <MenuItem
              sx={{
                ':hover': {
                  backgroundColor: '#73bfb7',
                },
              }}
              onClick={() => {
                popupState.close();
                handleMenuClick('/connexion');
              }}
            >
              Se Connecter
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
