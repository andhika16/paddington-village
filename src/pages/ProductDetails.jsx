import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHouses } from "../firebase/firebase-operations";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const all = await getHouses();
        const found = all.find((item) => item.id === id || item.model === id);
        if (!found) throw new Error("Produk tidak ditemukan");
        setProduct(found);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto px-6">
      {/* Hero Gambar */}
      <section className="py-6">
        <div className="">
          <div className="lg:flex md:flex-row flex-col sm:space-x-6 ">
            <img
              src={product.gambar}
              alt={product.type}
              className="w-full sm:w-[500px] object-contain  mb-6 sm:mb-0"
            />
            <div className="sm:w-1/2">
              <h2 className="text-3xl font-bold mb-4 capitalize border-b-2  pb-6">
                {product.type} - {product.model}
              </h2>
              <p className="text-sm text-gray-900 leading-relaxed">
                Rumah {product.model} tipe {product.type} dengan luas{" "}
                {product.size} Meter , konstruksi {product.areaKonstruksi}{" "}
                Meter.
              </p>
              <ul className="flex flex-col space-y-6 mt-6">
                <li>
                  <h6>Konfigurasi Standard</h6>{" "}
                  <p className="text-xs text-gray-700 leading-loose tracking-wide">
                    finishing, mekanisme tirai, insulasi termal, tahan air,
                    perlindungan terhadap angin, kunci pintar, pencahayaan dalam
                    dan luar ruangan, instalasi listrik, saluran pembuangan,
                    pengolahan air.
                  </p>
                </li>
                <li>
                  <h6>Konfigurasi Kostum</h6>
                  <p className="text-xs text-gray-700 leading-loose tracking-wide">
                    Dapur (kompor induksi, lemari bawah dan atas, wastafel, meja
                    batu buatan), Kamar mandi (toilet, wastafel, cermin pintar,
                    lemari wastafel), Sofa, meja kopi, lemari TV, tempat tidur
                    ganda, meja samping tempat tidur, kulkas, TV.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Properti */}
      <section className="py-6 bg-white">
        <div className=" space-y-6 ">
          <div>
            <h3 className="text-xl font-semibold mb-4">Spesifikasi</h3>
            <ul className="space-y-3 text-sm sm:text-md text-gray-700">
              <li>
                <strong>Luas:</strong> {product.size} Meter
              </li>
              <li>
                <strong>Area Konstruksi:</strong> {product.areaKonstruksi}
              </li>
              <li>
                <strong>Jumlah Penghuni:</strong> {product.jumlahPenghuni}
              </li>
              <li>
                <strong>Dimensi:</strong> {product.dimensi}
              </li>
              <li>
                <strong>Jumlah Lantai:</strong> {product.jumlahLantai}
              </li>
              <li>
                <strong>Berat Unit:</strong> {product.beratUnit}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kelengkapan</h3>
            {Array.isArray(product.kelengkapan) &&
            product.kelengkapan.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700">
                {product.kelengkapan.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Data kelengkapan tidak tersedia.</p>
            )}
          </div>
        </div>
      </section>
        {/* TODO:ini nanti bisa ditambahkan detail-detail lagi lebih lengkap */}
      <section>
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

export default ProductDetail;
