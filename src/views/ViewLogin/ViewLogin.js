import Header from "../../components/Header/Header";
import './ViewLogin.css';
import Login from "../../components/Login/Login";

const ViewLogin = () => {

	return (
		<div className="view-login">
			<Header />
			<div>
				<Login />
			</div>

		</div>
	);
};

export default ViewLogin;
