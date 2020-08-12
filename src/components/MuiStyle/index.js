import { makeStyles,createMuiTheme, withStyles} from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const theme = createMuiTheme ({
    overrides: {
        MuiTooltip: {
          tooltip: {
            fontSize: "2em",
            color: "yellow",
            backgroundColor: "red",
          }  
        },
      }
});

const TooltipcolorAtica = withStyles({
    tooltip: {
      fontSize: 20,  
      color: "#2e1a46",
      backgroundColor: "lightblue",
    },
})
(Tooltip);

const useStyles = makeStyles({
  
    root: {
        padding: '5px',
        background: 'rgba(244, 113, 168, 0.14)',
    },
    titulo: {
        display: 'flex',
        justifyContent: 'center',
        color: "#2e1a46",
    },

    botones: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    avatarimagen:{
    
    },
 

    body: {
        width: '100%',
        height: '800px',
    },
});


export{
    TooltipcolorAtica,
    theme,
}


export default useStyles;