import React from 'react';
import { contenido } from '../ContenidoBoton'
import logoAtica from './logo.gif';
import {  IconButton, MuiThemeProvider} from '@material-ui/core';
import { theme, TooltipcolorAtica,  } from '../MuiStyle';

export default function BotonMensaje() { 

    return( 
    <div>
    <MuiThemeProvider theme={theme} >
        <TooltipcolorAtica  title={contenido} placement="left" interactive >
            <IconButton >
            <img src={logoAtica} width="150px" height="150px" alt="avatar"></img>
            </IconButton>
        </TooltipcolorAtica>
    </MuiThemeProvider>
    </div>
    );
}
