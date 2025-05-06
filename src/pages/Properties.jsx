import { useEffect, useState } from "react";
import PropertyCard from "../components/property/PropertyCard";
import SidebarPropertyFilter from "../components/property/SidebarPropertyFilter";
import { getHouses, deleteHouse } from "../firebase/firebase-operations";

const Properties = () => {
  const [filters, setFilters] = useState({
    size: "all",
    jumlahPenghuni: "all",
    type: "all",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      const data = await getHouses();
      setProperties(data);
      setLoading(false);
    };

    fetchProperties();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteHouse(id);
      setProperties((prev) => prev.filter((property) => property.id !== id));
    } catch (error) {
      console.error("Gagal menghapus properti:", error);
    }
  };

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.size === "all" || property.size === filters.size) &&
      (filters.jumlahPenghuni === "all" || property.jumlah_penghuni === parseInt(filters.jumlahPenghuni)) &&
      (filters.type === "all" || property.type === filters.type)
    );
  });

  console.log(filteredProperties);
  

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        <button
          className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Tutup Filter" : "Tampilkan Filter"}
        </button>

        <h2 className="text-2xl font-bold mb-8 text-center">Daftar Properti</h2>

        {loading ? (
          <p className="text-center">Memuat data properti...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div key={property.id} className="relative">
                <PropertyCard property={property} />
                <button
                  onClick={() => handleDelete(property.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <SidebarPropertyFilter
        filters={filters}
        setFilters={setFilters}
        sidebarOpen={sidebarOpen}
      />
    </div>
  );
};

export default Properties;
