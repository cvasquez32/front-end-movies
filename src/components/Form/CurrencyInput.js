import React from "react";

const CurrencyInput = ({ parameter, setParameter, name, id, placeholder }) => {
  const handleChange = (e) => {
    const rawValue = e.target.value;
    const numericString = rawValue.replace(/[^\d.]/g, "");
    setParameter(numericString);
  };

  const handleBlur = () => {
    const numberValue = parseFloat(parameter);
    if (!isNaN(numberValue)) {
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(numberValue);
      setParameter(formatted);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
        {name}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        value={parameter}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
    </div>
  );
};

export default CurrencyInput;
