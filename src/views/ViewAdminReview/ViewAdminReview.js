import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const ViewAdminReview = () => {
	const navigate = useNavigate();
	const currentAdmin = JSON.parse(localStorage.getItem('adminData'));

	useEffect(() => {
		if (!currentAdmin) {
			navigate('/admin');
		}
	});

  return (
    <div>
      我来也
    </div>
  );
};

export default ViewAdminReview;
