import aboutImage from "../assets/assetbawaan/about_bg.webp";
import Sidebar from "../components/products/Sidebar"
import useProducts from "../hooks/useProducts";
const About = () => {
  const { filterByType, getUniqueTypes } = useProducts();
  return (
    <section className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar */}
      <aside className="md:col-span-1 space-y-8">
        {/* Produk */}
        <div className="md:col-span-1">
          <Sidebar types={getUniqueTypes()} onFilter={filterByType} />
        </div>

        {/* Contact */}
        <div className="bg-gray-50 border rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p className="text-sm text-gray-700 mb-3">
            Do you still have questions or would you like learn more about
            ZTHOUSE?
          </p>
          <div className="text-sm space-y-1">
            <p>📱 8618870949983</p>
            <p>📞 +86-18566028140</p>
            <p>📧 info@volferda.com</p>
          </div>
        </div>
      </aside>

      {/* Konten */}
      <main className="md:col-span-3">
        {/* Judul */}
        <h2 className="text-2xl font-bold mb-4">About Us</h2>

        {/* Gambar */}
        <img
          src={aboutImage}
          alt="Company Image"
          className=" w-full h-80 object-cover mb-6 shadow"
        />

        {/* Tab Navigation (Statik) */}
        <div className="border-b mb-4 flex space-x-6 text-sm font-medium">
          <button className="border-b-2 border-blue-600 text-blue-600 pb-1">
            Introduction
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            Product Delivery Center
          </button>
        </div>

        {/* Isi Konten */}
        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            <strong>VOLFERDA Industry Limited</strong> is a Global leading
            developer of cultural and tourism real estate. We develop advanced
            cultural and tourism intelligent housing products for global
            clients.
          </p>
          <p>
            We provide product solutions based on customer requirements from
            early project planning, mid-term product delivery, to later project
            operation.
          </p>
        </div>
      </main>
    </section>
  );
};

export default About;
