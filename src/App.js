import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import data, { Cairns } from './data.js';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar.jsx';
import Navbar from './components/Navbar';

// const API_KEY = "b9fd7b8644a72c87e5bd3b214a46a743";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Nav">
        <Navbar />
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
        <Cards
          cities={data}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
