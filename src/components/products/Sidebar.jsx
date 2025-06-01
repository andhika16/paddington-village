const Sidebar = ({ types, onFilter }) => {
  return (
    <div className="bg-white p-4 border ">
      <p className="font-semibold text-lg mb-3">Filter Produk</p>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onFilter(null)}
            className="hover:text-blue-600 text-gray-600 text-sm"
          >
            Semua Produk
          </button>
        </li>
        {types.map((type) => (
          <li key={type}>
            <button
              onClick={() => onFilter(type)}
              className="hover:text-blue-600 text-gray-600 capitalize text-sm font-sans py-3"
            >
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
