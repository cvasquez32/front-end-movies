const DeleteItem = ({ id, title, production_budget, date, box_office }) => {
  const deleteOnClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/movie/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      window.location.reload();
      console.log("Movie Deleted", data);
    } catch (error) {
      console.error("Error, Deleting movie: ", error);
    }
  };

  const getDateOnly = (date) => {
    return date.split("T")[0];
  };

  const formatCurrency = (production_budget) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(production_budget);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col items-start">
        <span className="block text-md font-semibold text-gray-800">
          {title}
        </span>
        <span className="block text-sm text-gray-600">
          Release Date: {getDateOnly(date)}
        </span>
        <span className="block text-sm text-gray-600">
          Production Budget: {formatCurrency(production_budget)}
        </span>
        <span className="block text-sm text-gray-600">
          Box Office: {formatCurrency(box_office)}
        </span>
      </div>
      <button
        id={id}
        onClick={() => deleteOnClick(id)}
        className="w-6 h-6  bg-white text-black rounded hover:bg-red-200 transition-colors duration-200 leading-none text-center"
      >
        x
      </button>
    </div>
  );
};

export default DeleteItem;
