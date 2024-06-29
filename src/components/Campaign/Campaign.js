import React, { useEffect, useState } from 'react';
import { getAllCampaigns } from "../../services/getAllCampaigns";
import './Campaign.css';
import hot from '../../assets/hot.png';
import business from '../../assets/business.png';
import loading from '../../assets/loading.svg';

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [limit, setLimit] = useState(400);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const fetchedCampaigns = await getAllCampaigns();
        const approvedCampaigns = fetchedCampaigns.filter(campaign => campaign.is_approved === "true");
        setCampaigns(approvedCampaigns.map(campaign => ({ ...campaign, expanded: false })));
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1180) {
        setLimit(400);
      } else if (window.innerWidth > 900) {
        setLimit(260);
      } else if (window.innerWidth > 550){
        setLimit(120);
      } else if (window.innerWidth < 500) {
        setLimit(180)
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const truncateAtFullWord = (text, currentLimit) => {
    const boundary = text.lastIndexOf(' ', currentLimit);
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
                    <p className="content-limited">{truncateAtFullWord(campaign.content, limit)}... <span className="read-more">Read More</span></p>
                    <div className="campaigns-item__content-user">
                      <img src={campaign.author.avatar} alt="User avatar" className="campaigns-item__content-userAvatar"/>
                      <span>{campaign.author.username}</span>
                      {campaign.author.is_business &&
                        <div className="campaigns-item__content-business">
                          <span>(</span>
                          <img src={business} alt="Business" className="campaigns-item__content-businessIcon"/>
                          <span>&nbsp;- Business)</span>
                        </div>}
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
          <img src={loading} alt="loading" width={40}/>
        )}
      </div>
    </div>
  );
};

export default Campaign;
