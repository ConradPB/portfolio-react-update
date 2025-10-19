import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';

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

      {/* --- Hero Section --- */}
      <section id="welcome-section" className="section welcome">
        <Container>
          <Box className="fade-in">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I’m Conrad Mbaziira
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="subtitle"
            >
              A passionate developer crafting creative digital solutions.
            </motion.p>
          </Box>
        </Container>
      </section>

      {/* --- Profile Image --- */}
      <div className="profile-pic-container">
        <motio.img
          src="/assets/screenshots/profile.jpg"
          alt="Conrad Bugingo"
          className="profile-pic"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
      </div>

      {/* --- About --- */}
      <section id="about" className="section">
        <Container>
          <Box className="fade-in about-text">
            <h2>About Me</h2>
            <Typography variant="body1">
              I’m a developer with expertise in React, JavaScript, and modern web technologies — including full-stack development and WordPress. 
              I thrive on solving complex problems and building intuitive, scalable, and impactful user experiences.
            </Typography>
          </Box>
        </Container>
      </section>

      {/* --- Work --- */}
      <section id="work" className="section work">
        <Container>
          <Box className="fade-in">
            <h2>Work</h2>

            {/* Featured Projects */}
            <div className="featured-grid">
              <motion.div
                className="project-tile featured"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 120 }}
              >
                <img
                  src="/assets/screenshots/ShopSphere.png"
                  alt="ShopSphere"
                  className="project-img"
                />
                <h3>ShopSphere</h3>
                <Typography variant="body2">
                  Modern E-Commerce Store — a full-featured prototype with advanced UI, smooth animations, 
                  and a scalable structure ready for AI and blockchain integration.
                </Typography>
                <Button
                  variant="outlined"
                  href="https://shop-sphere-rouge-iota.vercel.app/"
                  target="_blank"
                  className="project-button"
                >
                  View Project
                </Button>
              </motion.div>

              <motion.div
                className="project-tile featured"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 120 }}
              >
                <img
                  src="/assets/screenshots/microloan-tracker.png"
                  alt="Microloan Tracker"
                  className="project-img"
                />
                <h3>Microloan Tracker</h3>
                <Typography variant="body2">
                  A full-stack web app for tracking microloans, built with React and Node.js. 
                  Designed with a clean dashboard and responsive charts.
                </Typography>
                <Button
                  variant="outlined"
                  href="https://microloan-tracker.vercel.app/"
                  target="_blank"
                  className="project-button"
                >
                  View Project
                </Button>
              </motion.div>
            </div>

            {/* Expanded Section */}
            {showMore && (
              <div className="projects-grid">
                <div className="project-tile">
                  <img src="/assets/screenshots/crypto-trends.png" alt="Crypto Trends" className="project-img" />
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

                <div className="project-tile">
                  <img src="/assets/screenshots/EESCLUG.png" alt="EESCL Uganda" className="project-img" />
                  <h3>EESCL Uganda</h3>
                  <Typography variant="body2">
                    A WordPress site for EESCL Uganda, showcasing CMS development and design skills.
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

                <div className="project-tile">
                  <img src="/assets/screenshots/calc.png" alt="Distance Calculator" className="project-img" />
                  <h3>Distance Calculator</h3>
                  <Typography variant="body2">
                    A React app that calculates distances between addresses using OpenCage API and the Haversine formula.
                  </Typography>
                  <Button
                    variant="outlined"
                    href="https://distance-calculator-omega.vercel.app/"
                    target="_blank"
                    className="project-button"
                  >
                    View Project
                  </Button>
                </div>

                <div className="project-tile">
                  <img src="/assets/placeholder.jpg" alt="Coming Soon" className="project-img" />
                  <h3>Coming Soon</h3>
                  <Typography variant="body2">
                    A new project is in development. Stay tuned for updates!
                  </Typography>
                  <Button variant="outlined" disabled className="project-button">
                    View Project
                  </Button>
                </div>
              </div>
            )}

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

      {/* --- Contact --- */}
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
              <Button variant="outlined" href="https://github.com/ConradPB" target="_blank" rel="noreferrer">
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
