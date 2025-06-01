import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link to={`/products/${product.id || product.model}`}>
    <div className="border  shadow hover:shadow-md transition overflow-hidden bg-white">
      <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center">
        <img
          src={product.gambar}
          alt={product.model}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-md mb-1">{product.model}</h3>
        <p className="text-sm capitalize text-gray-600">{product.type}</p>
      </div>
    </div>
  </Link>
);

export default ProductCard;
