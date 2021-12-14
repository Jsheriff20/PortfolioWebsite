import React from "react";
import clsx from "clsx";
import {makeStyles} from '@mui/styles';
// @material-ui/icons components
// core components
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import {GitHub, Email, LinkedIn} from '@mui/icons-material';
import theme from "../../Components/Themes";
import { color } from "@mui/system";

//sx styles
const iconStyle = { 
}

const iconButtons = {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.contrastText,
    minWidth: "10px",
    padding:"7px 9px"
}

const iconTextCell = {
    display: 'flex',
    flexWrap: 'wrap',
    float: "left",
    color: theme.palette.primary.contrastText,
    borderBottom:"none",

    ":hover #emailButton":{
        background: theme.palette.iconButtons.email.icon,
        "> *":{
            color:theme.palette.iconButtons.email.button
        }
    },

    ":hover #gitHubButton":{
        background: theme.palette.iconButtons.gitHub.icon,
        "> *":{
            color:theme.palette.iconButtons.email.button
        }
    },

    ":hover #linkedInButton":{
        background: theme.palette.iconButtons.linkedIn.icon,
        "> *":{
            color:theme.palette.iconButtons.email.button
        }
    },
}



const MediaButtons = () => {
  return (
    <TableContainer sx={{ maxWidth:"600px" }}>
    <Table sx={{ maxWidth:"600px"}} aria-label="simple table">
        <TableBody sx={{fontSize:50}}>
            <TableRow
                key="Email"
                
            >
                <TableCell component="th" scope="row" sx={iconTextCell} onClick={() => openInNewTab("mailto:JackASheriff@hotmail.co.uk")}>

                    <Button id="emailButton" variant="contained" sx={iconButtons}>

                        <Email sx={Object.assign({color:theme.palette.iconButtons.email.icon}, iconStyle)}/>
                    </Button>

                    <Typography><strong>JackASheriff@hotmail.co.uk</strong></Typography>
                </TableCell>
            </TableRow>

            <TableRow
                key="GitHub"
            >
                <TableCell component="th" scope="row" sx={iconTextCell} onClick={() => openInNewTab("https://github.com/Jsheriff20")}>

                    <Button id="gitHubButton" variant="contained" sx={iconButtons}>

                        <GitHub sx={Object.assign({color:theme.palette.iconButtons.gitHub.icon}, iconStyle)}/>
                    </Button>

                    <Typography><strong>JSheriff20</strong></Typography>
                </TableCell>
            </TableRow>
            <TableRow
                key="LinkedIn"
            >
                <TableCell component="th" scope="row" sx={iconTextCell} onClick={() => openInNewTab("https://www.linkedin.com/in/jacksheriff20/")}> 

                    <Button id="linkedInButton" variant="contained" sx={iconButtons}>

                        <LinkedIn sx={Object.assign({color:{color:theme.palette.iconButtons.linkedIn.icon}}, iconStyle)}/>
                    </Button>

                    <Typography><strong>JackSheriff20</strong></Typography>
                </TableCell>
            </TableRow>

        </TableBody>
    </Table>
</TableContainer>
  );
};

export default MediaButtons;


const openInNewTab = (url) => {
    const win = window.open(url, '_blank');
    if (win != null) {
      win.focus();
    }
}