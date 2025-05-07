import React from "react";

const SectionTipeRumah = () => {
  return (
    <div className="relative  overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <img
        src={lantai2}
        alt="Model Double"
        className="w-full  object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h4 className="text-2xl font-bold text-white mb-2">Model 2 Lantai</h4>
        <p className="text-sm text-white">
          Konsep rumah ganda dengan desain modern dan natural.
        </p>
      </div>
    </div>
  );
};

export default SectionTipeRumah;
