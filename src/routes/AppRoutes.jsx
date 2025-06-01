import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetails";
import ProductForm from "../pages/ProductForm";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/product-form" element={<ProductForm />} />
      <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
