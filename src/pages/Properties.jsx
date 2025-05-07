import { useState, useEffect } from "react";
import FilterForm from "../components/property/SidebarPropertyFilter";
import { getHouses } from "../firebase/firebase-operations"; // Fetching data from Firebase
import PropertyCard from "../components/property/PropertyCard"; // Import PropertyCard component

// Function to get unique values from an array of objects based on a key
const uniqueValues = (arr, key) => [...new Set(arr.map((item) => item[key]))];

const Properties = () => {
  const [data, setData] = useState([]); // State to store data fetched from Firebase
  const [filteredData, setFilteredData] = useState([]); // State to store filtered data
  const [loading, setLoading] = useState(true); // Loading state for data fetching
  const [error, setError] = useState(null); // State to store error message

  // Fetch houses data from Firebase only once when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const houses = await getHouses(); // Assuming getHouses returns the data
        setData(houses);
        setFilteredData(houses); // Set initial filtered data to the fetched houses
        setLoading(false);
      } catch (error) {
        console.error("Error fetching houses:", error);
        setError("Gagal memuat data properti.");
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when component mounts

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
      setFilteredData(filtered); // Update filtered data if it changed
    }
  };

  // Render loading, error, or filtered properties
  if (loading) return <p className="text-center py-12">Memuat data...</p>;
  if (error) return <p className="text-center py-12 text-red-600">{error}</p>;
 
  return (
    <div className="container mt-6 mx-auto flex flex-col sm:flex-row px-2 sm:space-x-4">
      <FilterForm
        onFilter={handleFilter}
        modelOptions={uniqueValues(data, "model")}
        typeOptions={uniqueValues(data, "type")}
        sizeOptions={uniqueValues(data, "size")}
      />
      {filteredData.length === 0 ? (
        <p className="text-center py-12">Tidak ada properti yang sesuai.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {filteredData.map((rumah) => (
            <PropertyCard key={rumah.id || rumah.model} property={rumah} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
