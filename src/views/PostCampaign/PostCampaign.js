import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";

const PostCampaign = () => {
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
			Post a campaign here<br/>
			{/*{author}*/}
    </div>
  );
};

export default PostCampaign;
