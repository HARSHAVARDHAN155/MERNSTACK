import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



const Buyer_Navbar = () => {
  const navigate = useNavigate();

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/buyer_home")}
          >
            FOOD ORDERING PORTAL/Buyer
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/buyer_home")}>
          Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/myorders")}>
          My Orders
          </Button>
          <Button color="inherit" onClick={() => navigate("/fav")}>
          Favourites
          </Button>
          <Button color="inherit" onClick={() =>{  localStorage.setItem("type", ""); navigate("/")}}>
          Logout
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyer_edit")}>
           Edit Profile
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
   
  );
};

export default Buyer_Navbar;
