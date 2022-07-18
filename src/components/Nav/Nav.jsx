import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import FolderIcon from "@mui/icons-material/Folder";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import LogOutButton from '../LogOutButton/LogOutButton';

import { useHistory } from 'react-router-dom';



const itemList = [
  {
    text: 'Home',
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    text: 'Joined Tournament',
    icon: SportsEsportsIcon ,
    link: "/join"
  },
  {
    text: 'Edit',
    icon: LoginIcon,
    link: "/edit",
  },
  {
    text: 'About',
    icon:  LogoutIcon,
    link: "/about",
  }

];

const menuList= [
  {
    text: 'Login',
    icon: LoginIcon,
    link: "/login",
  },
  {
    text: 'Logout',
    icon:  LogoutIcon,
    link: <LogOutButton />
  },
  
]



export default function TemporaryDrawer() {

  const history = useHistory();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = (event) => {
    history.push('/home')
  }

  const handleJoin = (event) => {
    history.push('/join')
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="NavBar">
        {itemList.map((words, index) => (
          
          <ListItem key={words.text} disablePadding>
            {/* <Link className="tournament-link" to="/home" style={{ textDecoration: 'none' }}> */}
            <ListItemButton component={Link} to={words.link}>
            
              <ListItemIcon >
              
                {index % 4 === 0 ? <HomeIcon /> : <SportsEsportsIcon />  }
               
              </ListItemIcon>
              
              <ListItemText primary={words.text} />
  
            </ListItemButton>
            
          </ListItem>
          
        )
        )}
      </List>
      <Divider />
      <List>
        {menuList.map((menu, index) => (
          <ListItem key={menu.text} disablePadding>
            <ListItemButton component={Link} to={menu.link}>
              <ListItemIcon>
                {index % 2 === 0 ? <LoginIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>


    </Box>
  );

  return (
    <>
    <div>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </>
  );
}