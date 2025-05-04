import { Link } from "react-router-dom";
import { useState } from "react";
const Properties = () => {
  const [filters, setFilters] = useState({
    price: "all",
    bedrooms: "all",
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Properti dummy untuk ditampilkan
  const properties = [
    { id: 1, title: "Rumah Modern #1", price: 1500000000, bedrooms: 3, image: "https://dummyimage.com/720x600/000/fff&text=Rumah+Modern+1" },
    { id: 2, title: "Rumah Minimalis #2", price: 1200000000, bedrooms: 2, image: "https://dummyimage.com/720x600/000/fff&text=Rumah+Minimalis+2" },
    { id: 3, title: "Villa Mewah #3", price: 2500000000, bedrooms: 4, image: "https://dummyimage.com/720x600/000/fff&text=Villa+Mewah+3" },
    { id: 4, title: "Rumah Tepi Laut #4", price: 1800000000, bedrooms: 3, image: "https://dummyimage.com/720x600/000/fff&text=Rumah+Tepi+Laut+4" },
    { id: 5, title: "Kamar Kost #5", price: 500000000, bedrooms: 1, image: "https://dummyimage.com/720x600/000/fff&text=Kamar+Kost+5" },
  ];

  const filteredProperties = properties.filter(property => {
    return (
      (filters.price === "all" || property.price <= filters.price) &&
      (filters.bedrooms === "all" || property.bedrooms === parseInt(filters.bedrooms))
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
            <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Lokasi strategis, desain minimalis, cocok untuk keluarga.
                </p>
                <p className="text-lg font-bold mt-4">Rp. {property.price.toLocaleString()}</p>
                <Link
                  to={`/properties/${property.id}`}
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className={`w-full md:w-1/4 p-4 bg-gray-200 transition-all  md:block mt-4 md:mt-0`}>
        <h3 className="text-lg font-semibold mb-4">Filter Properti</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Harga</label>
          <select
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="all">Semua Harga</option>
            <option value={1000000000}>Di bawah Rp 1.000.000.000</option>
            <option value={2000000000}>Di bawah Rp 2.000.000.000</option>
            <option value={3000000000}>Di bawah Rp 3.000.000.000</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Kamar Tidur</label>
          <select
            value={filters.bedrooms}
            onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="all">Semua Kamar</option>
            <option value="1">1 Kamar</option>
            <option value="2">2 Kamar</option>
            <option value="3">3 Kamar</option>
            <option value="4">4 Kamar</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Properties;
