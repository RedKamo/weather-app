import Drizzle from "../assets/drizzle.png";
import Rain from "../assets/rain.png";
import Sunny from "../assets/sunny.png";
import Snow from "../assets/snow.png";
import Cloudy from "../assets/cloudy.png";
import Thunderstorm from "../assets/thunderstorm.png";
import Windy from "../assets/windy.png";

const icons = [Drizzle, Rain, Snow, Windy, Sunny, Cloudy, Thunderstorm];

const Icon = (weather) => {
  switch (weather) {
    case "Drizzle":
      return icons[0];
      break;
    case "Rain":
      return icons[1];
      break;
    case "Snow":
      return icons[2];
      break;
    case "Atmosphere":
      return icons[3];
      break;
    case "Clear":
      return icons[4];
      break;
    case "Clouds":
      return icons[5];
      break;
    case "Thunderstorm":
      return icons[6];
      break;
    default:
      return icons[0];
  }
};

export default Icon;
