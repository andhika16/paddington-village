// src/hooks/useProducts.js
import { useState, useEffect } from "react";
import { getHouses } from "../firebase/firebase-operations";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHouses();
        setProducts(data);
        console.log(data);
        
        setFiltered(data);
      } catch {
        setError("Gagal memuat data produk.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filterByType = (type) => {
    if (!type) return setFiltered(products);
    setFiltered(products.filter((item) => item.type === type));
  };

  const getUniqueTypes = () => [...new Set(products.map((p) => p.type))];

  return { products, filtered, loading, error, filterByType, getUniqueTypes };
};

export default useProducts;
