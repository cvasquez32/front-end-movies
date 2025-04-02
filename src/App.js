import { useState, useEffect } from "react";
import "./App.css";

function App() {
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
      <h1 className="text-3xl font-bold underline text-center p-4">Movies</h1>
      <div className="flex justify-center">
        <ol className="list-decimal pl-6 space-y-2 text-center">
          {movie.map((data) => {
            return (
              <li
                key={data.id}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
              >
                {data.title}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
