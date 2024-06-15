import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Box id="about" py={5}>
            <Container>
                <Typography variant="h4" gutterBottom>About Us</Typography>
                <Typography variant="body1">
                    We provide cutting-edge tech solutions to help your business thrive.
                </Typography>
            </Container>
        </Box>
    );
};

export default About;
