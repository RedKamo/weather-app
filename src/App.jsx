import axios from "axios";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import { API_URL, MY_KEY } from "./api";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `${API_URL}/weather?q=${location}&appid=${MY_KEY}&units=metric`;
  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  console.log(data);

  return (
    <main className="bg-background  bg-no-repeat bg-cover grid min-h-screen place-items-center font-syneFont">
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
