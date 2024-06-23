import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getAllCampaigns } from "../../services/getAllCampaigns";
import ViewAdminReviewHeader from "./ViewAdminReviewHeader/ViewAdminReviewHeader";
import './ViewAdminReview.css';
import ViewAdminSidebar from "./ViewAdminSidebar/ViewAdminSidebar";

const ViewAdminReview = () => {
	const navigate = useNavigate();
	const currentAdmin = JSON.parse(localStorage.getItem('adminData'));

	useEffect(() => {
		if (!currentAdmin) {
			navigate('/admin');
		}
	}, [navigate, currentAdmin]);

	const [campaigns, setCampaigns] = useState([]);
	console.log(campaigns);

	useEffect(() => {
		const fetchCampaigns = async () => {
			try {
				const fetchedCampaigns = await getAllCampaigns();
				const approvedCampaigns = fetchedCampaigns.filter(campaign => campaign.is_approved === "pending");
				setCampaigns(approvedCampaigns);
			} catch (error) {
				console.error('Error fetching campaigns:', error);
			}
		};

		fetchCampaigns();
	}, []);

	return (
		<div>
			<ViewAdminReviewHeader />
			<div className="review-content">
				<div className="review-content__sideBar">
					<ViewAdminSidebar />
				</div>

				<div className="review-content__main">
					<div className="review-content__main-campaign">
						111
					</div>
					<div className="review-content__main-statistics">

					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewAdminReview;
