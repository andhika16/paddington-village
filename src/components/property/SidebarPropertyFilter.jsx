/* eslint-disable react/prop-types */
const SidebarPropertyFilter = ({ filters, setFilters, sidebarOpen }) => {
  return (
    <div
      className={`w-full md:w-1/4 p-4 bg-gray-200 transition-all ${
        sidebarOpen ? "block" : "hidden"
      } md:block`}
    >
      <h3 className="text-lg font-semibold mb-4">Filter Properti</h3>

      {/* Filter Harga */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Harga</label>
        <select
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="all">Semua Harga</option>
          <option value="1000000000">Di bawah Rp 1.000.000.000</option>
          <option value="2000000000">Di bawah Rp 2.000.000.000</option>
          <option value="3000000000">Di bawah Rp 3.000.000.000</option>
        </select>
      </div>

      {/* Filter Kamar */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Kamar Tidur
        </label>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="all">Semua Kamar</option>
          <option value="natural house">1 Kamar</option>
          <option value="cabin house">2 Kamar</option>
          <option value="">3 Kamar</option>
          <option value="4">4 Kamar</option>
        </select>
      </div>

      {/* Filter Tipe */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Jenis Properti
        </label>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="all">Semua Tipe</option>
          <option value="modern">Modern</option>
          <option value="cabin house">cabin house</option>
          <option value="villa">Villa</option>
          <option value="pantai">Tepi Laut</option>
          <option value="kost">Kost</option>
        </select>
      </div>
    </div>
  );
};

export default SidebarPropertyFilter;
