import "./App.css";
import { CenteredCard } from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <CenteredCard children="Children 1" />
          <CenteredCard children="Children 2" />
          <CenteredCard children="Children 3" />
        </div>
      </header>
    </div>
  );
}

export default App;
