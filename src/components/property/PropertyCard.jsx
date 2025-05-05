/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={property.gambar}
        alt={property.model}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold capitalize">{property.model}</h3>
        <p className="text-sm text-gray-600 mt-1">Tipe: {property.type}</p>
        <p className="text-sm text-gray-600">Dimensi: {property.dimensi}</p>
        <p className="text-sm text-gray-600">Ukuran: {property.size}</p>
        <p className="text-sm text-gray-600">
          Jumlah Penghuni: {property.jumlah_penghuni}
        </p>

        <div className="mt-2">
          <p className="text-sm text-gray-600 font-semibold">Kelengkapan:</p>
          {/* <ul className="list-disc list-inside text-sm text-gray-700">
            {property.kelengkapan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
          <p>{property.kelengkapan}</p>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
