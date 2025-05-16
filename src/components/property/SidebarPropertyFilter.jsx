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

const SidebarProperty = ({
  onFilter,
  modelOptions = [],
  typeOptions = [],
  sizeOptions = [],
}) => {
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");

  const debouncedModel = useDebounce(model, 300);
  const debouncedType = useDebounce(type, 300);
  const debouncedSize = useDebounce(size, 300);

  useEffect(() => {
    onFilter({
      model: debouncedModel,
      type: debouncedType,
      size: debouncedSize,
    });
  }, [debouncedModel, debouncedType, debouncedSize, onFilter]);

  return (
    <div className=" bg-white max-h-screen p-4 rounded-lg shadow-md flex flex-col gap-4">
      <div className="space-y-2">
        <p className="font-medium text-sm sm:text-md">Pilih Tipe:</p>
        <ul className="flex flex-wrap gap-2">
          <li>
            <button
              onClick={() => setType("")}
              className={`px-3 py-1 rounded-md border text-sm sm:text-md ${
                type === "" ? "bg-blue-500 text-white" : "bg-white text-black"
              }`}
            >
              Semua
            </button>
          </li>
          {typeOptions.map((opt) => (
            <li key={opt}>
              <button
                onClick={() => setType(opt)}
                className={`px-3 py-1 rounded-md border text-sm sm:text-md ${
                  type === opt
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <select
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="border text-sm sm:text-md px-3 py-2 rounded-md w-full"
      >
        <option value="">Pilih Model</option>
        <option value="">Semua</option>
        {modelOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="border text-sm sm:text-md px-3 py-2 rounded-md w-full"
      >
        <option value="">Pilih Ukuran</option>
        <option value="">Semua</option>
        {sizeOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
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
