import React, { useEffect, useState } from 'react';
import './ViewAdminReviewCampaigns.css';
import { getAllCampaigns } from "../../../services/getAllCampaigns";

const ViewAdminReviewCampaigns = () => {
	const [campaigns, setCampaigns] = useState([]);
	const [selectedCampaignId, setSelectedCampaignId] = useState(null);

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

	const handleCheckboxChange = (id) => {
		setSelectedCampaignId(id);
		console.log(id)
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
						<td className="review-campaign-title-box">
							<input
							type="radio"
							name="selectCampaign"
							value={selectedCampaignId === campaign._id}
							onChange={() => handleCheckboxChange(campaign._id)}
						/>
							<span>
								{truncateTitle(campaign.title)}
							</span>
							</td>
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
