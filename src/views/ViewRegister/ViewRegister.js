import Header from "../../components/Header/Header";
import './ViewRegister.css';
import Register from "../../components/Register/Register";

const ViewRegister = () => {

	return (
		<div className="view-register">
			<Header />
			<div className="login">
				<Register />
			</div>

		</div>
	);
};

export default ViewRegister;
