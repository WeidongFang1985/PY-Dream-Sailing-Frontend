import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {getAllCampaigns} from "../../services/getAllCampaigns";
import ViewAdminReviewHeader from "./ViewAdminReviewHeader/ViewAdminReviewHeader";

const ViewAdminReview = () => {
	const navigate = useNavigate();
	const currentAdmin = JSON.parse(localStorage.getItem('adminData'));

	const [campaigns, setCampaigns] = useState([]);

	useEffect(() => {
		const fetchCampaigns = async () => {
			try {
				const fetchedCampaigns = await getAllCampaigns();
				const approvedCampaigns = fetchedCampaigns.filter(campaign => campaign.is_approved === "pending"); // Filter only approved campaigns
				setCampaigns(approvedCampaigns); // Add an expanded state to each campaign
			} catch (error) {
				console.error('Error fetching campaigns:', error);
			}
		};

		fetchCampaigns();
	}, []);

	console.log(campaigns)

	useEffect(() => {
		if (!currentAdmin) {
			navigate('/admin');
		}
	});

  return (
    <div>
      <ViewAdminReviewHeader />
    </div>
  );
};

export default ViewAdminReview;
