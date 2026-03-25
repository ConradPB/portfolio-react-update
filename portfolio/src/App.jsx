import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Tooltip } from '@mui/material';
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
              <IconButton 
                href="https://github.com/ConradPB" 
                target="_blank" 
                className="text-slate-400 hover:text-white"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 text-center">
        <Container maxWidth="md">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography variant="overline" className="text-brand-accent font-bold tracking-widest">
              Software Engineer
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 900, mt: 2, mb: 3 }}>
              Building the next <br /> generation of web.
            </Typography>
            <Typography variant="h6" className="text-brand-text-muted font-light leading-relaxed mb-10">
              I specialize in high-performance frontends and scalable backends. 
              Currently crafting <span className="text-white border-b border-brand-accent">Milkwize</span> and exploring Web3.
            </Typography>
            
            <div className="flex justify-center gap-4">
              <Button variant="contained" href="#work" disableElevation 
                sx={{ bgcolor: 'var(--color-brand-accent)', '&:hover': { bgcolor: '#059669' }, borderRadius: 2, px: 4 }}>
                View Projects
              </Button>
              <Button variant="outlined" href="#contact"
                sx={{ borderColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 2, px: 4 }}>
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PROFILE PIC */}
      <Box className="flex justify-center -mt-10 mb-20 relative z-10">
        <motion.div whileHover={{ scale: 1.05 }} className="profile-glow">
          <img 
            src="/assets/screenshots/profile.jpg" 
            alt="Conrad Mbaziira" 
            className="w-40 h-40 rounded-full object-cover border-4 border-brand-bg"
          />
        </motion.div>
      </Box>

      {/* FEATURED WORK */}
      <section id="work" className="py-20 bg-slate-950/50">
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              
              {/* Project Card Component */}
              <ProjectCard 
                title="ShopSphere"
                desc="Modern E-Commerce Store with real-time inventory and smooth Framer Motion transitions."
                img="/assets/screenshots/ShopSphere.png"
                link="https://shop-sphere-rouge-iota.vercel.app/"
                tags={['React', 'Next.js', 'Tailwind']}
              />
              <ProjectCard 
                title="Microloan Tracker"
                desc="A full-stack financial dashboard for tracking loan dispersion and repayment analytics."
                img="/assets/screenshots/microloan-tracker.png"
                link="https://microloan-tracker.vercel.app/"
                tags={['Node.js', 'PostgreSQL', 'MUI']}
              />

            </div>
          </motion.div>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32">
        <Container maxWidth="sm">
          <div className="glass-panel p-10 rounded-3xl text-center">
            <Typography variant="h4" className="font-bold mb-4">Let&apos;s talk.</Typography>
            <Typography className="text-brand-text-muted mb-8">
              I’m currently open to new opportunities and freelance collaborations.
            </Typography>
            
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
              <Button 
                variant="contained" 
                href="mailto:cpbmbaz57@gmail.com"
                startIcon={<EmailIcon />}
                fullWidth
                sx={{ py: 1.5, bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#e2e8f0' } }}
              >
                Send Message
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// Sub-component for Project Cards


export default App;