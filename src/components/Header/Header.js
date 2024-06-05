import './Header.css';
import logo from '../../assets/logo.png';
// import night from '../../assets/night.png';
// import edit from '../../assets/edit.png';
// import user from '../../assets/user.png';
import {Link} from "react-router-dom";
import { authToken } from '../../services/authToken';
import {useEffect, useState} from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const authTokenValidation = async () => {
      try {
        const response = await authToken();
        if (response.status === 201) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        setIsLogin(false);
      }
    };
    authTokenValidation();
  }, []);

  const logout = () => {
    localStorage.clear();
    setIsLogin(false);
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__logo-nav">
          <div className="header-container__logo">
            <img src={logo} alt="logo" height="72"/>
            <span>Dream Sailing</span>
          </div>
          <ul className="header-container__nav">
            <li><Link to="/" className="link-style">Home</Link></li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="header-container__operations">
          <ul className="header-container__nav2">
            {/*<li className="header-container__nav-icon">*/}
            {/*  <img src={night} alt="night" height={16}/>*/}
            {/*</li>*/}
            {/*<li className="header-container__nav-icon" >*/}
            {/*  <img src={edit} alt="edit" height={16}/>*/}
            {/*</li>*/}
            {/*<li className="header-container__nav-icon">*/}
            {/*  <img src={user} alt="user" height={16}/>*/}
            {/*</li>*/}
            <li>
              <span>Post a Campaign</span></li>
            <li>
              {isLogin ?
                <div className="header-container__nav-user">
                  <span>User</span>
                  <span onClick={logout}>Logout</span>
                </div>
                : <Link to="/login" className="link-style">Login</Link>
              }</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
