import React, { useEffect, useState } from "react";

export const Card = async () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_SECRET_KEY;
    const apiUrl = "https://api.api-ninjas.com/v1/planets?name=Mars";

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
        console.log(data);

        // setData(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setError(error);
        // setLoading(false);
      });
  }, []);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {/* <h1>Planets Data</h1>
      {data.map((planet, index) => (
        <div key={index}>
          <h2>{planet}</h2>
          <p>Mass: {planet}</p>
          <p>Radius: {planet}</p>
          <p>Distance from Sun: {planet}</p>
        </div>
      ))} */}
    </div>
  );
};
