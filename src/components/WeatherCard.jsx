import React from "react";
import Icon from "./Icon";
import EnterKey from "../assets/enkey.png";

const WeatherCard = ({ location, search, data, setLocation }) => {
  return (
    <main className="container max-w-2xl font-poppins grid grid-flow-row md:grid-flow-col gap-4 px-4 text-textColor ">
      <section className="text-center bg-grad  text-cyan-50  min-h-max rounded-lg p-30 ">
        <input
          className=" my-12 placeholder: text-placeColor placeholder:uppercase w-96 px-5 py-2 rounded-xl outline-none"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          onKeyPress={search}
        />
        <article className="text-center flex flex-col items-center mt-2 ">
          {data.main ? (
            <>
              <p className="text-4xl text-boxes ">
                {data.name},{data.sys.country}
              </p>
              <h2
                className={`text-7xl backdrop-blur-md border-x-red-400 flex justify-center items-center p-4 ${
                  Math.round(data.main.temp) >= 20
                    ? "text-textHot"
                    : "text-textCold"
                }
                  `}
              >
                {Math.round(data.main.temp)}°C
              </h2>
              <section className="w-24 flex flex-col  justify-center pb-5">
                <img className="" src={Icon(data.weather[0].main)} alt="" />
                <p className="  text-boxes text-2xl -mt-2 ">
                  {data.weather[0].main}
                </p>
              </section>
              <section className=" flex justify-around w-full p-4 text-boxes">
                <article className="">
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
            </>
          ) : (
            <section className="flex  items-center pb-24">
              <h1 className=" text-slate-500 font-bold text-2xl flex justify-center items-center  text-boxes">
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
