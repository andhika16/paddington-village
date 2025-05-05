import { useState } from "react";
import PropertyCard from "../components/property/PropertyCard"; // Import PropertyCard
import SidebarPropertyFilter from "../components/property/SidebarPropertyFilter"; // Import SidebarPropertyFilter

const Properties = () => {
  const [filters, setFilters] = useState({
    price: "all",
    bedrooms: "all",
    type: "all",
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const properties = [
    { id: 1, title: "Rumah Modern #1", price: 1500000000, bedrooms: 3, type: "modern", image: "https://dummyimage.com/720x600/000/fff&text=Rumah+Modern+1" },
    { id: 2, title: "Rumah Minimalis #2", price: 1200000000, bedrooms: 2, type: "minimalis", image: "https://dummyimage.com/720x600/000/fff&text=Rumah+Minimalis+2" },
    { id: 3, title: "Villa Mewah #3", price: 2500000000, bedrooms: 4, type: "villa", image: "https://dummyimage.com/720x600/000/fff&text=Villa+Mewah+3" },
    { id: 4, title: "Rumah Tepi Laut #4", price: 1800000000, bedrooms: 3, type: "pantai", image: "https://dummyimage.com/720x600/000/fff&text=Rumah+Tepi+Laut+4" },
    { id: 5, title: "Kamar Kost #5", price: 500000000, bedrooms: 1, type: "kost", image: "https://dummyimage.com/720x600/000/fff&text=Kamar+Kost+5" },
  ];

  const filteredProperties = properties.filter(property => {
    return (
      (filters.price === "all" || property.price <= parseInt(filters.price)) &&
      (filters.bedrooms === "all" || property.bedrooms === parseInt(filters.bedrooms)) &&
      (filters.type === "all" || property.type === filters.type)
    );
  });

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        {/* Button Toggle Sidebar */}
        <button
          className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Tutup Filter" : "Tampilkan Filter"}
        </button>

        <h2 className="text-2xl font-bold mb-8 text-center">Daftar Properti</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <SidebarPropertyFilter
        filters={filters}
        setFilters={setFilters}
        sidebarOpen={sidebarOpen}
      />
    </div>
  );
};

export default Properties;
