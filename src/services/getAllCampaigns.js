import axios from 'axios';

export const getAllCampaigns = async () => {
	try {
		const response = await axios.get(`http://localhost:8080/api/v1/campaigns`);
		return response.data;
	} catch (error) {
		throw new Error('Failed to fetch campaigns');
	}
};
