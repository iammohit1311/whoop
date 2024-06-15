import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    TG Dream
                </Typography>
                <Button color="inherit" href="#home">Home</Button>
                <Button color="inherit" href="#about">About</Button>
                <Button color="inherit" href="#services">Services</Button>
                <Button color="inherit" href="#contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
