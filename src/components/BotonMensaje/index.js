import React from 'react';
import { contenido } from '../ContenidoBoton'

import HelpIcon from '@material-ui/icons/Help';
import {  IconButton, MuiThemeProvider,  } from '@material-ui/core';
import { theme, TooltipcolorAtica } from '../MuiStyle';

export default function BotonMensaje() {
    return(
    <div>
    <MuiThemeProvider theme={theme} >
        <TooltipcolorAtica  title={contenido} placement="left" interactive >
            <IconButton>
                <HelpIcon style={{ fontSize: 80 }} color="primary"  />
            </IconButton>
        </TooltipcolorAtica>
    </MuiThemeProvider>
    </div>
    );
}
