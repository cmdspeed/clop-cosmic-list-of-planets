import React, { useState } from "react";

export const Planet = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!query) {
      alert("Enter the name of the planet!");
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    const apiKey = process.env.REACT_APP_API_SECRET_KEY;
    const apiUrl = `https://api.api-ninjas.com/v1/planets?name=${query}`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          throw new Error("Planet not found");
        }
        console.log(data);

        setData(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="text-center pt-12">
      <input
        type="text"
        placeholder="Enter the name of the planet (e.g. Earth)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="p-3 text-base w-80 text-black"
      />
      <button
        onClick={handleSearch}
        className="py-3 px-5 text-base ml-3 cursor-pointer bg-slate-400 rounded hover:opacity-80"
      >
        Search
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {data && (
        <div className="mt-5">
          <h2 className=" font-bold text-xl">{data.name}</h2>
          <p>Mass: {data.mass} kg</p>
          <p>Radius: {data.radius} km</p>
          <p>temperature: {data.temperature} K</p>
        </div>
      )}
    </div>
  );
};
