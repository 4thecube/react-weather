import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import Searchbox from "./components/searchbox/Searchbox";
import Header from "./components/header/Header";
import Card from "./components/card/Card";

import "./App.css";
import Loader from "./components/loader/Loader";

function App() {
  const [data, setData] = useState({
    dt: Date.now(),
  });
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const newDate = new Date(Date.now());
  const getDate = newDate.getDate();

  const [search, setSearch] = useState("Ivano-Frankivsk");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(inputRef.current.value);
    e.target.reset();
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    const res = async () => {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&lang=uk&appid=${process.env.REACT_APP_API_KEY}`
      ).then((res) => res.json());
      setData(data);
    };
    res();
  }, [search]);

  console.log(isLoading);
  return (
    <div className="app">
      {data.cod ? (
        isLoading ? (
          <Loader />
        ) : (
          <div className="main">
            <div className="city-container">
              <span className="city-text">
                Weather in <span className="city">{search}</span>
              </span>
              <form onSubmit={handleSearchChange} className="searchbox">
                <input
                  type="text"
                  placeholder="City or village"
                  ref={inputRef}
                />
              </form>
            </div>
            <Header getDate={getDate} />
            <Switch>
              <Route
                path={`/`}
                exact
                render={() => <Card weather={data} currentDate={getDate} />}
              />
              <Route
                path={`/${getDate + 1}`}
                exact
                render={() => <Card weather={data} currentDate={getDate + 1} />}
              />
              <Route
                path={`/${getDate + 2}`}
                exact
                render={() => <Card weather={data} currentDate={getDate + 2} />}
              />
              <Route
                path={`/${getDate + 3}`}
                exact
                render={() => <Card weather={data} currentDate={getDate + 3} />}
              />
              <Route
                path={`/${getDate + 4}`}
                exact
                render={() => <Card weather={data} currentDate={getDate + 4} />}
              />
            </Switch>
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
