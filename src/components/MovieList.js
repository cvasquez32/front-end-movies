import { useState, useEffect } from "react";
import DeleteItem from "./DeleteItem";

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
      <ul className="list-none pl-6 space-y-2 text-center">
        {movie && movie.length > 0 ? (
          movie.map((data) => (
            <li
              key={data.id}
              className="text-sm text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              <DeleteItem
                id={data.movie_id}
                title={data.title}
                production_budget={data.production_budget}
                date={data.date}
                box_office={data.box_office}
                poster_url={data.poster_url}
              />
            </li>
          ))
        ) : (
          <div>No Movie records to display.</div>
        )}
      </ul>
    </div>
  );
}

export default List;
