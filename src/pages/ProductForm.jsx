import { useState } from "react";
import PropTypes from "prop-types";
import { createHouse } from "../firebase/firebase-operations";

// Reusable Input component for form fields
const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  required = true,
}) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      required={required}
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

const HouseForm = () => {
  const [type, setType] = useState("");
  const [jumlahLantai, setJumlahLantai] = useState("");
  const [model, setModel] = useState("");
  const [size, setSize] = useState("");
  const [areaKonstruksi, setAreaKonstruksi] = useState("");
  const [jumlahPenghuni, setJumlahPenghuni] = useState("");
  const [dimensi, setDimensi] = useState("");
  const [beratUnit, setBeratUnit] = useState("");
  const [kelengkapan, setKelengkapan] = useState([]);
  const [gambar, setGambar] = useState(null);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ Tambahan

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setGambar(file);
  };

  const validateForm = () => {
    if (
      !type ||
      !jumlahLantai ||
      !model ||
      !size ||
      !areaKonstruksi ||
      !jumlahPenghuni ||
      !dimensi ||
      !beratUnit ||
      !gambar
    ) {
      setError("Semua field harus diisi dan gambar harus dipilih!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateForm()) return;

    setIsSubmitting(true); // ✅ Mulai proses

    const namaFile = `../../../public/image/${gambar.name}`;

    const dataRumah = {
      type,
      jumlahLantai,
      model,
      size,
      areaKonstruksi,
      jumlahPenghuni: parseInt(jumlahPenghuni),
      dimensi,
      beratUnit,
      kelengkapan,
      gambar: namaFile,
    };

    try {
      const newId = await createHouse(dataRumah);
      if (newId) {
        setSuccess("Data rumah berhasil disimpan dengan ID: " + newId);
        // Reset form
        setType("");
        setJumlahLantai("");
        setModel("");
        setSize("");
        setAreaKonstruksi("");
        setJumlahPenghuni("");
        setDimensi("");
        setBeratUnit("");
        setKelengkapan([]);
        setGambar(null);
      } else {
        setError("Gagal menyimpan data rumah");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat menyimpan data", err);
    } finally {
      setIsSubmitting(false); // ✅ Akhiri proses
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Input Rumah Baru
        </h2>

        <InputField
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <InputField
          label="Jumlah Lantai"
          value={jumlahLantai}
          onChange={(e) => setJumlahLantai(e.target.value)}
        />
        <InputField
          label="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <InputField
          label="Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <InputField
          label="Area Konstruksi"
          value={areaKonstruksi}
          onChange={(e) => setAreaKonstruksi(e.target.value)}
        />
        <InputField
          label="Jumlah Penghuni"
          value={jumlahPenghuni}
          onChange={(e) => setJumlahPenghuni(e.target.value)}
          type="number"
        />
        <InputField
          label="Dimensi"
          value={dimensi}
          onChange={(e) => setDimensi(e.target.value)}
        />
        <InputField
          label="Berat Unit"
          value={beratUnit}
          onChange={(e) => setBeratUnit(e.target.value)}
        />

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Kelengkapan
          </label>
          <div className="space-y-2">
            {["AC", "Furnished", "Garasi"].map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={item}
                  checked={kelengkapan.includes(item)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKelengkapan([...kelengkapan, item]);
                    } else {
                      setKelengkapan(kelengkapan.filter((val) => val !== item));
                    }
                  }}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
          </div>
        </div>
        {/* tambahkan bagian upload gambar denah
         */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Pilih Gambar
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {error && <p className="text-red-600 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-lg transition 
    ${
      isSubmitting
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 text-white"
    }`}
        >
          {isSubmitting ? "Menyimpan..." : "Simpan Data"}
        </button>
      </form>
    </div>
  );
};

export default HouseForm;
