import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {products.map((p) => (
      <ProductCard key={p.id || p.model} product={p} />
    ))}
  </div>
);

export default ProductGrid;
