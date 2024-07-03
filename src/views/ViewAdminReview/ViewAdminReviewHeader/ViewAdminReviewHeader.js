import React from 'react';
import './ViewAdminReviewHeader.css';
import logo from "../../../assets/logo.png";
import search from '../../../assets/search.svg';
import email from '../../../assets/mail.png';
import user from '../../../assets/userIcon.png';
import {Link, useNavigate} from "react-router-dom";

const ViewAdminReviewHeader = () => {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('adminData');
		navigate('/');
	}
	
  return (
    <div className="review-header">
			<div className="review-header__container">
				<div className="header-container__logo-nav">
					<div className="header-container__logo">
						<Link to="/" className="link-no-style">
							<img src={logo} alt="logo" height="72" className="header-container__logoIcon"/>
						</Link>
						<Link to="/" className="link-no-style">
							<span className="header-container__title">Dream Sailing</span>
						</Link>
					</div>
					<ul className="header-container__nav header-container__adminNav">
						<li className="review-header__nav">
							<img src={search} alt="search" className="review-header__nav-searchIcon"/>
							<input type="text" placeholder="Search" className="review-header__nav-search"/>
						</li>
						<li>
							<input type="date" className="review-header__nav-date"/>
						</li>
					</ul>
				</div>
				<div className="header-container__operations">
					<ul className="header-container__nav2">
						<li className="review-header__nav2-mail">
							<img src={email} alt="email" className="review-header__nav2-mailIcon"/>
						</li>
						<li className="review-header__nav2-user">
							<img src={user} alt="user" className="review-header__nav2-userIcon"/>
							<span onClick={logout}>Administrator</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ViewAdminReviewHeader;
