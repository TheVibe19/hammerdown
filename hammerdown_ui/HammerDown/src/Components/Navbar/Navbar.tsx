import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                <Button color="inherit" component={Link} to="/explore">Explore</Button>
                <Button color="inherit" component={Link} to="/myProducts" >My Products</Button>
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                    HammerDown
                </Typography>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/signUp">Sign Up</Button>
                <Button color="inherit" component={Link} to="/profile"><Avatar alt="Profile" src="profile-pic-url" style={{ width: 30, height: 30 }} /></Button>
                
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;