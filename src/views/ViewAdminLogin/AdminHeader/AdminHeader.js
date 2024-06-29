import React from 'react';
import logo from "../../../assets/logo.png";

const AdminHeader = () => {
  return (
		<div className="header">
			<div className="header-container">
				<div className="header-container__logo-nav admin-nav">
					<div className="header-container__logo admin-logo">
						<img src={logo} alt="logo" className="header-container__logoIcon"/>
						<span>Dream Sailing Management System</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHeader;
