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
      // Step 1: Wake Render backend (Render sleeps when inactive)
      await fetch("https://weather-app-38bh.onrender.com/healthz");

      // Step 2: Fetch actual weather data
      const response = await fetch(`https://weather-app-38bh.onrender.com/weather?city=${encodeURIComponent(city)}`);


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
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          backgroundColor: "#008CFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Get Weather
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "20px", fontSize: "18px" }}>
          {error}
        </p>
      )}

      {data && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <h2>{data.name}</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Condition: {data.weather[0].description}</p>
        </div>
      )}

      <p style={{ marginTop: "40px", color: "gray" }}>
        Data from OpenWeatherMap · Built with React & Express
      </p>
    </div>
  );
}



