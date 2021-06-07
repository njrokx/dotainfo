import HeroGrid from './Components/HeroGridComponent/HeroGrid';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBarComponent/NavBar';
import './App.css'

function App() {

  //1 str => 20 hp and 0.1 hp regen & 1 dmg for str hero
  //1 agi => 1/6 armor and 1 atk spd & 1 dmg for agi hero
  //1 int => 12 mana and 0.05 mana regen & 1 dmg for int hero

  return (
    <Router>
      <div className="App">
        <NavBar />
        <HeroGrid />
      </div>
    </Router>

  );
}

export default App;
