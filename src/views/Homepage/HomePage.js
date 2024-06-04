import Header from "../../components/Header/Header";
import Campaign from "../../components/Campaign/Campaign";
import './HomePage.css';

const HomePage = () => {

	return (
		<div className="homepage">
			<Header />
			<div className="main">
				<Campaign />
			</div>

		</div>
	);
};

export default HomePage;
