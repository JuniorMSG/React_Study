import './App.css';
import Extraction from "./components/props/Extraction";
import Composition from "./components/props/Composition";
import StateClassComponent from "./components/StateClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/LifeCycle/ClassComponent";
import Event from "./components/Event/Event";
import Condition from "./components/ConditionalRendering/Condition";
import List from "./components/List/List";
import ControlledComponent from "./components/Form/ControlledComponent";
import UnControlledComponent from "./components/Form/UnControlledComponent";


function App() {
  return (
    <div className="App">
        {<UnControlledComponent />}
        {<ControlledComponent />}
        {/*{<List />}*/}
        {/*{<Condition />}*/}
        {/*<Event />*/}
        {/*<ClassComponent />*/}
        {/*<FunctionalComponent />*/}
        {/*<StateClassComponent />*/}
        {/*<Extraction />*/}
        {/*<Composition />*/}
    </div>
  );
}

export default App;
