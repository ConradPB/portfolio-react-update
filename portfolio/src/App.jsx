import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
// Import images
import profilePic from './assets/profile.jpg';
import microloanTracker from './assets/microloan-tracker.jpg';
import cryptoTrends from './assets/crypto-trends.jpg';
import eescLuganda from './assets/eesc-luganda.jpg';
import distanceCalculator from './assets/distance-calculator.jpg';
import placeholder from './assets/placeholder.jpg';

function App() {
    const [copied, setCopied] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('cpbmbaz57@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  
}

export default App;