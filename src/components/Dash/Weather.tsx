import { MapPinIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

type location = {
  name: string;
  country: string;
};

type weather = {
  location: location;
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};
export default function Weather() {
  const [weather, setWeather] = useState<weather>()
  const fetchCurrentWeather = () => {
    const apiKey = "c4a938ce56b04d8198f71530251211";

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Fetch weather using the correct coords
        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`
          );
          const data = await res.json();
          console.log(data);
          setWeather(data); // update your state
        } catch (err) {
          console.error("Fetch weather error:", err);
        }
      },
      (err) => {
        console.error("Geolocation error:", err.message);
      }
    );
  };
  useEffect(() => fetchCurrentWeather(), []);
  return (
    <div className="text-white rounded-2xl backdrop-blur-lg bg-white/20 p-4 text-center md:w-1/3 lg:1/3 justify-self-end">
      <h1 className="text-6xl font-bold">
        {weather? weather?.current.temp_c + "°C" : "5°C"}
      </h1>
      <span className="flex flex-row items-center justify-center mt-1 mr-1">
        <MapPinIcon className="w-5 h-5" />
        {weather
          ? weather?.location.name + ", " + weather?.location.country
          : "Antananarivo, Madagascar"}
      </span>
    </div>
  );
}
