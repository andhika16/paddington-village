import { db } from "./firebase-config"; // pastikan file ini mengarah ke konfigurasi firebase kamu
import { collection, addDoc } from "firebase/firestore";

const dummyHouses = [
  {
    type: "capsul house",
    model: "Model E8",
    size: "120m²",
    area_konstruksi: "100m²",
    jumlah_penghuni: 4,
    dimensi: "10x12m",
    berat_unit: "3 ton",
    kelengkapan: ["AC", "Furnished", "Garasi"],
    gambar: "https://dummyimage.com/720x600/000/fff&text=capsul+Model+E8",
  },
  {
    type: "cabin house",
    model: "Model A1",
    size: "120m²",
    area_konstruksi: "100m²",
    jumlah_penghuni: 4,
    dimensi: "10x15m",
    berat_unit: "5 ton",
    kelengkapan: ["AC", "Furnished", "Garasi"],
    gambar: "https://dummyimage.com/720x600/000/fff&text=cabin+Modern+A1",
  },
  {
    type: "natural house",
    model: "Model A2",
    size: "120m²",
    area_konstruksi: "100m²",
    jumlah_penghuni: 4,
    dimensi: "10x12m",
    berat_unit: "3 ton",
    kelengkapan: ["AC", "Furnished", "Garasi"],
    gambar: "https://dummyimage.com/720x600/000/fff&text=nnatural+Modern+A2",
  },
  {
    type: "natural house",
    model: "Model N8",
    size: "120m²",
    area_konstruksi: "100m²",
    jumlah_penghuni: 4,
    dimensi: "10x12m",
    berat_unit: "4 ton",
    kelengkapan: ["AC", "Furnished", "Garasi",],
    gambar: "https://dummyimage.com/720x600/000/fff&text=natural+Modern+N8",
  },
];
const seedHouses = async () => {
  try {
    const housesRef = collection(db, "property");

    for (const house of dummyHouses) {
      await addDoc(housesRef, house);
    }

    console.log("Dummy houses added successfully!");
  } catch (error) {
    console.error("Error seeding houses:", error);
  }
};
export default seedHouses;
