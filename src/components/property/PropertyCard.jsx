import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="shadow-md hover:shadow-lg transition duration-300">
      <Link
        to={`/properties/${property.id}`}
        className="inline-block text-sm mt-3 "
      >
        <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src={property.gambar}
            alt={property.model}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="sm:p-4">
          <h3 className="text-sm sm:text-lg font-bold ">
            Model {property.model} &middot; Lantai {property.jumlahLantai}
            <span className="uppercase"></span>
          </h3>
          <div className="sm:block hidden ">
            <p className="text-xs text-gray-600 mt-1">Tipe: {property.type}</p>
            <p className="text-xs text-gray-600 mt-1">
              Dimensi: {property.dimensi}
            </p>
          </div>
        </div>
      </Link>
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
