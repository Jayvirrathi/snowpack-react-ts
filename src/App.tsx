import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">
          SnowPack React JS
        </Button>
      </header>
    </div>
  );
}

export default App;
