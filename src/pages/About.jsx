import paddington from "../assets/assetbawaan/about_bg.webp";
const About = () => {
  // FIXME:perbaiki lagi ukuran gambar,text,layout dll untuk about
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={paddington}
          alt="image-depan"
          className="w-full h-[420px] object-cover opacity-"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 max-w-3xl ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
          Rumah Kapsul: Hunian Masa Depan
        </h2>

        <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
          <strong>
            Kami adalah pelopor inovasi hunian masa depan – Rumah Kapsul.
          </strong>
        </p>

        <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
          Terinspirasi oleh efisiensi, keberlanjutan, dan desain futuristik,
          kami menghadirkan solusi tempat tinggal yang{" "}
          <strong>ringkas, fungsional, dan ramah lingkungan</strong>. Rumah
          Kapsul adalah representasi gaya hidup{" "}
          <strong>minimalis, cerdas, dan fleksibel</strong>.
        </p>

        <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
          Didirikan dengan semangat untuk menjawab tantangan ruang dan
          urbanisasi, kami mengembangkan unit hunian yang dapat{" "}
          <strong>dirakit cepat, hemat energi, dan mudah dipindah</strong> —
          cocok untuk kaum urban, traveler, pekerja proyek, hingga solusi hunian
          darurat.
        </p>

        <p className="text-white text-sm sm:text-base leading-relaxed mb-6">
          Kami percaya bahwa masa depan adalah tentang{" "}
          <strong>kehidupan berkualitas dalam ruang yang efisien.</strong>
        </p>

        <p className="text-sm sm:text-base text-blue-700 font-semibold">
          Hubungi Tim Kami →
        </p>
      </div>
    </section>
  );
};

export default About;
