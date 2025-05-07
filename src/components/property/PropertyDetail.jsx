import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHouseById } from "../../firebase/firebase-operations";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getHouseById(id);
        if (!data) {
          setError("Properti tidak ditemukan.");
        } else {
          setProperty(data);
        }
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        setError("Gagal memuat data properti.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center py-12">Memuat data...</p>;
  if (error) return <p className="text-center py-12 text-red-600">{error}</p>;

  return (
    <div className="container mx-auto ">
      {/* Hero Gambar */}
      <section className="py-12 bg-gray-100">
        <div className="sm:px-6 lg:px-8">
          <div className="sm:flex sm:space-x-6">
            <img
              src={property.gambar}
              alt={property.type}
              className="w-full sm:w-1/2 h-96 object-cover rounded-xl mb-6 sm:mb-0"
            />
            <div className="sm:w-1/2">
              <h2 className="text-3xl font-bold mb-4 capitalize">
                {property.type} - {property.model}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rumah {property.model} tipe {property.type} dengan luas{" "}
                {property.size}, konstruksi {property.area_konstruksi}, dan
                cocok untuk {property.jumlah_penghuni} penghuni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Properti */}
      <section className="py-12 bg-white">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Spesifikasi</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Luas:</strong> {property.size} Meter
              </li>
              <li>
                <strong>Area Konstruksi:</strong> {property.areaKonstruksi}
              </li>
              <li>
                <strong>Jumlah Penghuni:</strong> {property.jumlahPenghuni}
              </li>
              <li>
                <strong>Dimensi:</strong> {property.dimensi}
              </li>
              <li>
                <strong>Jumlah Lantai:</strong> {property.jumlahLantai}
              </li>
              <li>
                <strong>Berat Unit:</strong> {property.beratUnit}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Kelengkapan</h3>
            {Array.isArray(property.kelengkapan) &&
            property.kelengkapan.length > 0 ? (
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

      {/* CTA WhatsApp */}
      <section className="py-12 bg-blue-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Tertarik dengan Properti Ini?
        </h2>
        <a
          href="https://wa.me/6285231198475"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
        >
          Hubungi Kami via WhatsApp
        </a>
      </section>
    </div>
  );
};

PropertyDetail.propTypes = {};

export default PropertyDetail;
