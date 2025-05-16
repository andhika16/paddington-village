import { useState, useEffect } from "react";
import FilterForm from "../components/property/SidebarPropertyFilter";
import { getHouses } from "../firebase/firebase-operations";
import PropertyCard from "../components/property/PropertyCard";

// Function to get unique values from an array of objects based on a key
const uniqueValues = (arr, key) => [...new Set(arr.map((item) => item[key]))];

const Properties = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch houses data from Firebase only once when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const houses = await getHouses();
        setData(houses);
        setFilteredData(houses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching houses:", error);
        setError("Gagal memuat data properti.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle filtering of properties
  const handleFilter = ({ model, type, size }) => {
    const filtered = data.filter(
      (item) =>
        (!model || item.model === model) &&
        (!type || item.type === type) &&
        (!size || item.size === size)
    );
    // Only update filteredData if it actually changes
    if (filtered.length !== filteredData.length) {
      setFilteredData(filtered);
    }
  };

  // Render loading, error, or filtered properties
  if (loading) return <p className="text-center py-12">Memuat data...</p>;
  if (error) return <p className="text-center py-12 text-red-600">{error}</p>;

  return (
<div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
  {/* Sidebar (1 kolom dari 4) */}
  <div className="md:col-span-1">
    <FilterForm
      onFilter={handleFilter}
      modelOptions={uniqueValues(data, "model")}
      typeOptions={uniqueValues(data, "type")}
      sizeOptions={uniqueValues(data, "size")}
    />
  </div>

  {/* Produk (3 kolom dari 4) */}
  <div className="md:col-span-3">
    {filteredData.length === 0 ? (
      <p className="text-center py-12">Tidak ada properti yang sesuai.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((rumah) => (
          <PropertyCard key={rumah.id || rumah.model} property={rumah} />
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default Properties;
