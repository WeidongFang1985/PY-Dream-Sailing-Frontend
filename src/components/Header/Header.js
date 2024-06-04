import './Header.css';
import logo from '../../assets/logo.png';
import night from '../../assets/night.png';
import edit from '../../assets/edit.png';
import user from '../../assets/user.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__logo-nav">
          <div className="header-container__logo">
            <img src={logo} alt="logo" height="72"/>
            <span>Dream Sailing</span>
          </div>
          {/*<ul className="header-container__nav">*/}
          {/*  <li>Home</li>*/}
          {/*  <li>About</li>*/}
          {/*  <li>Contact Us</li>*/}
          {/*</ul>*/}
        </div>
        <div className="header-container__operations">
          <ul className="header-container__nav">
            <li className="header-container__nav-icon">
              <img src={night} alt="night" height={16}/>
            </li>
            <li className="header-container__nav-icon" >
              <img src={edit} alt="edit" height={16}/>
            </li>
            <li className="header-container__nav-icon">
              <img src={user} alt="user" height={16}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
