import React, { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/App/store/useAuthStore';
import { CartStore } from '@/App/store/useCartStore';
import { useNavigate } from 'react-router-dom';
import { useGoogleAuthStore } from '@/App/store/useAuthGoogleStore';
import { useAuth0 } from '@auth0/auth0-react';
import jwt_decode from "jwt-decode";

interface DecodedToken {
  user_id: string;
  user_rol: string;
  exp: number;
}

const UserPanel: React.FC = () => {
  const { logout } = useAuth0();
  const { isAuthenticated, token, logoutStore, profile } = useAuthStore();
  const { isGoogleAuthenticated, tokenGoogle, logoutGoogleStore } = useGoogleAuthStore();
  const decodedToken = token ? jwt_decode<DecodedToken>(token): null;
  const googleDecodedToken = tokenGoogle ? jwt_decode<DecodedToken>(tokenGoogle): null;
  console.log(decodedToken?.user_rol);
  console.log(googleDecodedToken?.user_rol);
  console.log('token', token);
  const navigate = useNavigate();
  const { clearCart } = CartStore(state => state);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function handleLogOut() {
    logoutStore();
    clearCart();
    navigate('/');
  }
  const handleAuth0LogOut = () => {
    logoutGoogleStore();
    logout();
    navigate('/');

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const loggedIn = token || tokenGoogle; // Variable para verificar si el usuario

  if (loggedIn && profile?.rol === 'user') {
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Link to='/profile'>
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
          </Link>
          <Divider />
          <button onClick={handleLogOut}>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </button>
        </Menu>
      </React.Fragment>
    );
  }
  if (loggedIn && googleDecodedToken?.user_rol === 'user') {
    return (
      <>
        <React.Fragment>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Link to='/profile'>
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
            </Link>
            <Divider />
            <button onClick={handleAuth0LogOut}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </button>
          </Menu>
        </React.Fragment>
      </>
    );
  }
  if (loggedIn && profile?.rol === 'admin') {
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Link to='/profile'>
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
          </Link>
          <Link to='/mainpaneladmin'>
            <MenuItem onClick={handleClose}>
              <Avatar /> DashBoard
            </MenuItem>
          </Link>
          <Divider />
          <button onClick={handleLogOut}>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </button>
        </Menu>
      </React.Fragment>
    );
  }
  return null
};


export default UserPanel;
