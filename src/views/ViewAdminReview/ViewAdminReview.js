import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ViewAdminReviewHeader from "./ViewAdminReviewHeader/ViewAdminReviewHeader";
import './ViewAdminReview.css';
import ViewAdminSidebar from "./ViewAdminSidebar/ViewAdminSidebar";
import ViewAdminReviewCampaigns from "./ViewAdminReviewCampaigns/ViewAdminReviewCampaigns";

const ViewAdminReview = () => {
	const navigate = useNavigate();
	const currentAdmin = JSON.parse(localStorage.getItem('adminData'));

	useEffect(() => {
		if (!currentAdmin) {
			navigate('/admin');
		}
	}, [navigate, currentAdmin]);

	return (
		<div>
			<ViewAdminReviewHeader />
			<div className="review-content">
				<div className="review-content__sideBar">
					<ViewAdminSidebar />
				</div>

				<div className="review-content__main">
					<div className="review-content__main-campaign">
						<ViewAdminReviewCampaigns />
					</div>
					<div className="review-content__main-statistics">

					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewAdminReview;
