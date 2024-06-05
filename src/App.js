import './App.css';
import HomePage from "./views/Homepage/HomePage";
import {Route, Routes} from "react-router-dom";
import Login from "./views/Login/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
