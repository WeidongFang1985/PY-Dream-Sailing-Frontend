import axios from 'axios';

export const getAllCampaigns = async () => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/campaigns`);
		return response.data;
	} catch (error) {
		throw new Error('Failed to fetch campaigns');
	}
};
