import { useState, useEffect } from "react";
import List from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline text-center p-4 mb-8">
        Movies
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="w-full md:w-1/2">
          <MovieForm />
        </div>
        <div className="w-full md:w-1/2">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
