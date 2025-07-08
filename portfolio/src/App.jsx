import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

function App() {
  const [copied, setCopied] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('cpbmbaz57@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <AppBar position="sticky" className="app-bar">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 700 }}>
            Conrad Bugingo
          </Typography>
          <Button color="inherit" href="#welcome-section">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#work">Work</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <section id="welcome-section" className="section welcome">
        <Container>
          <Box className="fade-in">
            <h1>Hello, I’m Conrad Bugingo</h1>
            <Typography variant="h5" component="p" sx={{ fontWeight: 300 }}>
              A passionate developer crafting creative solutions
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Profile Picture Section */}
      <div className="profile-pic-container">
        <img src="/src/assets/profile.jpg" alt="Conrad Bugingo" className="profile-pic" />
      </div>

      {/* About Section */}
      <section id="about" className="section">
        <Container>
          <Box className="fade-in">
            <h2>About Me</h2>
            <Typography variant="body1">
              I’m a developer with expertise in React, JavaScript, and modern web technologies. 
              I thrive on solving complex problems and building user-friendly applications that make an impact.
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Work Section */}

    </div>
  );
}

export default App;