import React from 'react';
import BotonMensaje from '../BotonMensaje';
import { makeStyles, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '5px',
    background: 'rgba(244, 113, 168, 0.14)',

  },
  botones: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default function App() {
  const classes = useStyles();
  return (
  <Paper className={classes.root} width= "100%" height= "100%" >
    <h1> Mi Boton App</h1>
      <div className= {classes.botones} >
        <BotonMensaje/>
      </div>
  </Paper>
);
}
