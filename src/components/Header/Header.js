import './Header.css';
import logo from '../../assets/logo.png';
import {Link, useNavigate} from "react-router-dom";
import { authToken } from '../../services/authToken';
import {useEffect, useState} from "react";
import {getUserData} from "../../services/getUserData";
import hamburger from '../../assets/hamburger.svg';

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('');

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

    const {username} = getUserData();
    if(username) {
      setUser(username.charAt(0));
    }
    setUserId(getUserData().id);
  }, []);

  const logout = () => {
    localStorage.removeItem('userData');
    setIsLogin(false);
    navigate('/');
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__logo-nav">
          <div className="header-container__logo">
            <img src={logo} alt="logo" height="72" className="header-container__logoIcon"/>
            <span>Dream Sailing</span>
          </div>
          <ul className="header-container__nav">
            <li><Link to="/" className="link-no-style">Home</Link></li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          <img src={hamburger} alt="hamburger icon" className="header-container__icon" />
        </div>
        <div className="header-container__operations">
          <ul className="header-container__nav2">
            <li>
              <Link to={'/post'} className="link-no-style header-container__nav2-post">Post a Campaign</Link>
            </li>
            <li>
              {isLogin ?
                <div className="header-container__nav-user">
                  <Link to={`/profile/${userId}`} className="link-no-style">
                  <span className="header-container__nav-icon">
                    {user}
                  </span>
                  </Link>

                  <span onClick={logout}>Logout</span>
                </div>
                : <span><Link to="/login" className="link-no-style">Login</Link></span>
              }</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
