import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHouseById } from "../../firebase/firebase-operations"; // Pastikan fungsi ini ada

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      const data = await getHouseById(id);
      setProperty(data);
      setLoading(false);
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center py-12">Memuat data...</p>;
  if (!property) return <p className="text-center py-12">Properti tidak ditemukan.</p>;

  return (
    <div>
      {/* Gambar Hero */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:p-0">
          <div className="sm:flex space-x-2">
            <img
              src={property.gambar}
              alt={property.type}
              className="w-full h-96 object-cover rounded-xl mb-6"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4">{property.type} - {property.model}</h2>
              <p className="text-lg text-gray-600">
                Rumah {property.model} tipe {property.type} dengan luas {property.size} dan konstruksi {property.area_konstruksi}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Properti */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Spesifikasi</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Luas:</strong> {property.size}</li>
              <li><strong>Area Konstruksi:</strong> {property.area_konstruksi}</li>
              <li><strong>Jumlah Penghuni:</strong> {property.jumlah_penghuni}</li>
              <li><strong>Dimensi:</strong> {property.dimensi}</li>
              <li><strong>Berat Unit:</strong> {property.berat_unit}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Kelengkapan</h3>
            {Array.isArray(property.kelengkapan) ? (
              <ul className="list-disc list-inside text-gray-700">
                {property.kelengkapan.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Data kelengkapan tidak tersedia.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Tertarik dengan Properti Ini?
        </h2>
        <a
          href="https://wa.me/6281234567890" // ganti dengan kontak kamu
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
        >
          Hubungi Kami via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default PropertyDetail;
