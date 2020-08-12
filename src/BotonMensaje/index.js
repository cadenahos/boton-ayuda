import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import { Tooltip, Paper } from '@material-ui/core';

const contenido = `En que podemos ayudarle`;

const BotonMensaje = () => (
    <div>
    <Tooltip title={contenido} placement="left" >
    <HelpIcon style={{ fontSize: 70 }} color="secondary"  />
    </Tooltip>
    </div>
);

export default BotonMensaje;
