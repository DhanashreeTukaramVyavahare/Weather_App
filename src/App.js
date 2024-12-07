import React, { useState } from "react";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  // Data for cities, villages, and weather in Maharashtra
  const cityDatabase = {
    mumbai: {
      villages: [
        { name: "Dharavi", weather: { temperature: 32, description: "Sunny" } },
        { name: "Colaba", weather: { temperature: 30, description: "Cloudy" } },
        { name: "Kurla", weather: { temperature: 31, description: "Humid" } },
        { name: "Borivali", weather: { temperature: 29, description: "Clear Sky" } },
      ],
    },
    pune: {
      villages: [
        { name: "Hinjewadi", weather: { temperature: 25, description: "Pleasant" } },
        { name: "Wakad", weather: { temperature: 26, description: "Partly Cloudy" } },
        { name: "Baner", weather: { temperature: 27, description: "Sunny" } },
        { name: "Hadapsar", weather: { temperature: 24, description: "Cool" } },
      ],
    },
    nagpur: {
      villages: [
        { name: "Katol", weather: { temperature: 33, description: "Hot" } },
        { name: "Kalmeshwar", weather: { temperature: 32, description: "Sunny" } },
        { name: "Parseoni", weather: { temperature: 31, description: "Clear Sky" } },
        { name: "Hingna", weather: { temperature: 30, description: "Humid" } },
      ],
    },
    nashik: {
      villages: [
        { name: "Sinnar", weather: { temperature: 22, description: "Cool and Cloudy" } },
        { name: "Igatpuri", weather: { temperature: 21, description: "Rainy" } },
        { name: "Trimbak", weather: { temperature: 20, description: "Foggy" } },
        { name: "Panchavati", weather: { temperature: 23, description: "Pleasant" } },
      ],
    },
    aurangabad: {
      villages: [
        { name: "Paithan", weather: { temperature: 28, description: "Clear Sky" } },
        { name: "Khuldabad", weather: { temperature: 27, description: "Sunny" } },
        { name: "Kannad", weather: { temperature: 29, description: "Partly Cloudy" } },
        { name: "Silod", weather: { temperature: 30, description: "Humid" } },
      ],
    },
  };

  // Get selected village weather
  const selectedVillageData =
    selectedCity && selectedVillage
      ? cityDatabase[selectedCity].villages.find(
          (village) => village.name === selectedVillage
        )
      : null;

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">City & Village Weather 🏙️</h1>
        {/* City Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select City:</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedVillage(""); // Reset village when city changes
            }}
          >
            <option value="">Select a city</option>
            {Object.keys(cityDatabase).map((city) => (
              <option key={city} value={city}>
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Village Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select Village:</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
            disabled={!selectedCity} // Disable if no city is selected
          >
            <option value="">Select a village</option>
            {selectedCity &&
              cityDatabase[selectedCity].villages.map((village) => (
                <option key={village.name} value={village.name}>
                  {village.name}
                </option>
              ))}
          </select>
        </div>

        {/* Display Selection */}
        {selectedCity && selectedVillageData && (
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold">Weather in {selectedVillageData.name}:</h2>
            <p className="text-gray-700">{selectedVillageData.weather.description}</p>
            <p className="text-3xl font-bold">
              {selectedVillageData.weather.temperature}°C
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
