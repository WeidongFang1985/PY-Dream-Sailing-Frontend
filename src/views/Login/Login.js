import Header from "../../components/Header/Header";
import './Login.css';
import Login from "../../components/Login/Login";

const HomePage = () => {

	return (
		<div className="view-login">
			<Header />
			<div className="main">
				<Login />
			</div>

		</div>
	);
};

export default HomePage;
