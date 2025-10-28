import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const [copied, setCopied] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('cpbmbaz57@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback silently
    }
  };

  // Small animation presets
  const fadeUp = { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };
  const cardHover = { scale: 1.02 };

  return (
    <div className="App">
      {/* NAVBAR */}
      <AppBar position="sticky" className="app-bar" role="banner">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 700 }}
            component="div"
            aria-label="Conrad Mbaziira — Home"
          >
            Conrad Mbaziira
          </Typography>

          <Button color="inherit" href="#welcome-section">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#work">Work</Button>
          <Button color="inherit" href="#contact">Contact</Button>
          <IconButton
            color="inherit"
            href="https://github.com/ConradPB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conrad's GitHub"
            sx={{ ml: 1 }}
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* HERO */}
      <section id="welcome-section" className="section welcome" aria-labelledby="hero-heading">
        <Container>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="fade-in"
          >
            <h1 id="hero-heading">Hello, I’m Conrad Mbaziira</h1>
            <Typography
              variant="h5"
              component="p"
              sx={{ fontWeight: 300, maxWidth: 820, margin: '0 auto' }}
            >
              A passionate developer crafting creative, scalable web solutions — I build performant
              frontends, reliable backends, and elegant interfaces ready for AI and blockchain integrations.
            </Typography>
          </motion.div>
        </Container>
      </section>

      {/* PROFILE */}
      <div className="profile-pic-container" aria-hidden="false">
        <motion.img
          src="/assets/screenshots/profile.jpg"
          alt="Profile photo of Conrad Bugingo"
          className="profile-pic"
          whileHover={{ scale: 1.06 }}
          transition={{ type: 'spring', stiffness: 220 }}
        />
      </div>

      {/* ABOUT */}
      <section id="about" className="section" aria-labelledby="about-heading">
        <Container>
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <h2 id="about-heading">About Me</h2>
            <Typography variant="body1" sx={{ maxWidth: 780, margin: '0 auto', lineHeight: 1.7 }}>
              I’m a developer specializing in modern JavaScript — React, Node.js and full-stack development.
              I focus on pragmatic, maintainable code and compelling UI/UX. I enjoy building systems that are
              scalable and ready for advanced features such as AI-driven personalization and blockchain integrations.
            </Typography>
          </motion.div>
        </Container>
      </section>

      {/* WORK */}
      <section id="work" className="section work" aria-labelledby="work-heading">
        <Container>
          <Box>
            <h2 id="work-heading">Featured Projects</h2>

            {/* Featured: ShopSphere + Microloan */}
            <div className="featured-grid" role="list">
              <motion.article
                className="project-tile featured"
                role="listitem"
                whileHover={cardHover}
                transition={{ type: 'spring', stiffness: 200 }}
                aria-labelledby="shopsphere-title"
              >
                <img
                  src="/assets/screenshots/ShopSphere.png"
                  alt="ShopSphere screenshot"
                  className="project-img"
                />
                <h3 id="shopsphere-title">ShopSphere</h3>
                <Typography variant="body2">
                  Modern E-Commerce Store — a full-featured prototype with advanced UI, smooth animations,
                  and a scalable structure ready for AI and blockchain integration.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Button
                    variant="contained"
                    href="https://shop-sphere-rouge-iota.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                    aria-label="Open ShopSphere in new tab"
                  >
                    View Project
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://github.com/ConradPB" // placeholder: repo link if any
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                    aria-label="Open ShopSphere repository"
                  >
                    Repo
                  </Button>
                </Box>
              </motion.article>

              <motion.article
                className="project-tile featured"
                role="listitem"
                whileHover={cardHover}
                transition={{ type: 'spring', stiffness: 200 }}
                aria-labelledby="microloan-title"
              >
                <img
                  src="/assets/screenshots/microloan-tracker.png"
                  alt="Microloan Tracker screenshot"
                  className="project-img"
                />
                <h3 id="microloan-title">Microloan Tracker</h3>
                <Typography variant="body2">
                  Full-stack app for managing and tracking microloans — built with React and Node.js,
                  designed with a clear dashboard and responsive charts.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Button
                    variant="contained"
                    href="https://microloan-tracker.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                    aria-label="Open Microloan Tracker"
                  >
                    View Project
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://github.com/ConradPB" // placeholder
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                    aria-label="Open Microloan repository"
                  >
                    Repo
                  </Button>
                </Box>
              </motion.article>
            </div>

            {/* View More toggle */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                variant="contained"
                onClick={() => setShowMore((s) => !s)}
                sx={{ textTransform: 'none', borderRadius: '10px', fontWeight: 700 }}
                aria-expanded={showMore}
                aria-controls="more-projects"
              >
                {showMore ? 'Show Less' : 'View More'}
              </Button>
            </Box>

            {/* Lower projects (animated reveal) */}
            <AnimatePresence initial={false}>
              {showMore && (
                <motion.div
                  id="more-projects"
                  className="projects-grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.45 }}
                  aria-live="polite"
                >
                  <motion.article className="project-tile" whileHover={cardHover} role="article">
                    <img src="/assets/screenshots/crypto-trends.png" alt="Crypto Trends screenshot" className="project-img" />
                    <h3>Crypto Trends</h3>
                    <Typography variant="body2">
                      A full-stack app visualizing cryptocurrency trends in real time with API-driven analytics.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://crypto-trends-kohl.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </motion.article>

                  <motion.article className="project-tile" whileHover={cardHover} role="article">
                    <img src="/assets/screenshots/EESCLUG.png" alt="EESCL Uganda screenshot" className="project-img" />
                    <h3>EESCL Uganda</h3>
                    <Typography variant="body2">
                      A WordPress-based site for EESCL Uganda — content-managed and responsive.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://eescluganda.wuaze.com/?i=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </motion.article>

                  <motion.article className="project-tile" whileHover={cardHover} role="article">
                    <img src="/assets/screenshots/calc.png" alt="Distance Calculator screenshot" className="project-img" />
                    <h3>Distance Calculator</h3>
                    <Typography variant="body2">
                      React app that calculates distances between points using the OpenCage API and the Haversine formula.
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://distance-calculator-omega.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      View Project
                    </Button>
                  </motion.article>

                  <motion.article className="project-tile" whileHover={cardHover} role="article">
                    <img src="/assets/placeholder.jpg" alt="Coming Soon placeholder" className="project-img" />
                    <h3>Coming Soon</h3>
                    <Typography variant="body2">
                      I'm actively working on a new project — details coming soon!
                    </Typography>
                    <Button variant="outlined" disabled className="project-button">
                      View Project
                    </Button>
                  </motion.article>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact" aria-labelledby="contact-heading">
        <Container>
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 id="contact-heading">Contact</h2>
            <Typography variant="body1">Feel free to reach out!</Typography>

            <Box sx={{ mt: 2, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Typography variant="body1">Email: cpbmbaz57@gmail.com</Typography>
              <Button variant="contained" onClick={copyEmail} sx={{ my: 1 }}>
                {copied ? 'Copied!' : 'Copy Email'}
              </Button>
              <Button variant="outlined" href="https://github.com/ConradPB" target="_blank" rel="noopener noreferrer">
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
