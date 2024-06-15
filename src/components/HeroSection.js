import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: 'url(/path-to-your-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '100px 0',
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(4),
    },
}));

const HeroSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.hero}>
            <Container>
                <Typography variant="h2">Welcome to TG Dream</Typography>
                <Typography variant="h5">Your dream tech solutions</Typography>
                <Button variant="contained" color="primary" className={classes.button} href="#about">
                    Learn More
                </Button>
            </Container>
        </Box>
    );
};

export default HeroSection;
