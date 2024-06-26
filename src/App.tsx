import "./App.css";
import { Stars } from "./Stars";

function App() {
  return (
	
    <div className="wrapper">
      <div className="card-body">
        <Stars count={0} />
        <Stars count={1} />
        <Stars count={2} />
        <Stars count={3} />
        <Stars count={4} />
        <Stars count={5} />
      </div>
    </div>
  );
}

export default App;
