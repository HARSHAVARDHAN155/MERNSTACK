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
import Login from "./components/common/Login";
import Buyer_home from "./components/common/Buyer_Home";
import Vendor_Home from "./components/common/Vendor_Home";
import Buyer_Navbar from "./components/templates/Buyer_Navbar";
import Buyer_edit from "./components/common/Buyer_edit";
import Vendor_edit from "./components/common/vendor_edit";
import Fooditem_vendor from "./components/common/Fooditem_vendor";
import AddFooditem from "./components/common/AddFooditem";
import Myorders_buyer from "./components/common/Myorders_buyer";
import Fav from "./components/common/Fav";
import Vendor_Order from "./components/common/Vendor_Orders";
import Vendor_Statiscits from "./components/common/Vendor_statistics";
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
          <Route path="login" element={<Login />} />
          <Route path="buyer_home" element={<Buyer_home />} />
          <Route path="myorders" element={<Myorders_buyer />} />
          <Route path="vendor_orderpage" element={<Vendor_Order />} />
          <Route path="addingFood" element={<AddFooditem />} />
          <Route path="foodmenu" element={<Fooditem_vendor/>} />
          <Route path="statistics" element={<Vendor_Statiscits/>} />
          <Route path="vendor_home" element={<Vendor_Home />} />
          <Route path="fav" element={<Fav />} />
          <Route path="allregister" element={<Common_registration />} />
          <Route path="user_register" element={<UserRegister />} />
          <Route path="vendor_register" element={<VendorRegister />} />
          <Route path="buyer_edit" element={<Buyer_edit/>} />
          <Route path="vendor_edit" element={<Vendor_edit/>} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
