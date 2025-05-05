import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./components/property/PropertyDetail";
// import seedHouses from "./firebase/seedHouse";
// import { useEffect } from "react";


const App = () => {

  // useEffect(() => {
  //   seedHouses(); // hanya panggil sekali lalu hapus
  // }, []);

  // console.log(getHouses);
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
