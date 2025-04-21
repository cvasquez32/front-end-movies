import React from "react";

const CurrencyInput = ({ production_budget, setProductionBudget }) => {
  const handleChange = (e) => {
    const rawValue = e.target.value;
    const numericString = rawValue.replace(/[^\d.]/g, "");
    setProductionBudget(numericString);
  };

  const handleBlur = () => {
    const numberValue = parseFloat(production_budget);
    if (!isNaN(numberValue)) {
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(numberValue);
      setProductionBudget(formatted);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
        Production Cost
      </label>
      <input
        type="text"
        id="production_budget"
        name="Production Budget"
        placeholder="Enter Production Cost"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        value={production_budget}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
    </div>
  );
};

export default CurrencyInput;
