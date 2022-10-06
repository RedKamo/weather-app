import React from "react";
import Icon from "./Icon";
import EnterKey from "../assets/enkey.png";
import { DateTime } from "luxon";

const WeatherCard = ({ location, search, data, setLocation }) => {
  const dt = DateTime.now();
  return (
    <main className="container max-w-2xl font-syneFont grid grid-flow-row md:grid-flow-col gap-4 px-4 ">
      <section className="  backdrop-blur-md bg-cardBack/10 text-center min-h-max rounded-xl p-30 border-2 border-cardBack">
        <section className="px-4">
          <input
            className="w-full px-4 my-12 placeholder: text-placeColor placeholder:uppercase md:w-96  py-2 rounded-full outline-none"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
            onKeyPress={search}
          />
        </section>
        <article className="text-center flex flex-col items-center mt-2  ">
          {data.main ? (
            <>
              <p className="text-2xl	 md:text-4xl text-white ">
                {data.name},{data.sys.country}
              </p>
              <h2
                className={`text-7xl flex justify-center items-center p-4 ${
                  Math.round(data.main.temp) >= 20
                    ? "text-textHot"
                    : "text-textCold"
                }
                  `}
              >
                {Math.round(data.main.temp)}°C
              </h2>
              <section className="w-24 flex flex-col  justify-center pb-5 items-center text-white">
                <img className="" src={Icon(data.weather[0].main)} alt="" />
                <p className="  text-2xl -mt-2 ">{data.weather[0].main}</p>
              </section>
              <section className="backdrop-blur-sm  bg-cardTemp/50 border-y-2 border-cardBack flex flex-col md:flex-row gap-8 justify-around w-full p-4 text-white py-12 ">
                <article className=" ">
                  <span className="font-bold text-4xl">
                    {Math.round(data.main.temp_min)}°
                  </span>
                  <p className="">Min temp</p>
                </article>
                <article className="">
                  <span className="font-bold text-4xl">
                    {Math.round(data.main.feels_like)}°
                  </span>
                  <p>Feels like</p>
                </article>
                <article className="">
                  <span className="font-bold text-4xl">
                    {Math.round(data.main.temp_max)}°
                  </span>
                  <p>Max temp</p>
                </article>
              </section>
              <article className="w-full justify-center text-textDate flex text-3xl py-2">
                <p>{dt.toLocaleString(DateTime.DATE_MED)}</p>
              </article>
            </>
          ) : (
            <section className="flex flex-col items-center pb-12">
              <h1 className=" font-bold text-2xl flex justify-center items-center text-white">
                Search for a location
                <br />
                and press 'Enter'
              </h1>
              <img className="w-16" src={EnterKey} />
            </section>
          )}
        </article>
      </section>
    </main>
  );
};

export default WeatherCard;
