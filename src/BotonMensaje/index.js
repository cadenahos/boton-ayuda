import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import { Tooltip, Paper, IconButton } from '@material-ui/core';

const contenido = `En que podemos ayudarle`;

const BotonMensaje = () => (
    <div>
    <Tooltip title={contenido} placement="left" >
    <IconButton>
    <HelpIcon style={{ fontSize: 70 }} color="secondary"  />
    </IconButton>
    </Tooltip>
    </div>
);

export default BotonMensaje;
