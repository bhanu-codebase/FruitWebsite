import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
function Cart() {
  return (
    <>
      
      <Navbar />
      <SinglePageHeader one={{title:"Cart"}}/>
      <CartPage />
      <Footer />
    </>
  );
}

export default Cart;
