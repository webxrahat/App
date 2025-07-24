import { useState } from "react";

export default function useWeather() {
 const [weatherData, setWeatherData] = useState({
  location: "",
  climate: "",
  temperature: "",
  maxTemperature: "",
  minTemperature: "",
  humidity: "",
  cloudPercentage: "",
  wind: "",
  time: "",
  longitude: "",
  latitude: "",
 });

 const [loading, setLoading] = useState({
  state: false,
  message: "",
 });

 const [error, setError] = useState(null);

 const fetchData = async (latitude, longitude) => {
  try {
   setLoading({
    ...loading,
    state: true,
    message: "Fetching weather Data",
   });
  } catch (error) {}
 };
}
