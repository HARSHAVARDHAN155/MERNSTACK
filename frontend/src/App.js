import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import UserRegister from "./components/common/User_register";
import VendorRegister from "./components/common/Vendor_register";
import Common_registration from "./components/common/Common_register";
const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="allregister" element={<Common_registration />} />
          <Route path="user_register" element={<UserRegister />} />
          <Route path="vendor_register" element={<VendorRegister />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
