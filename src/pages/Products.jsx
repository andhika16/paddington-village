import useProducts from "../hooks/useProducts";
import Sidebar from "../components/products/Sidebar";
import ProductGrid from "../components/products/ProductGrid";
import PropertySkeletonGrid from "../components/utils/SkeletonLoading";
const Products = () => {
  const { filtered, loading, error, filterByType, getUniqueTypes } = useProducts();

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <Sidebar types={getUniqueTypes()} onFilter={filterByType} />
      </div>

      <div className="md:col-span-3">
        {loading ? (
          <PropertySkeletonGrid count={9} />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filtered.length === 0 ? (
          <p className="text-center">Tidak ada produk yang tersedia.</p>
        ) : (
          <ProductGrid products={filtered} />
        )}
      </div>
    </div>
  );
};

export default Products;
