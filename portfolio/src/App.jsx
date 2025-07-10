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
              I’m a developer with expertise in React, JavaScript, and modern web technologies, 
              including full-stack development and WordPress. I thrive on solving complex problems 
              and building user-friendly applications that make an impact.
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Work Section */}
      <section id="work" className="section work">
        <Container>
          <Box className="fade-in">
            <h2>Work</h2>
            <div className="projects-grid">
              {/* Main Project 1: Microloan Tracker */}
              <div className="project-tile">
                <img src="/src/assets/microloan-tracker.jpg" alt="Microloan Tracker" className="project-img" />
                <h3>Microloan Tracker</h3>
                <Typography variant="body2">
                  A full-stack app for tracking microloans, built with React and a backend server.
                </Typography>
                <Button
                  variant="outlined"
                  href="https://microloan-tracker.vercel.app/"
                  target="_blank"
                  className="project-button"
                >
                  View Project
                </Button>
              </div>
              {/* Main Project 2: Crypto Trends */}
              <div className="project-tile">
                <img src="/src/assets/crypto-trends.jpg" alt="Crypto Trends" className="project-img" />
                <h3>Crypto Trends</h3>
                <Typography variant="body2">
                  A full-stack app tracking cryptocurrency trends using real-time API data.
                </Typography>
                <Button
                  variant="outlined"
                  href="https://crypto-trends-kohl.vercel.app/"
                  target="_blank"
                  className="project-button"
                >
                  View Project
                </Button>
              </div>
              {showMore && (
                <>
                  {/* View More Project 1: EESC Luganda */}
                  <div className="project-tile">
                    <img src="/src/assets/eesc-luganda.jpg" alt="EESC Luganda" className="project-img" />
                    <h3>EESC Luganda</h3>
                    <Typography variant="body2">
                      A WordPress site for EESC Luganda, showcasing CMS development skills.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://eescluganda.wuaze.com/?i=1"
                      target="_blank"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </div>
                  {/* View More Project 2: Markdown Previewer */}
                  <div className="project-tile">
                    <img src="/src/assets/markdown-previewer.jpg" alt="Markdown Previewer" className="project-img" />
                    <h3>Markdown Previewer</h3>
                    <Typography variant="body2">
                      A React app that converts Markdown input to rendered HTML in real-time.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://github.com/ConradPB/Markdown-Previewer"
                      target="_blank"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </div>
                  {/* View More Project 3: Random Quote Machine */}
                  <div className="project-tile">
                    <img src="/src/assets/random-quote.jpg" alt="Random Quote Machine" className="project-img" />
                    <h3>Random Quote Machine</h3>
                    <Typography variant="body2">
                      A JavaScript app that fetches and displays random quotes via an API.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://github.com/ConradPB/Random-Quote-Machine"
                      target="_blank"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </div>
                  {/* View More Project 4: Drum Machine */}
                  <div className="project-tile">
                    <img src="/src/assets/drum-machine.jpg" alt="Drum Machine" className="project-img" />
                    <h3>Drum Machine</h3>
                    <Typography variant="body2">
                      An interactive app that plays drum sounds on key presses or clicks.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://github.com/ConradPB/Drum-Machine"
                      target="_blank"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </div>
                </>
              )}
            </div>
            
    </div>
  );
}

export default App;