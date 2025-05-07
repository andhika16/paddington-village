import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white border border-gray-200 shadow hover:shadow-lg transition duration-300">
      <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={property.gambar}
          alt={property.model}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">
          Lantai {property.jumlahLantai} &middot; Model{" "}
          <span className="uppercase">{property.model}</span>
        </h3>

        <p className="text-xs text-gray-600 mt-1">Tipe: {property.type}</p>
        <p className="text-xs text-gray-600 mt-1">Dimensi: {property.dimensi}</p>

        <Link
          to={`/properties/${property.id}`}
          className="inline-block text-sm mt-3 text-primary font-medium hover:underline"
        >
          detail
        </Link>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gambar: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    jumlahLantai: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    dimensi: PropTypes.string,
  }).isRequired,
};

export default PropertyCard;
