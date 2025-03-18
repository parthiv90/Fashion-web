import React from 'react';
import { Container, Typography, Box, Grid, Paper, Divider } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          component="h1" 
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          About Lorain
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', color: 'text.secondary' }}>
          Lorain is a fashion brand with a passion for quality, style, and sustainability.
          We believe that fashion should be accessible to everyone without compromising on quality.
        </Typography>
        <Divider sx={{ maxWidth: '200px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
      </Box>

      {/* Our Story Section */}
      <Grid container spacing={8} alignItems="center" sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.pexels.com/photos/4622423/pexels-photo-4622423.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Fashion designer working"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 3 }}>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            Founded in 2020, Lorain was born from a simple idea: to create stylish, high-quality clothing that doesn't break the bank. Our journey began in a small studio with a team of passionate designers who shared a vision for accessible fashion.
          </Typography>
          <Typography variant="body1" paragraph>
            Over the years, we've grown from a small local brand to an international name in fashion, but our core values remain the same. We believe in ethical production, sustainable practices, and creating clothes that help people express their unique style.
          </Typography>
        </Grid>
      </Grid>

      {/* Values Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
          Our Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 4, height: '100%', borderTop: '4px solid #000' }}>
              <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mb: 2 }}>
                Quality
              </Typography>
              <Typography variant="body1">
                We select the finest materials and work with skilled craftspeople to ensure each piece in our collection meets our high standards. Every stitch, seam, and detail is carefully considered.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 4, height: '100%', borderTop: '4px solid #000' }}>
              <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mb: 2 }}>
                Style
              </Typography>
              <Typography variant="body1">
                Our designs blend timeless elegance with contemporary trends. We create versatile pieces that can be styled in multiple ways and transition seamlessly from season to season.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 4, height: '100%', borderTop: '4px solid #000' }}>
              <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mb: 2 }}>
                Sustainability
              </Typography>
              <Typography variant="body1">
                We're committed to reducing our environmental impact. From sourcing sustainable materials to implementing eco-friendly practices in our production processes, we strive to make responsible choices.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="CEO Portrait"
                sx={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  mb: 2,
                }}
              />
              <Typography variant="h5" component="h3" fontWeight="bold">
                Alex Mitchell
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                Founder & CEO
              </Typography>
              <Typography variant="body2">
                With over 15 years of experience in the fashion industry, Alex leads our team with vision and passion.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Designer Portrait"
                sx={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  mb: 2,
                }}
              />
              <Typography variant="h5" component="h3" fontWeight="bold">
                Sarah Zhang
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                Lead Designer
              </Typography>
              <Typography variant="body2">
                Sarah brings creative flair and innovative design thinking to each collection, pushing boundaries while maintaining wearability.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Operations Portrait"
                sx={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  mb: 2,
                }}
              />
              <Typography variant="h5" component="h3" fontWeight="bold">
                David Kumar
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                Head of Operations
              </Typography>
              <Typography variant="body2">
                David ensures our production processes run smoothly and ethically, maintaining quality while minimizing environmental impact.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Commitment Section */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 3 }}>
          Our Commitment to You
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
          We're dedicated to providing you with fashion that not only looks good but feels good too—both in quality and in conscience. Thank you for being part of our journey towards a more stylish, sustainable future.
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 