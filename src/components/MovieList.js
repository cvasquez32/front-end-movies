import { useState, useEffect } from "react";

function List() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:3001/api/v1/movie/")
      ).json();

      setMovie(data);
    };

    dataFetch();
  }, []);
  return (
    <div>
      <ol className="list-decimal pl-6 space-y-2 text-center">
        {movie.map((data) => (
          <li
            key={data.id}
            className="text-sm text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            {data.title} | {data.production_budget}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default List;
