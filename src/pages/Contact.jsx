import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductPage from "../components/ProductPage";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div className="p-4 text-red-500">Produk tidak ditemukan</div>;

  return <ProductPage product={product} />;
};

export default ProductDetail;
