import './App.css';
import Extraction from "./components/props/Extraction";
import Composition from "./components/props/Composition";
import StateClassComponent from "./components/StateClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";


function App() {
  return (
    <div className="App">
        <FunctionalComponent />
        <StateClassComponent />
        <Extraction />
        {/*<Composition />*/}
    </div>
  );
}

export default App;
