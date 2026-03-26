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

      {/* FEATURED WORK: MILKWIZE */}
      <section id="work" className="py-20">
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>Featured Impact</h2>
            <div className="mt-12">
              <div className="glass-panel rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-brand-accent font-bold text-sm tracking-widest mb-4">PRIMARY PROJECT</span>
                  <Typography variant="h3" className="font-bold mb-6">MilkWize</Typography>
                  <Typography variant="body1" className="text-slate-300 mb-6 leading-relaxed">
                    A professional-grade dairy management ecosystem built to solve connectivity and data challenges in East African agriculture. It empowers farmers to transform raw milk data into actionable financial and biological insights.
                  </Typography>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Kotlin', 'Offline-First', 'AgTech', 'Data Analytics'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Typography variant="caption" className="text-brand-text-muted italic">
                    Currently in development — Case study coming soon.
                  </Typography>
                </div>
                <div className="bg-slate-900/50 p-6 flex items-center justify-center">
                  <img 
                    src="/assets/screenshots/milkwize-preview.png" 
                    alt="MilkWize App Interface" 
                    className="rounded-xl shadow-2xl border border-white/5"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* OTHER WORKS (THE GRID OF 5 OTHERS) */}
      <section className="pb-32">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="African Legend: Mobile"
              desc="High-performance mobile game with culture-rich storytelling and real-time multiplayer."
              img="/assets/screenshots/game-preview.png"
              tags={['Kotlin', 'Supabase']}
              link="#"
            />
            <ProjectCard 
              title="ShopSphere"
              desc="Modern E-Commerce Store with real-time inventory and smooth animations."
              img="/assets/screenshots/ShopSphere.png"
              tags={['React', 'Next.js']}
              link="https://shop-sphere-rouge-iota.vercel.app/"
            />
            <ProjectCard 
              title="Microloan Tracker"
              desc="Full-stack financial dashboard for tracking loan dispersion and repayment metrics."
              img="/assets/screenshots/microloan-tracker.png"
              tags={['Node.js', 'MUI']}
              link="https://microloan-tracker.vercel.app/"
            />
            <ProjectCard 
              title="Crypto Trends"
              desc="Visualizing real-time crypto analytics using D3.js and public price APIs."
              img="/assets/screenshots/crypto-trends.png"
              tags={['API', 'D3.js']}
              link="https://crypto-trends-kohl.vercel.app/"
            />
            <ProjectCard 
              title="EESCL Uganda"
              desc="Responsive WordPress-based management site for environmental consultancy."
              img="/assets/screenshots/EESCLUG.png"
              tags={['WordPress', 'UX']}
              link="https://eescluganda.wuaze.com/?i=1"
            />
          </div>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-slate-950/30">
        <Container maxWidth="sm">
          <div className="text-center">
            <Typography variant="h3" className="font-bold mb-4">Have a project in mind?</Typography>
            <Typography variant="body1" className="text-slate-400 mb-10">
              I’m always open to discussing new opportunities or technical challenges.
            </Typography>
            <Button 
              variant="contained" 
              href="mailto:cpbmbaz57@gmail.com" 
              startIcon={<EmailIcon />}
              sx={{ py: 2, px: 6, bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#e2e8f0' }, borderRadius: 3, fontWeight: 'bold' }}
            >
              Get In Touch
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}


export default App;