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

 
}

export default App;
