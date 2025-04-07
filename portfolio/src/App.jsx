import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Conrad Bugingo
          </Typography>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#work">Work</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <section id="welcome-section" className="section welcome">
        <Container>
          <h1>Hello, I’m Conrad Bugingo</h1>
          <p>A passionate developer building creative solutions.</p>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        
      </section>

      {/* Work Section */}
      <section id="work" className="section">
        
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Container>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
          <div>
            <Button variant="contained" href="mailto:your.email@example.com">Email Me</Button>
            <Button variant="outlined" href="https://github.com/G-rizz" target="_blank" rel="noreferrer">
              GitHub
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default App;