import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

const handleSearch = async () => {
  if (!city.trim()) {
    setError("Please enter a city name");
    return;
  }

  setError("");
  setData(null);

  try {
    // Wake backend (correct endpoint)
    await fetch("https://weather-app-38bh.onrender.com/health");


    // Fetch weather
   const response = await fetch(
  `https://weather-app-38bh.onrender.com/weather?city=${encodeURIComponent(
    city
  )}`
);


    if (!response.ok) {
      throw new Error("City not found or server error.");
    }

    const result = await response.json();
    setData(result);
  } catch (err) {
    setError(err.message);
  }
};



  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "260px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0099ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Weather
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <pre
          style={{
            textAlign: "left",
            background: "#f0f0f0",
            padding: "20px",
            width: "60%",
            margin: "20px auto",
            borderRadius: "8px",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <p style={{ marginTop: "20px" }}>
        Data from OpenWeatherMap • Built with React & Express
      </p>
    </div>
  );
}




