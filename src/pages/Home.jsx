import { Link } from "react-router-dom";
import data from "../assets/webp rumah/2 lantai/data";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
      className="bg-cover bg-center  bg-fixed bg-no-repeat text-black py-16 text-center"
      style={{ backgroundImage: "url('/header_img_satu.svg')" }}
    >
      <div className=" py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-left text-white md:text-6xl capitalize font-bold mb-4">
            paddington village  
          </h1>
          <p className="text-left text-white text-sm md:text-xl mb-6">
          Rumah kapsul adalah hunian mandiri berukuran minimalis yang dirancang untuk efisiensi ruang dan biaya, cocok untuk kehidupan di kota besar dengan lahan terbatas.
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
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          {/* Natural House Subsection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">
              Natural House
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              {/* Dome House Card */}
              <div className="bg-white rounded-sm overflow-hidden transition-transform transform hover:-translate-y-1">
                <img
                  src={data[1].image} // Ganti dengan path gambar yang sesuai
                  alt="Dome House"
                  className="w-full h-70 object-cover"
                />
                <div className="p-0">
                  <h3 className="text-lg font-semibold text-gray-800">
                    1 Lantai
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Desain rumah kubah alami dengan material ramah lingkungan.
                  </p>
                </div>
              </div>

              {/* Model Double Card */}
              <div className="bg-white rounded-sm overflow-hidden transition-transform transform hover:-translate-y-1">
                <img
                  src={data[4].image} // Ganti dengan path gambar yang sesuai
                  alt="Model Double"
                  className="w-full h-70 object-cover"
                />
                <div className="p-0">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Model Double
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Konsep rumah ganda dengan desain modern dan natural.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Siap Memiliki Rumah Idaman?</h2>
        <p className="text-gray-700 mb-6">
          Hubungi kami sekarang dan jadwalkan kunjungan!
        </p>
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
