import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';

function Header() {
  return (
    <AppBar position="static" sx={{ background: '#311b92' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Button color="inherit" size="large">Home</Button>
        <Button color="inherit" size="large">Store</Button>
        <Button color="inherit" size="large">Music</Button>
        <IconButton color="inherit" aria-label="cart">
          <ShoppingCart />
        </IconButton>
        <IconButton color="inherit" aria-label="account">
          <Person />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;