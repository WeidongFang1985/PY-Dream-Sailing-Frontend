import React, { useEffect, useState } from 'react';
import './ViewAdminReviewCampaigns.css';
import { getAllCampaigns } from "../../../services/getAllCampaigns";

const ViewAdminReviewCampaigns = () => {
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

	// Helper function to format dates
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-GB'); // Format date in DD/MM/YYYY
	}

	// Helper function to truncate title
	const truncateTitle = (title) => {
		const words = title.split(' ');
		if (words.length > 4) {
			return words.slice(0, 4).join(' ') + '...';
		}
		return title;
	}

	return (
		<div>
			<h1 className="review-campaign-title">Campaigns</h1>
			<table className="campaign-table">
				<thead>
				<tr>
					<th>Title</th>
					<th>Category</th>
					<th>Initiator</th>
					<th>Date</th>
					<th>Status</th>
				</tr>
				</thead>
				<tbody>
				{campaigns.map((campaign) => (
					<tr key={campaign._id}>
						<td>{truncateTitle(campaign.title)}</td>
						<td>{campaign.category}</td>
						<td>{campaign.author.username}</td>
						<td>{formatDate(campaign.created_at)}</td>
						<td>Pending</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default ViewAdminReviewCampaigns;
