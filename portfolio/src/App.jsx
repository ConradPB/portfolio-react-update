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
      <section id="work" className="section work">
        <Container>
          <Box className="fade-in">
            <h2>Work</h2>
            <div className="projects-grid">
              <div className="project-tile">
                <img src="/src/assets/project1.jpg" alt="Project 1" className="project-img" />
                <h3>Project 1</h3>
                <Typography variant="body2">A brief description of your project.</Typography>
                <Button variant="outlined" href="#" className="project-button">
                  View Project
                </Button>
              </div>
              <div className="project-tile">
                <img src="/src/assets/project2.jpg" alt="Project 2" className="project-img" />
                <h3>Project 2</h3>
                <Typography variant="body2">A brief description of your project.</Typography>
                <Button variant="outlined" href="#" className="project-button">
                  View Project
                </Button>
              </div>
              {showMore && (
                <>
                  <div className="project-tile">
                    <img src="/src/assets/project3.jpg" alt="Project 3" className="project-img" />
                    <h3>Project 3</h3>
                    <Typography variant="body2">Another project description.</Typography>
                    <Button variant="outlined" href="#" className="project-button">
                      View Project
                    </Button>
                  </div>
                  <div className="project-tile">
                    <img src="/src/assets/project4.jpg" alt="Project 4" className="project-img" />
                    <h3>Project 4</h3>
                    <Typography variant="body2">Another project description.</Typography>
                    <Button variant="outlined" href="#" className="project-button">
                      View Project
                    </Button>
                  </div>
                </>
              )}
            </div>
            <Button
              variant="contained"
              onClick={() => setShowMore(!showMore)}
              sx={{ mt: 3 }}
            >
              {showMore ? 'Show Less' : 'View More'}
            </Button>
          </Box>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <Container>
          <Box className="fade-in">
            <h2>Contact</h2>
            <Typography variant="body1">Feel free to reach out!</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">Email: cpbmbaz57@gmail.com</Typography>
              <Button variant="contained" onClick={copyEmail} sx={{ my: 1 }}>
                {copied ? 'Copied!' : 'Copy Email'}
              </Button>
              <Button variant="outlined" href="https://github.com/G-rizz" target="_blank" rel="noreferrer">
                GitHub
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
}

export default App;