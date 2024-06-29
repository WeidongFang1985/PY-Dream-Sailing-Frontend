import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Menu.css';
import cancel from '../../../assets/cancel.svg';

const Menu = ({ onMenuClick }) => { // 添加一个参数来处理点击事件
	const currentUser = JSON.parse(localStorage.getItem('userData'));
	const navigate = useNavigate();
	const location = useLocation(); // 获取当前的路由路径
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		setIsLogin(!!currentUser);
	}, [currentUser]);

	const handleMenuClick = (targetPath) => {
		if (location.pathname === targetPath) {
			onMenuClick && onMenuClick();
		} else {
			navigate(targetPath);
			onMenuClick && onMenuClick();
		}
	};

	return (
		<div>
			<div className="header-menu-cancelBox">
				<img src={cancel} alt="cancel" className="header-menu-cancelIcon" onClick={onMenuClick}/>
			</div>
			{isLogin ? (
				<ul className="header-menu-items">
					<li>
						<span onClick={() => handleMenuClick('/post')} className="link-no-style header-container__nav2-post">Post a Campaign</span>
					</li>
					<li>
						{currentUser && (
							<span onClick={() => handleMenuClick(`/profile/${currentUser.id}`)} className="link-no-style header-container__nav2-post">
								Review
							</span>
						)}
					</li>
					<li>
							<span onClick={() => {
								localStorage.removeItem('userData');
								setIsLogin(false);
								navigate('/');
							}} className="link-no-style header-container__nav2-post">Logout</span>
					</li>
				</ul>
			) : (
				<ul className="header-menu-items">
					<li>
						<span onClick={() => handleMenuClick('/post')} className="link-no-style header-container__nav2-post">Post a Campaign</span>
					</li>
					<li>
						<span onClick={() => handleMenuClick('/login')} className="link-no-style header-container__nav2-post">Login</span>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Menu;
