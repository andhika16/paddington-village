import { Link } from "react-router-dom";
import lantai1 from "../assets/webp rumah/1 Lantai/Picture5.webp";
import lantai2 from "../assets/webp rumah/2 lantai/2LantaiTipeA1.webp";
import denah1 from "../assets/webp rumah/rumah_denah_satu.svg";
import denah2 from "../assets/webp rumah/rumah_denah_dua.svg";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center  bg-fixed bg-no-repeat text-black py-16 text-center"
        style={{ backgroundImage: "url('/header_img_satu.svg')" }}
      >
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl text-left text-white md:text-6xl capitalize font-bold mb-4">
              paddington <span className="text-primary">Village</span>
            </h1>
            <p className="text-left text-white text-sm md:text-xl mb-6">
              rumah fabrikasi berukuran{" "}
              <span className="text-primary">minimalis</span> yang dirancang
              untuk efisiensi ruang dan biaya, cocok untuk kehidupan di kota
              besar dengan lahan terbatas.
            </p>
            <div className="text-left">
              <Link
                to="/properties"
                className="bg-white  text-primary font-semibold py-2 px-6 rounded-lg  hover:bg-blue-100 transition"
              >
                Lihat Properti
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 font-sans">
        <div className="container mx-auto px-4">
          {/* Judul */}
          <div className="mb-14 text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">
              Natural House
            </h3>
            <p className="text-lg text-gray-500 mt-3">
              Pilihan rumah alami dengan desain{" "}
              <span className="text-primary">modern</span> dan ramah{" "}
              <span className="text-primary">lingkungan</span>
            </p>
          </div>

          {/* Grid Card */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="relative  overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <img
                src={lantai1}
                alt="Dome House"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Model 1 Lantai
                </h4>
                <p className="text-sm text-white">
                  Desain rumah kubah alami dengan material ramah lingkungan.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative  overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <img
                src={lantai2}
                alt="Model Double"
                className="w-full  object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Model 2 Lantai
                </h4>
                <p className="text-sm text-white">
                  Konsep rumah ganda dengan desain modern dan natural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="y-10 px-4 md:px-10 bg-gray-50 space-y-12">
        {/* Rumah Lantai 2 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="mx-2 space-y-2">
            <h2 className="text-xl md:text-1xl font-bold text-gray-800">
              Desain Rumah Lantai 2
            </h2>
            <p className="text-gray-600 text-sm sm:text-md tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              dolores.
            </p>
          </div>
          <div className="">
            <img
              src={denah1}
              alt="rumahdenahsatu.svg"
              className="rounded-xl shadow-md w-full"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6">
          <div className="">
            <img src={denah2} alt="rumahdenahdua.svg" className="  w-full" />
          </div>
          <div className=" space-y-2">
            <h2 className="text-xl md:text-1xl font-bold text-gray-800">
              Desain Rumah Lantai 1
            </h2>
            <p className="text-gray-600 text-sm sm:text-md tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
              inventore.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Siap Memiliki Rumah Idaman?</h2>
        <p className="text-gray-700 mb-6">
          Hubungi kami sekarang dan jadwalkan kunjungan!
        </p>
        <Link
          to="/contact"
          className="bg-primary text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
        >
          Hubungi Kami
        </Link>
      </section>
    </div>
  );
};

export default Home;
