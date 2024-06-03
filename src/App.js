import './App.css';
import HomePage from "./views/Homepage/HomePage";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
