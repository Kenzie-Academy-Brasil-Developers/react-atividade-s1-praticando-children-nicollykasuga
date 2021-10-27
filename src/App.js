import "./App.css";
import { CenteredCard } from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <CenteredCard>
            <p>Children 1</p>
          </CenteredCard>
          <CenteredCard>
            <p>Children 2</p>
          </CenteredCard>
          <CenteredCard>
            <p>Children 3</p>
          </CenteredCard>
        </div>
      </header>
    </div>
  );
}

export default App;
