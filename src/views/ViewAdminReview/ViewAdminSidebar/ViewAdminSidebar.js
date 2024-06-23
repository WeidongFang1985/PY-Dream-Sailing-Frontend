import React, {useState} from 'react';

const ViewAdminSidebar = () => {
	const sidebarItems = ["Campaigns", "Statistics", "Report", "Settings"];
	const [activeItem, setActiveItem] = useState('Campaigns');

	return (
		<div>
			<ul className="review-content__sideBar">
				{sidebarItems.map(item => (
					<li
						key={item}
						className={`review-content__sideBar-item ${activeItem === item ? 'review-content__sideBar-item-active' : ''}`}
						onClick={() => setActiveItem(item)}
						onMouseEnter={() => setActiveItem(item)}
						onMouseLeave={() => setActiveItem('Campaigns')}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ViewAdminSidebar;
