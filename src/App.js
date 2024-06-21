import './App.css';
import HomePage from "./views/Homepage/HomePage";
import {Route, Routes} from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import ViewProfile from "./views/Profile/ViewProfile";
import PostCampaign from "./views/PostCampaign/PostCampaign";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<ViewProfile />} />
        <Route path="/post" element={<PostCampaign />} />
      </Routes>
    </div>
  );
}

export default App;
