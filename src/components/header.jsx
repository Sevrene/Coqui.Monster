import { AppBar, Toolbar, Typography, Button, MenuItem, Menu } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Storefront, ShoppingCart, Checkroom, CardGiftcard, Share, Twitter, YouTube, Groups, Forum, AutoStories, QuestionMark, Palette, Headphones } from '@mui/icons-material';

function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (event, menuId) => {
    setOpenMenu({ anchor: event.currentTarget, menuId });
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
  };

  return (
    <AppBar position="static" sx={{ background: '#6600cc' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center'  }}>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="Logo" style={{ borderRadius: '50%' }} />
          </Link>
        </Typography>
        <Button
          component={Link}
          to={'/'}
          color="inherit"
          startIcon={<Home />}
        >
          Home
        </Button>
        <Button color="inherit" onClick={(event) => handleMenuClick(event, "Store")} startIcon={<Storefront />}>Store</Button>
        <Menu
          anchorEl={openMenu ? openMenu.anchor : null}
          keepMounted
          open={openMenu ? openMenu.menuId === "Store" : false}
          onClose={handleMenuClose}
        >
          <MenuItem 
            component={Link}
            to={'https://the-south-side.storenvy.com'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}>
            <ShoppingCart />
            South Side Shop
            
          </MenuItem>
          <MenuItem 
            component={Link}
            to={'https://store.streamelements.com/coqui'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}>
            <Checkroom />
            Shirt Shop
            
          </MenuItem>
          <MenuItem 
            component={Link}
            to={'https://throne.me/coqui/wishlist'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}>
            <CardGiftcard />
            Throne
            
          </MenuItem>
        </Menu>
        <Button
          disabled
          component={Link}
          to={'/music'}
          color="inherit"
          startIcon={<Headphones />}
        >
          Music
        </Button>
        
        <Button color="inherit" onClick={(event) => handleMenuClick(event, "Socials")} startIcon={<Share />}>Socials</Button>
        <Menu
          anchorEl={openMenu ? openMenu.anchor : null}
          keepMounted
          open={openMenu ? openMenu.menuId === "Socials" : false}
          onClose={handleMenuClose}
        >
          <MenuItem 
            component={Link}
            to={'https://twitter.com/c0qui'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}>
            <Twitter />
            Twitter
            
          </MenuItem>
          <MenuItem 
            component={Link}
            to={'https://www.youtube.com/rummyandcoqui'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}>
            <YouTube />
            Youtube
            
          </MenuItem>
        </Menu>
        <Button color="inherit" onClick={(event) => handleMenuClick(event, "Community")} startIcon={<Groups />}>Community</Button>
        <Menu
          anchorEl={openMenu ? openMenu.anchor : null}
          keepMounted
          open={openMenu ? openMenu.menuId === "Community" : false}
          onClose={handleMenuClose}
        >
          <MenuItem 
            component={Link}
            to={'https://discord.com/invite/TheSouthSide'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}>
            <Forum />
            Discord
            
          </MenuItem>
          <MenuItem 
            component={Link}
            to={'https://rummyandcoqui.itch.io/rummy-and-coqui-valenskinks-day'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}>
            <AutoStories />
            Visual Novel
            
          </MenuItem>
          <MenuItem 
            component={Link}
            to={'https://curiouscat.qa/coqui_monster'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}>
            <QuestionMark />
            Questions
            
          </MenuItem>
          <MenuItem
            disabled
            component={Link}
            to={'/'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}>
            <Palette />
            Assets
            
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

/*
return (
  <AppBar position="static" sx={{ background: '#311b92' }}>
    <Toolbar>
      {
        // Logo
        navBar.logo
        // Menu
        
        // Make Menu condense when small
      }
    {pages.map((page) => {
          return (
            <Route
            key={page.urlSlug}
            path={page.urlSlug}
            element={<LandingPage pageData={page} />}
            />
          ) 
        })}
      
      <Button color="inherit" size="large">Home</Button>
      <Button color="inherit" size="large">Store</Button>
      <Button color="inherit" size="large">Music</Button>
    </Toolbar>
  </AppBar>
);
}*/





export default Header;