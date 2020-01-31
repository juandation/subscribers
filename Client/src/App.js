import React, { useState, useEffect } from "react";
import "./App.css";
import environment from "./environments/environment";

//Components
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";

function App() {
  //Hook State
  const [subscribers, setSubscribers] = useState([]);

  //Hook
  useEffect(() => {
    const subscribersUrl = environment.serverUrl;
    async function getSubscribers() {
      const response = await fetch(subscribersUrl);
      const subscribersData = await response.json();
      setSubscribers(subscribersData);
      //console.log(subscribersData);
    }
    getSubscribers();
    return;
  }, []);

  //SortByName
  const byName = function sortByName() {
    function compare(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    const nameSorted = subscribers.sort(compare);
    setSubscribers(nameSorted);
    console.log(nameSorted);
  };

  //sortByAge
  const byAge = function sortByName() {
    function compare(a, b) {
      const ageA = a.age;
      const ageB = b.age;

      let comparison = 0;
      if (ageA > ageB) {
        comparison = 1;
      } else if (ageA < ageB) {
        comparison = -1;
      }
      return comparison;
    }
    const ageSorted = subscribers.sort(compare);
    console.log(ageSorted);
    setSubscribers(ageSorted);
  };
  //sortBySport
  const bySport = function sortByName() {
    function compare(a, b) {
      const sportA = a.sport.toUpperCase();
      const sportB = b.sport.toUpperCase();

      let comparison = 0;
      if (sportA > sportB) {
        comparison = 1;
      } else if (sportA < sportB) {
        comparison = -1;
      }
      return comparison;
    }
    const sportSorted = subscribers.sort(compare);
    console.log(sportSorted);
    setSubscribers(sportSorted);
  };

  return (
    <div className='App'>
      <Header />
      <div>
        <table className='App-header'>
          <thead>
            <tr>
              <th>Name</th>
              <th>lastName</th>
              <th>Age</th>
              <th>Sport</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map(subscriber => {
              return (
                <tr key={subscriber.id}>
                  <td>{subscriber.name}</td>
                  <td>{subscriber.lastName}</td>
                  <td>{subscriber.age}</td>
                  <td>{subscriber.sport}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={byName}>Sort By Name</button>

      <button onClick={byAge}>Sort By Age</button>
      <button onClick={bySport}>Sort By Sport</button>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
