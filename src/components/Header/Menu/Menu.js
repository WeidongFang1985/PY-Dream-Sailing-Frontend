import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Menu.css';

const Menu = () => {
	const currentUser = JSON.parse(localStorage.getItem('userData'));
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if(currentUser) {
			setIsLogin(true);
		}
	}, [currentUser]);

  return (
    <div>
			{isLogin ?
				<ul className="header-menu-items">
					<li>
						<Link to={'/post'} className="link-no-style header-container__nav2-post">Post a Campaign</Link>
					</li>
					<li>
						{currentUser && (
							<Link to={`/profile/${currentUser.id}`} className="link-no-style header-container__nav2-post">
								Review
							</Link>
						)}
					</li>
					<li>
						<span onClick={()=>{
							localStorage.removeItem('userData');
							setIsLogin(false);
							navigate('/');
						}} className="link-no-style header-container__nav2-post">Logout</span>
					</li>
				</ul>
				:
				<ul className="header-menu-items">
					<li>
						<Link to={'/post'} className="link-no-style header-container__nav2-post">Post a Campaign</Link>
					</li>
					<li>
						<Link to={'/login'} className="link-no-style header-container__nav2-post">Login</Link>
					</li>
				</ul>}
		</div>
	);
};

export default Menu;
