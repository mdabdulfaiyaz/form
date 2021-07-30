import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import './App.css';
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    maxWidth: '100vw',
    margin: '0px',
    backgroundColor: '#5d65e2',
    boxShadow: '2px 0px 67px 4px rgba(0,0,0,0.49) inset',
    paddingLeft: '0px',
    paddingRight: '0px',
    overflow: 'hidden',
  },
}))

function App() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Home />
    </Container>
  );
}

export default App;
