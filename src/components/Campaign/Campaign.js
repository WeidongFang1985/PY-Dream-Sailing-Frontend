import React, {useEffect} from 'react';
import {getAllCampaigns} from "../../services/getAllCampaigns";

const Campaign = () => {
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaigns = await getAllCampaigns();
        console.log(campaigns);  // 在控制台打印获取到的活动数据
      } catch (error) {
        console.error('Error fetching campaigns:', error);  // 错误处理
      }
    };

    fetchCampaigns();  // 调用上述定义的异步函数
  }, []);

  return (
    <div>
      <h1>Campaign</h1>
    </div>
  );
};

export default Campaign;
