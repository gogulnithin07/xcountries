import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(function () {
    async function getData() {
      try {
        let req = await fetch("https://restcountries.com/v3.1/all");
        if (!req.ok) {
          throw new Error("Failed to fetch data");
        }
        let res = await req.json();
        console.log(res);
        setCountries(res);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      <ul className="container">
        {countries.map((val) => (
          <Country key={val.area} name={val.name.common} flag={val.flags.png} />
        ))}
      </ul>
    </div>
  );
}
function Country({ name, flag }) {
  return (
    <li className="box">
      <img src={flag} alt="flagimage" />
      <p>{name}</p>
    </li>
  );
}

export default App;
