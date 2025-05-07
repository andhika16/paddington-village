// components/FilterForm.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const SidebarProperty = ({ onFilter, modelOptions = [], typeOptions = [], sizeOptions = [] }) => {
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");

  const debouncedModel = useDebounce(model, 300);
  const debouncedType = useDebounce(type, 300);
  const debouncedSize = useDebounce(size, 300);

  useEffect(() => {
    onFilter({ model: debouncedModel, type: debouncedType, size: debouncedSize });
  }, [debouncedModel, debouncedType, debouncedSize, onFilter]);

  return (
    <div className="bg-white max-h-screen p-4 rounded-lg shadow-md flex flex-col gap-4">
      <select
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="border text-sm sm:text-md px-3 py-2 rounded-md w-full"
      >
        <option value="">Pilih Model</option>
        <option value="">Semua</option>
        {modelOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border text-sm sm:text-md px-3 py-2 rounded-md w-full"
      >
        <option value="">Pilih Tipe</option>
        {typeOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="border text-sm sm:text-md px-3 py-2 rounded-md w-full"
      >
        <option value="">Pilih Ukuran</option>
        {sizeOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

SidebarProperty.propTypes = {
  onFilter: PropTypes.func.isRequired,
  modelOptions: PropTypes.arrayOf(PropTypes.string),
  typeOptions: PropTypes.arrayOf(PropTypes.string),
  sizeOptions: PropTypes.arrayOf(PropTypes.string),
};

export default SidebarProperty;
