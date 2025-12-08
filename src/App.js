const handleSearch = async () => {
  if (!city.trim()) {
    setError("Please enter a city name");
    return;
  }

  setError("");
  setData(null);

  try {
    // Step 1: Wake up Render backend (important for free Render)
    await fetch("https://weather-app-38bh.onrender.com/healthz");

    // Step 2: Fetch real weather data
    const response = await fetch(
      `https://weather-app-38bh.onrender.com/weather?city=${encodeURIComponent(city)}`
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


