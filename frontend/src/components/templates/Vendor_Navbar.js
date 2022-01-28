import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



const Vendor_Navbar = () => {
  const navigate = useNavigate();

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/vendor_home")}
          >
            FOOD ORDERING PORTAL/Vendor
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/vendor_home")}>
          Vendor Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/vendor_orderpage")}>
         Vendor  orders
          </Button>
          <Button color="inherit" onClick={() => navigate("/foodmenu")}>
         Vendor Food menu
          </Button>
          <Button color="inherit" onClick={() => { navigate("/statistics")}}>
          Statistics
          </Button>
          <Button color="inherit" onClick={() => { localStorage.setItem("type", ""); navigate("/")}}>
          Logout
          </Button>
          
          {/* <Button color="inherit" onClick={() => navigate("/vendor_edit")}>
           Profile Edit
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
   
  );
};

export default Vendor_Navbar;
