import React, { useEffect, useState } from 'react';
import { getAllCampaigns } from "../../services/getAllCampaigns";
import hot from '../../assets/hot.png';

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const fetchedCampaigns = await getAllCampaigns();
        const approvedCampaigns = fetchedCampaigns.filter(campaign => campaign.is_approved === "true"); // Filter only approved campaigns
        setCampaigns(approvedCampaigns.map(campaign => ({ ...campaign, expanded: false }))); // Add an expanded state to each campaign
        // console.log(approvedCampaigns);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  const truncateAtFullWord = (text, limit) => {
    const boundary = text.lastIndexOf(' ', limit);
    return boundary === -1 ? text : text.slice(0, boundary);
  };

  return (
    <div>
      <h2>What are the new Social Campaigns?</h2>
      <div>
        {campaigns.length > 0 ? (
          <ul className="campaigns">
            {campaigns.map(campaign => (
              <li key={campaign._id} className="campaigns-item">
                <div className="campaigns-item__trend">
                  <img src={hot} alt="hot" width={16}/>
                  <span>Trending in <strong>{campaign.category}</strong></span>
                </div>
                <div className="campaigns-item__content">
                  <div className="campaigns-item__content-text">
                    <h3>{campaign.title}</h3>
                    <p className="content-limited">{truncateAtFullWord(campaign.content, 500)}... <span className="read-more">Read More</span></p>
                    <div className="campaigns-item__content-user">
                      <img src={campaign.author.avatar} alt="User avatar"/>
                      <span>{campaign.author.username}</span>
                    </div>
                  </div>
                  <div className="campaigns-item__content-img">
                    <img src={campaign.photo} alt={campaign.title} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No campaigns available.</p>
        )}
      </div>
    </div>
  );
};

export default Campaign;
