import { useState } from "react";
import CurrencyInput from "./Form/CurrencyInput";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [production_budget, setProductionBudget] = useState("");
  const [box_office, setBoxOffice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movieData = { title, date, production_budget, box_office };

    try {
      const response = await fetch("http://localhost:3001/api/v1/movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      window.location.reload();
      console.log("Movie Created", data);
    } catch (error) {
      console.error("Error, creating movie: ", error);
    }
  };

  return (
    <form
      className="max-w-sm mx-auto p-6 bg-white shadow rounded"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Movie Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter movie title"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <CurrencyInput
        parameter={production_budget}
        setParameter={setProductionBudget}
        name="Production Cost"
        id="production_budget"
        placeholder="Production Cost"
      />
      <CurrencyInput
        parameter={box_office}
        setParameter={setBoxOffice}
        name="Box Office"
        id="box_office"
        placeholder="Box Office"
      />
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-gray-700 font-semibold mb-2"
        >
          Release Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default MovieForm;
