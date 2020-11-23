import React from "react";
import Header from "../components/Header/header";
import SearchCity from "../components/Search/citysearch";
import Footer from "../components/Footer/footer";

function Homepage() {
  return (
    <div className="home">
      <Header />
      <SearchCity />
      <Footer />
    </div>
  
   
  );
}
export default Homepage;
