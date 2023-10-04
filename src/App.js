import logo from './logo.svg';
import './App.css';
import Practice from "./Practice";
import AnimationCrousel from "./AnimationCrousel";
import LearnProps from './LearnProps';
import Slider from "./Componants/slider/Slider";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a>
      </header>
       <Practice/> 
      <AnimationCrousel />
     
      <LearnProps/> 
      
      <Slider/>
    </div>
  );
}

export default App;
