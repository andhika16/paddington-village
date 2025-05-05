/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{property.title}</h3>
        <p className="text-sm text-gray-600 mt-2">
          Lokasi strategis, desain minimalis, cocok untuk keluarga.
        </p>
        <p className="text-lg font-bold mt-4">Rp. {property.price.toLocaleString()}</p>
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
