import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
      className="bg-cover bg-center bg-no-repeat text-black py-20 text-center"
      style={{ backgroundImage: "url('/header_img.webp')" }}
    >
      <div className=" py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl capitalize font-bold mb-4">
            paddington village  
          </h1>
          <p className="text-lg md:text-xl mb-6">
          Rumah kapsul adalah hunian mandiri berukuran minimalis yang dirancang untuk efisiensi ruang dan biaya, cocok untuk kehidupan di kota besar dengan lahan terbatas. Dibangun dengan sistem prefabrikasi yang cepat dan modular, rumah ini mudah disesuaikan dengan kebutuhan, menawarkan solusi hidup yang praktis, terjangkau, dan fleksibel.
          </p>
          <Link
            to="/properties"
            className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition"
          >
            Lihat Properti
          </Link>
        </div>
      </div>
    </section>

      {/* Properti Unggulan */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Properti Unggulan</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={`https://dummyimage.com/720x600/000/fff&text=Rumah+Modern+${id}`}
                  alt="Properti"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Rumah Modern #{id}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Lokasi strategis, desain minimalis, cocok untuk keluarga.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Siap Memiliki Rumah Idaman?</h2>
        <p className="text-gray-700 mb-6">Hubungi kami sekarang dan jadwalkan kunjungan!</p>
        <Link
          to="/contact"
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
        >
          Hubungi Kami
        </Link>
      </section>
    </div>
  );
};

export default Home;
