import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton } from '@mui/material';
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
            <Box className="hidden md:flex gap-4 items-center">
              <a href="#about" className="nav-link">About</a>
              <a href="#work" className="nav-link">Work</a>
              <a href="#contact" className="nav-link">Contact</a>
              <IconButton href="https://github.com/ConradPB" target="_blank" className="text-slate-400! hover:text-white!">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 text-center">
        <Container maxWidth="md">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography variant="overline" className="text-brand-accent font-bold tracking-widest">
              Software Engineer
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 900, mt: 2, mb: 3 }}>
              Building the next <br /> generation of web.
            </Typography>
            <div className="flex justify-center gap-4">
              <Button variant="contained" onClick={() => setShowMore(!showMore)} disableElevation 
                sx={{ bgcolor: 'var(--color-brand-accent)', '&:hover': { bgcolor: '#059669' }, borderRadius: 2, px: 4 }}>
                {showMore ? "Show Less" : "View Projects"}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="py-20 bg-slate-950/50">
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <ProjectCard 
                title="ShopSphere"
                desc="Modern E-Commerce Store with real-time inventory and smooth animations."
                img="/assets/screenshots/ShopSphere.png"
                link="https://shop-sphere-rouge-iota.vercel.app/"
                tags={['React', 'Next.js']}
              />
              <ProjectCard 
                title="Microloan Tracker"
                desc="A full-stack financial dashboard for tracking loan dispersion."
                img="/assets/screenshots/microloan-tracker.png"
                link="https://microloan-tracker.vercel.app/"
                tags={['Node.js', 'MUI']}
              />
            </div>

            <AnimatePresence>
              {showMore && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 overflow-hidden"
                >
                  <ProjectCard 
                    title="Crypto Trends"
                    desc="Visualizing real-time crypto analytics."
                    img="/assets/screenshots/crypto-trends.png"
                    link="https://crypto-trends-kohl.vercel.app/"
                    tags={['API', 'D3.js']}
                  />
                  <ProjectCard 
                    title="EESCL Uganda"
                    desc="Responsive WordPress-based management site."
                    img="/assets/screenshots/EESCLUG.png"
                    link="https://eescluganda.wuaze.com/?i=1"
                    tags={['WordPress', 'UX']}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32">
        <Container maxWidth="sm">
          <div className="glass-panel p-10 rounded-3xl text-center">
            <Typography variant="h4" className="font-bold mb-4">Let&apos;s talk.</Typography>
            <div className="flex flex-col gap-4">
              <Button 
                variant="outlined" 
                onClick={copyEmail}
                startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
                fullWidth
                sx={{ py: 1.5, borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}
              >
                {copied ? 'Email Copied!' : 'cpbmbaz57@gmail.com'}
              </Button>
              <Button variant="contained" href="mailto:cpbmbaz57@gmail.com" startIcon={<EmailIcon />} fullWidth
                sx={{ py: 1.5, bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#e2e8f0' } }}>
                Send Message
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ProjectCard({ title, desc, img, link, tags }) {
  return (
    <motion.div whileHover={{ y: -10 }} className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="h-56 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-3">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 rounded text-brand-accent font-bold">
              {tag}
            </span>
          ))}
        </div>
        <Typography variant="h5" className="font-bold mb-2">{title}</Typography>
        <Typography variant="body2" className="text-brand-text-muted mb-6">{desc}</Typography>
        <Button href={link} target="_blank" variant="text" className="text-brand-accent! font-bold!">
          View Live Site →
        </Button>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;