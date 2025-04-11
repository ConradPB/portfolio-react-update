import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('cpbmbaz57@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
   
  );
}

export default App;