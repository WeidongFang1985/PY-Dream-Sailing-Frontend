import Header from "../../components/Header/Header";
import './ViewProfile.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUserData } from "../../services/getUserData";

const ViewProfile = () => {
	const [userData, setUserData] = useState(null);
	const { id } = useParams();



	useEffect(() => {
		const getUser = () => {
			return axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${id}`, getUserData().config);
		};
		const fetchUserData = async () => {
			try {
				const response = await getUser();
				setUserData(response.data);
			} catch (error) {
				console.error('Failed to fetch user data:', error.message);
			}
		};
		fetchUserData();
	},[id]);

	const getApprovalStatus = (status) => {
		switch (status) {
			case "true":
				return "Approved";
			case "false":
				return "Declined";
			case "pending":
				return "Pending";
			default:
				return "Unknown";
		}
	};

	return (
		<div className="view-profile">
			<Header />
			{userData && (
				<div className="view-profile__container">
					<img src={userData.avatar} alt="Profile Avatar" className="view-profile__avatar"/>
					<h1>{userData.username}</h1>
					<p><strong>Email:</strong> {userData.email}</p>
					<p><strong>Contact:</strong> {userData.contact_number}</p>
					{userData.is_business && <p className="view-profile__business-account">Business Account</p>}

					<div className="view-profile__campaigns">
						<h2>Activities</h2>
						{userData.campaigns.map(campaign => (
							<div key={campaign._id} className="view-profile__campaign-card">
								<img src={campaign.photo} alt={campaign.title} className="view-profile__campaign-photo" />
								<div className="view-profile__campaign-details">
									<h3>{campaign.title}</h3>
									<p className="view-profile__campaign-category">Category: {campaign.category}</p>
									<p className="view-profile__campaign-date">Created on: {new Date(campaign.created_at).toLocaleDateString()}</p>
									<p className="view-profile__campaign-status">Status: {getApprovalStatus(campaign.is_approved)}</p>
									<p className="view-profile__campaign-content">{campaign.content.substring(0, 100)}...</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ViewProfile;
