import React from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

export default function App() {
 return (
  <div className="grid place-items-center h-screen mx-auto max-w-3xl">
   <Header />
   <WeatherBoard />
  </div>
 );
}
