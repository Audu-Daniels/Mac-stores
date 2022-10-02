import React from "react";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from "./screens/HomeScreen";
// import { Route, Routes } from 'react-router-dom';
// import ProductDescriptionScreen from "./screens/ProductDescriptionScreen";



function App() {
  return (
    <div className="App">

    <Navbar />
    <HomeScreen />

    
    {/* <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductDescriptionScreen />} />
        
    </Routes> */}


  </div>
  )
}

export default App;
