import React from 'react';
import BotonMensaje from '../BotonMensaje';
import {Paper, Grid } from '@material-ui/core';
import  useStyles from '../MuiStyle';

export default function App() {
  const classes = useStyles();
  return (
  <Paper className={classes.root} width= "100%" height= "100%" >
    <div className={classes.titulo}>
      <h1 >
        Mi Boton App
      </h1>
    </div>
    <Grid className={classes.body} />
      <div className= {classes.botones} >
        <BotonMensaje/>
      </div>
  </Paper>
);
}
