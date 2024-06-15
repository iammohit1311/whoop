import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const Services = () => {
    return (
        <Box id="services" py={5}>
            <Container>
                <Typography variant="h4" gutterBottom>Our Services</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h6">Web Development</Typography>
                            <Typography variant="body1">
                                Creating responsive and modern websites.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h6">Mobile Apps</Typography>
                            <Typography variant="body1">
                                Developing user-friendly mobile applications.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h6">Cloud Solutions</Typography>
                            <Typography variant="body1">
                                Providing scalable and secure cloud services.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
