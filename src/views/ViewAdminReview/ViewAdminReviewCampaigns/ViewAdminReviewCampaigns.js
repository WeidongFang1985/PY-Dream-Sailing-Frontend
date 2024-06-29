import React, { useEffect, useState } from 'react';
import './ViewAdminReviewCampaigns.css';
import { getAllCampaigns } from "../../../services/getAllCampaigns";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import cancel from "../../../assets/cancel.svg";

const ViewAdminReviewCampaigns = () => {
	const navigate = useNavigate();
	const [campaigns, setCampaigns] = useState([]);
	const [selectedCampaign, setSelectedCampaign] = useState(null);
	const [currentCampaign, setCurrentCampaign] = useState('');

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

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-GB');
	}

	const truncateTitle = (title) => {
		const words = title.split(' ');
		if (words.length > 4) {
			return words.slice(0, 4).join(' ') + '...';
		}
		return title;
	}

	const handleRowClick = (campaign) => {
		setSelectedCampaign(campaign);
	}

	const handleModalClose = (e) => {
		e.stopPropagation();
		setSelectedCampaign(null);
	}

	const approve = async () => {
		const approved = { id: currentCampaign, status: "true" };
		try {
			const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/admins/review`, approved);
			if (response.status === 200) {
				window.location.reload();
			}
		} catch (e) {
			console.error('Error in approving campaign:', e.response ? e.response.data : e);
		}
	}

	const decline = async () => {
		const approved = { id: currentCampaign, status: "false" };
		try {
			const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/admins/review`, approved);
			if (response.status === 200) {
				window.location.reload();
			}
		} catch (e) {
			console.error('Error in approving campaign:', e.response ? e.response.data : e);
		}
	}
	
	const logout = () => {
		localStorage.removeItem('adminData');
		navigate('/admin');
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
								value={currentCampaign}
								onChange={() => setCurrentCampaign(campaign._id)}
							/>
							<span className="review-campaign-selected" onClick={() => handleRowClick(campaign)}>
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
			{selectedCampaign && (
				<div className="modal" onClick={handleModalClose}>
					<div className="modal-content" onClick={e => e.stopPropagation()}>
						<div className="header-menu-cancelBox">
							<img src={cancel} alt="cancel" className="header-menu-cancelIcon" onClick={handleModalClose}/>
						</div>
						<h2>{selectedCampaign.title}</h2>
						<p>Author: {selectedCampaign.author.username}</p>
						<p>{selectedCampaign.content}</p>
					</div>
				</div>
			)}
			<div className="review-campaign-operation">
				<span className="review-campaign-operation-item" onClick={approve}>
					Approve
				</span>
				<span className="review-campaign-operation-item review-campaign-operation-decline" onClick={decline}>
					Decline
				</span>
			</div>
			<br/><br/>
			<div className="review-campaign-logout">
				<span className="review-campaign-operation-item review-campaign-operation-logout" onClick={logout}>
					Logout
				</span>
			</div>
		</div>
	);
};

export default ViewAdminReviewCampaigns;
