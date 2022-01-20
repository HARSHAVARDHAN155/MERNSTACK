import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Navbar from "../templates/Navbar";

export default function NestedList() {
    const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div>
      <Navbar/>
    <div style={{padding:40,marginLeft:400,textAlign:"center"}}>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         Please Select Type of Registration 
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
    
        <ListItemText primary="Register" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}  onClick={() => navigate("/vendor_register")}>
            <ListItemText primary="VENDOR REGISTRATION" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}  onClick={() => navigate("/user_register")}>
            <ListItemText primary="USER REGISTRATION" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    </div>
    </div>
  );
}
