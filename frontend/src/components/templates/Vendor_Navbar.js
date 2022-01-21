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
          Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/")}>
         Food menu
          </Button>
          <Button color="inherit" onClick={() => navigate("/")}>
          Logout
          </Button>
          <Button color="inherit" onClick={() => navigate("/users")}>
           Profile
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
   
  );
};

export default Vendor_Navbar;
