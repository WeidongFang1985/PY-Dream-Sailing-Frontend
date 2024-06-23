import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";
import PostCampaign from "../../components/PostCampaign/PostCampaign";

const ViewPostCampaign = () => {
	const currentUser = JSON.parse(localStorage.getItem('userData'));
	const navigate = useNavigate();
	useEffect(() => {
		if (!currentUser) {
			navigate('/login');
		}
	});

  return (
    <div>
      <Header />
			<div className="main">
				<PostCampaign />
			</div>
    </div>
  );
};

export default ViewPostCampaign;
