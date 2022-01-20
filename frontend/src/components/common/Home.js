import { fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return (
    <div>
      <Navbar/>
      <div style={{ backgroundColor: "#FAE03B", padding: 100, textAlign: "center", marginTop: 100, fontSize: 30 }}>
        <h1 > WELCOME TO FOOD ORDERING PORTAL </h1>
      </div>
    </div>)
};

export default Home;
