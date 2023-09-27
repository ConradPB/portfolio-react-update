// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Conrad Bugingo
          </Typography>
          <Button color='inherit' href='#work'>Work</Button>
        </Toolbar>
      </AppBar>
      <section id='welcome-section'>
        <h1>Hello. My name is Conrad Bugingo. Welcome to my website.</h1>
      </section>
      <section id='projects'>
        <h2>WORK</h2>
        <div className='project-tile'></div>
      </section>
      <a href='https://github.com/G-rizz' id='profile-link' target='_blank' rel='noreferrer'>GitHub</a>
    </div>
  );
}

export default App;

