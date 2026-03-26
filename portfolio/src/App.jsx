import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function App() {
  const [copied, setCopied] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('cpbmbaz57@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen hero-gradient">
      {/* NAVBAR */}
      <AppBar position="sticky" elevation={0} className="glass-panel !bg-brand-bg/80">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: -1 }}>
              CONRAD<span className="text-brand-accent">.</span>
            </Typography>
            <Box className="hidden md:flex gap-6 items-center">
              <a href="#work" className="nav-link">Selected Work</a>
              <a href="#contact" className="nav-link">Get In Touch</a>
              <IconButton href="https://github.com/ConradPB" target="_blank" className="text-slate-400! hover:text-white!">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO SECTION */}
      <section className="pt-24 pb-20 px-4">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <Typography variant="overline" className="text-brand-accent font-bold tracking-widest">
                  Full Stack Engineer
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, fontWeight: 900, mt: 2, mb: 3, lineHeight: 1.1 }}>
                  Engineering <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    Impactful Systems.
                  </span>
                </Typography>
                <Typography variant="body1" className="text-slate-400 text-lg mb-8 max-w-xl">
                  Building resilient, data-driven solutions for complex environments—from high-performance mobile games to agricultural ecosystems.
                </Typography>
                <div className="flex gap-4">
                  <Button variant="contained" href="#work" disableElevation 
                    sx={{ bgcolor: 'var(--color-brand-accent)', '&:hover': { bgcolor: '#059669' }, borderRadius: 2, px: 4, py: 1.5 }}>
                    View My Work
                  </Button>
                  <Button variant="outlined" onClick={copyEmail}
                    sx={{ borderColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 2, px: 3 }}>
                    {copied ? 'Email Copied!' : 'Copy Email'}
                  </Button>
                </div>
              </motion.div>
            </Grid>
            {/* PROFILE IMAGE SLOT */}
            <Grid item xs={12} md={5} className="flex justify-center">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
                <div className="profile-glow w-64 h-64 md:w-80 md:h-80">
                  <img 
                    src="/assets/screenshots/profile.jpg" 
                    alt="Conrad" 
                    className="w-full h-full object-cover rounded-full border-4 border-brand-bg"
                  />
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>

      