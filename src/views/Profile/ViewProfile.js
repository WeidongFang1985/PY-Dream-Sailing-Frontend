import Header from "../../components/Header/Header";
import './ViewProfile.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUserData } from "../../services/getUserData"; // 确保这个函数是获取配置信息，而不是状态

const ViewProfile = () => {
	const [userData, setUserData] = useState(null);
	const { id } = useParams();

	const getUser = () => {
		return axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${id}`, getUserData().config);
	};

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await getUser();
				setUserData(response.data);
			} catch (error) {
				console.error('Failed to fetch user data:', error.message);
			}
		};

		fetchUserData();
	}, [id]);

	useEffect(() => {
		if (userData) {
			console.log(userData);
		}
	}, [userData]);

	return (
		<div className="view-profile">
			<Header />
			{userData && (
				<div className="profile-container">
					<img src={userData.avatar} alt="Profile Avatar" className="profile-avatar"/>
					<h1>{userData.username}</h1>
					<p><strong>Email:</strong> {userData.email}</p>
					<p><strong>Contact:</strong> {userData.contact_number}</p>
					{userData.is_business && <p className="business-account">Business Account</p>}

					<div className="campaigns">
						<h2>Activities</h2>
						{userData.campaigns.map(campaign => (
							<div key={campaign._id} className="campaign-card">
								<img src={campaign.photo} alt={campaign.title} className="campaign-photo"/>
								<div className="campaign-details">
									<h3>{campaign.title}</h3>
									<p className="campaign-category">{campaign.category}</p>
									<p className="campaign-date">Created on: {new Date(campaign.created_at).toLocaleDateString()}</p>
									<p className="campaign-status">{campaign.is_approved}</p>
									<p className="campaign-content">{campaign.content.substring(0, 100)}...</p>
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
