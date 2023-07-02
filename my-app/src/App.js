import "./App.css";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Payment from "../src/screens/Payment";
import Signup from "./screens/Signup";
import Locate from "./screens/Locate";
import Aboutus from "./screens/Aboutus";
import Placed from "./screens/Placed";
import Information from "./screens/Information";
import Delivery from "./screens/Delivery";
import Confirm from "./screens/Confirm";
import Cart from "./screens/Cart";
import UserProfile from "./screens/UserProfile";
import Clinics from "./screens/Clinics";
import Groomers from "./screens/Groomers";
import FindPet from "./screens/FindPet";
import Shop from "./screens/Shop";
import PaymentMethod from "./screens/PaymentMethod";
import DeliveryMethod from "./screens/DeliveryMethod";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPasswordPage from "./screens/ResetPasswordPage";
import PetsListScreen from "./screens/PetsListScreen";
import PetEditScreen from "./screens/PetEditScreen";
import VerifyEmail from "./screens/VerifyEmail";
import PetSelection from "./screens/PetSelection";
import FindDog from "./screens/FindDog";
import DogEditScreen from "./screens/DogEditScreen";
import Cardd from "./components/Cardd";
import Imagespets from "./screens/Imagespets"
import ImagesDogs from "./screens/ImagesDogs";
function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#F5EBE0" }}>
        {/* <HomePage/> */}
        {/* <Login /> */}
        {/* <Formss /> */}
        {/* <Payment/> */}
        {/* <Signup /> */}
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/aboutus" element={<Aboutus />}></Route>
          <Route exact path="/cart/:id?" element={<Cart />}></Route>
          <Route exact path="/clinics" element={<Clinics />}></Route>
          <Route exact path="/confirm" element={<Confirm />}></Route>
          <Route exact path="/delivery" element={<Delivery />}></Route>
          <Route exact path="/findpet" element={<FindPet />}></Route>
          <Route exact path="/groomers" element={<Groomers />}></Route>
          <Route exact path="/product/:id" element={<Information />}></Route>
          <Route exact path="/locate" element={<Locate />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/placed/:id?" element={<Placed />}></Route>
          <Route exact path="/userprofile" element={<UserProfile />}></Route>
          <Route exact path="/final" element={<PaymentMethod />}></Route>
          <Route exact path="/deliver" element={<DeliveryMethod />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/forgot" element={<ForgotPassword />}></Route>
          <Route exact path="/verify" element={<VerifyEmail />}></Route>
          <Route exact path="/petselect" element={<PetSelection />}></Route>
          <Route exact path="/finddog" element={<FindDog />}></Route>
          <Route exact path="/findcat" element={<Imagespets/>}></Route>
          <Route exact path="/finddogimage" element={<ImagesDogs/>}></Route>
          <Route exact path="/cards" element={<Cardd />}></Route>

          <Route
            exact
            path="/reset-password/:token?"
            element={<ResetPasswordPage />}
          />

          <Route
            exact
            path="/admin/userlist"
            element={<UserListScreen />}
          ></Route>
          <Route
            exact
            path="/admin/user/:id/"
            element={<UserEditScreen />}
          ></Route>

          <Route
            exact
            path="/admin/productlist"
            element={<ProductListScreen />}
          ></Route>

          {/* :id/edit is written in the video ?? */}
          {/* path="/admin/products/:id/edit"   ???? */}
          <Route
            exact
            path="/admin/products/update/:id/"
            element={<ProductEditScreen />}
          ></Route>

          <Route
            exact
            path="/admin/orderlist"
            element={<OrderListScreen />}
          ></Route>

          <Route
            exact
            path="/admin/petslist"
            element={<PetsListScreen />}
          ></Route>

          <Route
            exact
            path="/admin/pet/:id/"
            element={<PetEditScreen />}
          ></Route>

          <Route
            exact
            path="/admin/pet/dog/:id/"
            element={<DogEditScreen />}
          ></Route>
          
        </Routes>

        {/* <Placed/>
      <Payment/>
      <Delivery/> */}
        {/*
       <Information/> 
   
      <Confirm/>
      <Cart/> */}
        {/* <UserProfile/>
      <Clinics/>
      <Groomers/>
      <FindPet/>

      <Shop/> */}

        {/* <Locate/> */}
        {/* <Aboutus/> */}
        {/* <ShopItems/> */}
      </div>
    </Router>
  );
}

export default App;
