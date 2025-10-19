import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

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
      {/* Navbar */}
      <AppBar position="sticky" className="app-bar">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Conrad Mbaziira
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
          <motion.div
            className="fade-in"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Hello, I’m Conrad Mbaziira</h1>
            <Typography variant="h5" component="p" sx={{ fontWeight: 300 }}>
              A passionate developer crafting creative, scalable web solutions
            </Typography>
          </motion.div>
        </Container>
      </section>

      {/* Profile */}
      <div className="profile-pic-container">
        <img src="/assets/screenshots/profile.jpg" alt="Conrad Bugingo" className="profile-pic" />
      </div>

      {/* About Section */}
      <section id="about" className="section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>About Me</h2>
            <Typography variant="body1">
              I’m a developer specializing in modern JavaScript frameworks — React, Node.js, and
              full-stack development. I love designing interfaces that are not just functional but
              visually engaging, and I’m currently focused on AI-ready and blockchain-scalable web applications.
            </Typography>
          </motion.div>
        </Container>
      </section>

      {/* Work Section */}
      <section id="work" className="section work">
        <Container>
          <Box>
            <h2>Featured Projects</h2>

            {/* Featured Projects Grid */}
            <div className="featured-grid">
              <motion.div
                className="project-tile featured"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src="/assets/screenshots/ShopSphere.png" alt="ShopSphere" className="project-img" />
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
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src="/assets/screenshots/microloan-tracker.png" alt="Microloan Tracker" className="project-img" />
                <h3>Microloan Tracker</h3>
                <Typography variant="body2">
                  A full-stack app for managing and tracking microloans — built with React and Node.js,
                  featuring organized records and a clean, accessible interface.
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

            {/* View More Button (shows/hides lower projects) */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                variant="contained"
                onClick={() => setShowMore(prev => !prev)}
                sx={{ textTransform: 'none', borderRadius: '8px', fontWeight: 600 }}
              >
                {showMore ? 'Show Less' : 'View More'}
              </Button>
            </Box>

            {/* Lower projects: hidden until showMore === true */}
            <AnimatePresence>
              {showMore && (
                <motion.div
                  className="projects-grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div className="project-tile" whileHover={{ scale: 1.02 }}>
                    <img src="/assets/screenshots/crypto-trends.png" alt="Crypto Trends" className="project-img" />
                    <h3>Crypto Trends</h3>
                    <Typography variant="body2">
                      A full-stack app visualizing cryptocurrency trends in real time with API-driven analytics.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://crypto-trends-kohl.vercel.app/"
                      target="_blank"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </motion.div>

                  <motion.div className="project-tile" whileHover={{ scale: 1.02 }}>
                    <img src="/assets/screenshots/EESCLUG.png" alt="EESCL Uganda" className="project-img" />
                    <h3>EESCL Uganda</h3>
                    <Typography variant="body2">
                      A WordPress-based site for EESCL Uganda, showcasing CMS integration and responsive layout design.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://eescluganda.wuaze.com/?i=1"
                      target="_blank"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </motion.div>

                  <motion.div className="project-tile" whileHover={{ scale: 1.02 }}>
                    <img src="/assets/screenshots/calc.png" alt="Distance Calculator" className="project-img" />
                    <h3>Distance Calculator</h3>
                    <Typography variant="body2">
                      A React app calculating distances between two points using OpenCage API and the Haversine formula.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://distance-calculator-omega.vercel.app/"
                      target="_blank"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </motion.div>

                  <motion.div className="project-tile" whileHover={{ scale: 1.02 }}>
                    <img src="/assets/placeholder.jpg" alt="Coming Soon" className="project-img" />
                    <h3>Coming Soon</h3>
                    <Typography variant="body2">
                      A new project is in development. Stay tuned for updates!
                    </Typography>
                    <Button variant="outlined" disabled className="project-button">
                      View Project
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </Box>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default App;
