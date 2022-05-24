import React from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import './App.css';
import Features from './components/Features';
import NoteDrop from './components/NotableDrop';
import Trending from "./components/TrendingCategory";
import Card from "./components/Card"
import Explore from './components/Explore';
import CategoryCard from './components/CategoryCard';
import {Button} from 'reactstrap'
import Question from './components/Question';
import Resource from './components/Resources';
import Bottom from './components/BottomSection';


function App() {
  return (
    <div>

    <div className="App">
     
      <Navbar />
      <Hero />
    </div>
    <div>
      <Features/>
    </div>
    <div>
      <NoteDrop/>
    </div>
    <div>
      <Trending />
    </div>
    <div>
      <Card />
    </div>
    <Explore/>
    <div>
      <CategoryCard/>
      <div className="center">
      <Button className="category--btn lftBtn1">Explore Marketplace</Button>
      </div>
    </div>
        <Question/>	
        <Resource/>
        <Bottom/>
    </div>
  );
}

export default App;
