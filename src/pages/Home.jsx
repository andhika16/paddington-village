import { Link } from "react-router-dom";
import lantai1 from "../assets/webp rumah/1 Lantai/Picture5.webp";
import lantai2 from "../assets/webp rumah/2 lantai/2LantaiTipeA1.webp";
import { data } from "../assets/utils/data-icon";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat text-black py-36 text-center"
        style={{ backgroundImage: "url('/header_img_satu.svg')" }}
      >
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl text-left text-white md:text-5xl capitalize font-bold mb-4">
              paddington <span className="text-primary">Village</span>
            </h1>
            <p className="text-left text-white text-sm md:text-md mb-6 tracking-wider">
              rumah fabrikasi berukuran{" "}
              <span className="text-primary">minimalis</span> yang dirancang
              untuk efisiensi ruang dan biaya, untuk hunian yang ergonomis
              dengan lahan terbatas.
            </p>
            <div className="text-left">
              <Link
                to="/properties"
                className="bg-white  text-primary font-semibold py-2 px-6 rounded-lg  hover:bg-blue-100 transition"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-50 font-sans">
        <div className="container mx-auto px-4">
          {/* Judul */}
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Natural House
            </h3>
            <p className="text-lg text-gray-500 mt-3">
              Pilihan rumah alami dengan desain{" "}
              <span className="text-primary">modern</span> dan ramah{" "}
              <span className="text-primary">lingkungan</span>
            </p>
          </div>

          {/* Grid Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4">
            {/* Gambar besar (kiri, tinggi 2 baris di desktop) */}
            <div className="relative lg:col-span-2 lg:row-span-2">
              <img
                src={lantai1}
                alt="Model 1 Lantai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h4 className="text-xl font-bold text-white mb-1">
                  Model 1 Lantai
                </h4>
                <p className="text-sm text-white">
                  Desain rumah kubah alami dengan material ramah lingkungan.
                </p>
              </div>
            </div>

            {/* Gambar kecil atas kanan */}
            <div className="relative">
              <img
                src={lantai2}
                alt="Model 2 Lantai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h4 className="text-lg font-semibold text-white mb-1">
                  Model 2 Lantai
                </h4>
                <p className="text-sm text-white">Desain modern dan natural.</p>
              </div>
            </div>

            {/* Gambar kecil bawah kanan */}
            <div className="relative">
              <img
                src={lantai2}
                alt="Model 2 Lantai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h4 className="text-lg font-semibold text-white mb-1">
                  Model 2 Lantai
                </h4>
                <p className="text-sm text-white">Desain modern dan natural.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto bg-white py-5 sm:py-16 px-4">
        <div className=" mx-auto">
          <h2 className="text-xl md:text-2xl capitalize font-bold text-gray-800 mb-6">
            <span className="text-primary"> paddington </span> village
          </h2>
          <p className="text-gray-600 md:text-md leading-relaxed mb-3">
            <span className="font-semibold">paddington village</span> adalah
            pelopor solusi hunian modern di kawasan perkotaan padat,
            menghadirkan rumah kapsul pintar yang efisien, stylish, dan ramah
            lingkungan untuk generasi masa kini.
          </p>
          <p className="text-gray-600 md:text-md leading-relaxed mb-3">
            Kami mengembangkan konsep hunian mikro berteknologi tinggi yang
            dirancang khusus untuk kehidupan kota yang dinamis. Dengan desain
            modular dan penggunaan material prefab berkualitas tinggi,
            paddington village memaksimalkan fungsi dalam ruang terbatas tanpa
            mengorbankan kenyamanan.
          </p>
          <p className="text-gray-600 md:text-md leading-relaxed mb-8">
            Setiap unit rumah kapsul dilengkapi dengan sistem smart home,
            efisiensi energi, dan tata ruang modern yang mendukung gaya hidup
            minimalis dan mobilitas tinggi di kota besar.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 sm:text-base md:text-lg">
            <li className="border-b-2 pb-3">✅ Hemat ruang, penuh fungsi</li>
            <li className="border-b-2 pb-3">✅ komponen presisi tinggi</li>
            <li className="border-b-2 pb-3">✅ kabin senyap </li>
          </ul>

          <div className="mt-12">
            <Link
              to="/about"
              className="inline-block bg-black text-white px-6 py-3 uppercase tracking-wider font-semibold text-sm hover:bg-gray-800 transition"
            >
              Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('./paddingtongroup.svg')",
        }}
      >
        <div className="bg-black/60 py-32 px-4 sm:px-0">
          <div className="container mx-auto py-6 mt-6 text-white">
            <h2 className="text-xl font-bold text-center mb-6">
              PREFABRICATED HOUSE SPECIAL FEATURES
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 shadow-sm p-4 rounded flex flex-col items-center text-center text-black"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 mb-4"
                  />
                  <h3 className="font-semibold text-[9px] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
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
