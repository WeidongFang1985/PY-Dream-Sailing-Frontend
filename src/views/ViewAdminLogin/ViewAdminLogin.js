import React from 'react';
import './ViewAdminLogin.css';
import AdminHeader from "./AdminHeader/AdminHeader";
import AdminLogin from "./AdminLogin/AdminLogin";

const ViewAdminLogin = () => {
  return (
		<div>
			<AdminHeader />
			<div className="main admin-content">
				<AdminLogin />
			</div>
		</div>
	);
};

export default ViewAdminLogin;
