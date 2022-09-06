import axios from "axios";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b10d31ee3d52af231d37e9960a5f899c&units=metric`;

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <main className="bg-background  bg-no-repeat bg-cover grid min-h-screen place-items-center">
      <WeatherCard
        search={search}
        location={location}
        data={data}
        setLocation={setLocation}
      />
    </main>
  );
}

export default App;
