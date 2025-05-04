import { useParams, Link } from "react-router-dom";

const PropertyDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const property = {
    id,
    title: `Rumah Modern #${id}`,
    description: "Rumah dengan desain modern, lokasi strategis, dan cocok untuk keluarga. Dilengkapi dengan taman dan ruang keluarga yang luas.",
    price: "Rp. 1.500.000.000",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      area: "120 m²",
      lotSize: "200 m²",
    },
    image: `https://dummyimage.com/720x600/000/fff&text=Rumah+Modern+${id}`,
  };

  return (
    <div>
      {/* Hero Image */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <img
            src={property.image}
            alt="Properti"
            className="w-full h-96 object-cover rounded-xl mb-6"
          />
          <h2 className="text-3xl font-semibold mb-4">{property.title}</h2>
          <p className="text-lg text-gray-600">{property.description}</p>
        </div>
      </section>

      {/* Informasi Properti */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Fitur Properti</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Kamar Tidur:</strong> {property.features.bedrooms} Kamar</li>
              <li><strong>Kamar Mandi:</strong> {property.features.bathrooms} Kamar</li>
              <li><strong>Luas Bangunan:</strong> {property.features.area}</li>
              <li><strong>Luas Tanah:</strong> {property.features.lotSize}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Harga</h3>
            <p className="text-xl font-bold text-blue-600">{property.price}</p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">Tertarik dengan Properti Ini?</h2>
        <Link
          to="/properties"
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
        >
          Lihat Properti Lain
        </Link>
      </section>
    </div>
  );
};

export default PropertyDetail;
