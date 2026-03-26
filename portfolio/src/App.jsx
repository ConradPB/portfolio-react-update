import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
      <AppBar position="sticky" elevation={0} className="glass-panel bg-brand-bg/80!">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ grow: 1, fontWeight: 800, letterSpacing: -1 }}>
              CONRAD<span className="text-brand-accent">.</span>
            </Typography>
            <Box className="hidden md:flex gap-6 items-center">
              <a href="#work" className="nav-link">Work</a>
              <a href="#contact" className="nav-link">Contact</a>
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
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <Typography variant="overline" className="text-brand-accent font-bold tracking-widest">
                  Full Stack Engineer
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, fontWeight: 900, mt: 2, mb: 3, lineHeight: 1.1 }}>
                  Engineering <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                    Impactful Systems.
                  </span>
                </Typography>
                <Typography variant="body1" className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
                  Specializing in resilient, data-driven solutions—from agricultural ecosystems in East Africa to high-performance mobile gaming.
                </Typography>
                <div className="flex gap-4">
                  <Button variant="contained" href="#work" disableElevation 
                    sx={{ bgcolor: 'var(--color-brand-accent)', '&:hover': { bgcolor: '#059669' }, borderRadius: 2, px: 4, py: 1.5 }}>
                    Explore My Work
                  </Button>
                  <Button variant="outlined" onClick={copyEmail}
                    startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
                    sx={{ borderColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 2, px: 3 }}>
                    {copied ? 'Copied!' : 'Copy Email'}
                  </Button>
                </div>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={5} className="flex justify-center md:justify-end">
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

      {/* PRIMARY FEATURE: MILKWIZE */}
      <section id="work" className="py-20">
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>Featured Impact</h2>
            <div className="mt-12">
              <div className="glass-panel rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-112.5">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-px bg-brand-accent"></span>
                    <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">Major Project 2026</span>
                  </div>
                  <Typography variant="h3" className="font-bold mb-6">MilkWize</Typography>
                  <Typography variant="body1" className="text-slate-300 mb-8 leading-relaxed">
                    A professional-grade dairy management ecosystem built to solve connectivity and data challenges in East African agriculture. It empowers farmers to transform raw milk data into actionable financial and biological insights.
                  </Typography>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Kotlin', 'Offline-First', 'AgTech', 'Supabase'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-bold rounded border border-white/10 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Typography variant="caption" className="text-brand-accent font-mono">
                    [ Status: Beta Testing / MVP Architecture ]
                  </Typography>
                </div>
                <div className="bg-slate-900/40 p-10 flex items-center justify-center relative overflow-hidden">
                   <div className="w-full h-full rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl flex items-center justify-center text-slate-700">
                      <Typography variant="h6" className="font-bold opacity-20 rotate-[-15deg]">DASHBOARD PREVIEW</Typography>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* REST OF THE GRID... (ShopSphere, Microloan, African Legend, etc.) */}
      <section className="pb-12">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard 
              title="African Legend"
              desc="High-performance mobile game exploring African folklore through native storytelling."
              img="/assets/screenshots/game-preview.png"
              tags={['Kotlin', 'Game Engine']}
              link="#"
              isComingSoon
            />
            <ProjectCard 
              title="ShopSphere"
              desc="Next-gen E-commerce experience with real-time state management."
              img="/assets/screenshots/ShopSphere.png"
              tags={['React', 'Vercel']}
              link="https://shop-sphere-rouge-iota.vercel.app/"
            />
            <ProjectCard 
              title="Microloan Tracker"
              desc="Financial dashboard for monitoring micro-finance dispersion and health."
              img="/assets/screenshots/microloan-tracker.png"
              tags={['Node.js', 'MUI']}
              link="https://microloan-tracker.vercel.app/"
            />
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              onClick={() => setShowMore(!showMore)}
              endIcon={showMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              sx={{ color: 'var(--color-brand-accent)', fontWeight: 'bold' }}
            >
              {showMore ? "View Less" : "View More Projects"}
            </Button>
          </div>

          <AnimatePresence>
            {showMore && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              >
                <ProjectCard 
                  title="Crypto Trends"
                  desc="Live market analytics platform visualizing real-time trading data."
                  img="/assets/screenshots/crypto-trends.png"
                  tags={['API', 'D3.js']}
                  link="https://crypto-trends-kohl.vercel.app/"
                />
                <ProjectCard 
                  title="EESCL Uganda"
                  desc="Full-scale management portal for environmental consultancy."
                  img="/assets/screenshots/EESCLUG.png"
                  tags={['WordPress', 'UX Design']}
                  link="https://eescluganda.wuaze.com/?i=1"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32">
        <Container maxWidth="sm">
          <div className="glass-panel p-12 rounded-3xl text-center border-brand-accent/20!">
            <Typography variant="h4" className="font-bold mb-4">Let&apos;s build something.</Typography>
            <Typography variant="body1" className="text-slate-400 mb-8">
              Available for remote engineering roles and technical consulting.
            </Typography>
            <Button 
              variant="contained" 
              href="mailto:cpbmbaz57@gmail.com" 
              startIcon={<EmailIcon />}
              sx={{ py: 2, px: 6, bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#e2e8f0' }, borderRadius: 2, fontWeight: 'bold' }}
            >
              Say Hello
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ProjectCard({ title, desc, img, link, tags, isComingSoon = false }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full border-white/5!">
      <div className="h-48 overflow-hidden bg-slate-900 relative">
        <img src={img} alt={title} className={`w-full h-full object-cover transition-opacity ${isComingSoon ? 'opacity-30' : 'opacity-80 hover:opacity-100'}`} />
        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-3 py-1 bg-brand-accent/20 text-brand-accent border border-brand-accent/30 rounded-full text-[10px] font-bold uppercase tracking-widest">In Development</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex gap-2 mb-3">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-bold text-brand-accent tracking-widest">{tag}</span>
          ))}
        </div>
        <Typography variant="h6" className="font-bold mb-2">{title}</Typography>
        <Typography variant="body2" className="text-slate-400 mb-6">{desc}</Typography>
        {!isComingSoon && (
          <Button href={link} target="_blank" className="text-brand-accent! p-0 font-bold! text-xs! self-start">
            View Project →
          </Button>
        )}
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
  isComingSoon: PropTypes.bool,
};

export default App;