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
    <div className="App">
     

      <section id="about" className="section">
        <Container>
          <h2>About Me</h2>
          <p>
            I’m a developer with experience in React, JavaScript, and modern web technologies. 
            I love solving problems and creating user-friendly applications.
          </p>
        </Container>
      </section>

      <section id="work" className="section">
        <Container>
          <h2>Work</h2>
          <div className="projects-grid">
            <div className="project-tile">
              <h3>Project 1</h3>
              <p>A brief description of your project.</p>
              <Button variant="outlined" href="#">View Project</Button>
            </div>
            <div className="project-tile">
              <h3>Project 2</h3>
              <p>A brief description of your project.</p>
              <Button variant="outlined" href="#">View Project</Button>
            </div>
          </div>
        </Container>
      </section>

      
    </div>
  );
}

export default App;