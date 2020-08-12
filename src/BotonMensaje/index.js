import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import {  IconButton, MuiThemeProvider,  } from '@material-ui/core';
import useStyles, { theme, BlueOnGreenTooltip }from '../MuiStyle';


const contenido = `¿ En que podemos ayudarle ?`;

export default function BotonMensaje() {

    const classes = useStyles()
    return(
    <div>
    <MuiThemeProvider theme={theme} >
        <BlueOnGreenTooltip className={classes.mesnaje} title={contenido} placement="left" interactive >
            <IconButton>
                <HelpIcon style={{ fontSize: 80 }} color="primary"  />
            </IconButton>
        </BlueOnGreenTooltip>
    </MuiThemeProvider>
    </div>
    );
}
