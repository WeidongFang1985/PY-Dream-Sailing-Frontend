import './App.css';
import ViewHomepage from "./views/ViewHomepage/ViewHomepage";
import {Route, Routes} from "react-router-dom";
import Login from "./views/ViewLogin/ViewLogin";
import Register from "./views/ViewRegister/ViewRegister";
import ViewProfile from "./views/ViewProfile/ViewProfile";
import ViewPostCampaign from "./views/ViewPostCampaign/ViewPostCampaign";
import ViewAdminLogin from "./views/ViewAdminLogin/ViewAdminLogin";
import ViewAdminReview from "./views/ViewAdminReview/ViewAdminReview";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ViewHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<ViewProfile />} />
        <Route path="/post" element={<ViewPostCampaign />} />
        <Route path="/admin" element={<ViewAdminLogin />} />
        <Route path="/review" element={<ViewAdminReview />} />
      </Routes>
    </div>
  );
}

export default App;
