import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

function App() {
  const [copied, setCopied] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('cpbmbaz57@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="App">
      <AppBar position="sticky" className="app-bar">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 700 }}>
            Conrad Mbaziira
          </Typography>
          <Button color="inherit" href="#welcome-section">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#work">Work</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>

      <section id="welcome-section" className="section welcome">
        <Container>
          <Box className="fade-in">
            <h1>Hello, I’m Conrad Mbaziira</h1>
            <Typography variant="h5" component="p" sx={{ fontWeight: 300 }}>
              A passionate developer crafting creative solutions
            </Typography>
          </Box>
        </Container>
      </section>

      <div className="profile-pic-container">
        <img src="/assets/screenshots/profile.jpg" alt="Conrad Bugingo" className="profile-pic" />
      </div>

      <section id="about" className="section">
        <Container>
          <Box className="fade-in">
            <h2>About Me</h2>
            <Typography variant="body1">
              I’m a developer with expertise in React, JavaScript, and modern web technologies, 
              including full-stack development and WordPress. I thrive on solving complex problems 
              and building user-friendly applications that make an impact.
            </Typography>
          </Box>
        </Container>
      </section>

     
    </div>
  );
}

export default App;
