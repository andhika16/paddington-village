/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { createHouse, updateHouse } from "./firebaseOperations"; // Pastikan fungsi sudah ada

const HouseForm = ({ houseToUpdate, setHouseToUpdate }) => {
  const [houseData, setHouseData] = useState({
    type: "",
    model: "",
    size: "",
    area_construction: "",
    jumlah_penghuni: "",
    dimensi: { panjang: "", lebar: "" },
    berat_unit: "",
    kelengkapan: "",
    gambar: "",
  });

  useEffect(() => {
    if (houseToUpdate) {
      setHouseData(houseToUpdate);
    }
  }, [houseToUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "panjang" || name === "lebar") {
      setHouseData({
        ...houseData,
        dimensi: {
          ...houseData.dimensi,
          [name]: value,
        },
      });
    } else if (name === "kelengkapan") {
      setHouseData({
        ...houseData,
        kelengkapan: value.split(","),
      });
    } else {
      setHouseData({
        ...houseData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (houseToUpdate) {
      // Update the existing house data
      await updateHouse(houseToUpdate.id, houseData);
    } else {
      // Create a new house
      await createHouse(houseData);
    }

    // Reset form after submit
    setHouseData({
      type: "",
      model: "",
      size: "",
      area_construction: "",
      jumlah_penghuni: "",
      dimensi: { panjang: "", lebar: "" },
      berat_unit: "",
      kelengkapan: "",
      gambar: "",
    });

    setHouseToUpdate(null); // Clear update mode
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 border rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-2xl mb-4 font-semibold">
        {houseToUpdate ? "Update House" : "Create House"}
      </h2>

      {/* Input Fields */}
      <div className="mb-4">
        <label className="block text-gray-700">Type:</label>
        <input
          type="text"
          name="type"
          value={houseData.type}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Model:</label>
        <input
          type="text"
          name="model"
          value={houseData.model}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Size (m²):</label>
        <input
          type="text"
          name="size"
          value={houseData.size}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Area Construction (m²):</label>
        <input
          type="text"
          name="area_construction"
          value={houseData.area_construction}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Jumlah Penghuni:</label>
        <input
          type="number"
          name="jumlah_penghuni"
          value={houseData.jumlah_penghuni}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Dimensi Panjang (m):</label>
        <input
          type="text"
          name="panjang"
          value={houseData.dimensi.panjang}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Dimensi Lebar (m):</label>
        <input
          type="text"
          name="lebar"
          value={houseData.dimensi.lebar}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Berat Unit (kg):</label>
        <input
          type="text"
          name="berat_unit"
          value={houseData.berat_unit}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Kelengkapan:</label>
        <input
          type="text"
          name="kelengkapan"
          value={houseData.kelengkapan.join(",")}
          onChange={handleChange}
          placeholder="Pisahkan dengan koma"
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Gambar URL:</label>
        <input
          type="text"
          name="gambar"
          value={houseData.gambar}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        {houseToUpdate ? "Update House" : "Create House"}
      </button>
    </form>
  );
};

export default HouseForm;
