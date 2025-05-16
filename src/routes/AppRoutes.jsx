import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetail from "../components/property/PropertyDetail";
import PropertiesForm from "../pages/PropertiesForm";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetail />} />
      <Route path="/propertiesForm" element={<PropertiesForm />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />} />
  </Routes>
  );
};

export default AppRoutes;