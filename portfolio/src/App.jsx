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

      