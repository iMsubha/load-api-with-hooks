import "./App.css";
import RandomMe from "./components/RandomMe";
import User from './components/User'
function App() {

  return <div className="App">
    <User />
    <h3>Randomuser me API</h3>
    <RandomMe />
  </div>;
}

export default App;
