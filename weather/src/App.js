import { useState } from "react";
import Icon from "./Icon";
import Output from "./output";
import Weekly from "./Weekly"


function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");

  const apikey = "36f5be7080edceda7c4a77a17dbf553a";
  const weekurl=`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apikey}&units=metric`

  const onSearch = (event) => {
    if (event.key === "Enter") {
      fetch(weekurl)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setWeather(result);
          setLocation("");
          console.log(result);
        });
    }
  };
  function dateFinder(x) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wendesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const day = days[x.getDay()];
    const month = months[x.getMonth()];
    const year = x.getFullYear();
    const date = x.getDate();
    return `${day} ${month},${date} ${year}`;
  }
  
 
  return (
    <>
      <div className="app">
        <div className="inputArea">
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={onSearch}
          />
        </div>
        {weather !== undefined ? (
          <>
            <div className="city-info">
              {weather.city !== undefined ? (
                <>
                  <div className="city">
                    {weather.city.name}, {weather.city.country}
                  </div>
                  <div className="date">{dateFinder(new Date(weather.list[0].dt_txt.split(" ")[0].split("-")[0],weather.list[0].dt_txt.split(" ")[0].split("-")[1]-1,weather.list[0].dt_txt.split(" ")[0].split("-")[2]))}</div>
                  <div className="degree">{weather.list[0].main.temp.toFixed()}'C</div>
                  <div className="weather">{weather.list[0].weather[0].main}</div>
                  <div className="icon">
                    <Icon
                    data={weather.list[0].weather[0].icon}
                    />
                  </div>
                </>
              ) : null}
            </div>
            {weather.city !== undefined ? (
              <>
              <div className="boxes">
                <div className="details">
                  <Output
                  data={weather.list[0].main.temp_max.toFixed()}
                  name="High ('C)"
                  />
                  <Output 
                  data={weather.list[0].main.temp_min.toFixed()}
                  name="Low ('C)"
                  />
                  <Output 
                  data={weather.list[0].wind.speed}
                  name="Wind (mph)"
                  />
                  <Output
                    data={weather.list[0].main.humidity} 
                    name="Humidity (%)"
                  />
                </div>
                <div className="weekly">
                  <Weekly
                  day={dateFinder(new Date(weather.list[6].dt_txt.split(" ")[0].split("-")[0],weather.list[6].dt_txt.split(" ")[0].split("-")[1]-1,weather.list[6].dt_txt.split(" ")[0].split("-")[2]))}
                  description={weather.list[6].weather[0].main}
                  icon={<Icon 
                    data={weather.list[6].weather[0].icon}/>}
                  temp={weather.list[6].main.temp.toFixed()} />
                  <Weekly
                  day={dateFinder(new Date(weather.list[14].dt_txt.split(" ")[0].split("-")[0],weather.list[14].dt_txt.split(" ")[0].split("-")[1]-1,weather.list[14].dt_txt.split(" ")[0].split("-")[2]))}
                  description={weather.list[14].weather[0].main}
                  icon={<Icon 
                    data={weather.list[14].weather[0].icon}/>}
                  temp={weather.list[14].main.temp.toFixed()} />
                  <Weekly
                  day={dateFinder(new Date(weather.list[22].dt_txt.split(" ")[0].split("-")[0],weather.list[22].dt_txt.split(" ")[0].split("-")[1]-1,weather.list[22].dt_txt.split(" ")[0].split("-")[2]))}
                  description={weather.list[22].weather[0].main}
                  icon={<Icon 
                    data={weather.list[22].weather[0].icon}/>}
                  temp={weather.list[22].main.temp.toFixed()} />
                  <Weekly
                  day={dateFinder(new Date(weather.list[30].dt_txt.split(" ")[0].split("-")[0],weather.list[30].dt_txt.split(" ")[0].split("-")[1]-1,weather.list[30].dt_txt.split(" ")[0].split("-")[2]))}
                  description={weather.list[30].weather[0].main}
                  icon={<Icon 
                    data={weather.list[30].weather[0].icon}/>}
                  temp={weather.list[30].main.temp.toFixed()} />
                  <Weekly
                  day={dateFinder(new Date(weather.list[38].dt_txt.split(" ")[0].split("-")[0],weather.list[38].dt_txt.split(" ")[0].split("-")[1]-1,weather.list[38].dt_txt.split(" ")[0].split("-")[2]))}
                  description={weather.list[38].weather[0].main}
                  icon={<Icon 
                    data={weather.list[38].weather[0].icon}/>}
                  temp={weather.list[38].main.temp.toFixed()} />
                </div>
                </div>
              </>
            ) : null}
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
