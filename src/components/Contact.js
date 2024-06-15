import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
    return (
        <Box id="contact" py={5} bgcolor="#f4f4f4">
            <Container>
                <Typography variant="h4" gutterBottom>Contact Us</Typography>
                <form noValidate autoComplete="off">
                    <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Your Message"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Send Message
                    </Button>
                </form>
            </Container>
        </Box>
    );
};

export default Contact;
