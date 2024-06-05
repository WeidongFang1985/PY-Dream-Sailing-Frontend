import './App.css';
import HomePage from "./views/Homepage/HomePage";
import {Route, Routes} from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
