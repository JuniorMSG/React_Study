import './App.css';
import Extraction from "./components/props/Extraction";
import Composition from "./components/props/Composition";
import StateClassComponent from "./components/StateClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/LifeCycle/ClassComponent";


function App() {
  return (
    <div className="App">
        <ClassComponent />
        <FunctionalComponent />
        <StateClassComponent />
        <Extraction />
        {/*<Composition />*/}
    </div>
  );
}

export default App;
