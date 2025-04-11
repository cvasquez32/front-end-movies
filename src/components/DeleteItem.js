const DeleteItem = ({ id, title, production_budget }) => {
  const deleteOnClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/movie/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      window.location.reload()
      console.log("Movie Deleted", data);
    } catch (error) {
      console.error("Error, Deleting movie: ", error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-200">
      <div>
        <span className="text-md font-semibold text-gray-800">
          {title} {id}{" "}
        </span>
        <span className="text-sm text-gray-600 ml-2">
          | {production_budget}
        </span>
      </div>
      <button
        id={id}
        onClick={() => deleteOnClick(id)}
        className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
      >
        x
      </button>
    </div>
  );
};

export default DeleteItem;
