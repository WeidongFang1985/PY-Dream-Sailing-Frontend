import React, {useState} from 'react';
import Animation from "../Animation/Animation";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import individual from '../../assets/individual.png';
import business from '../../assets/business.png';
import emailIcon from "../../assets/email.svg";
import passwordIcon from "../../assets/locker.svg";
import usernameIcon from "../../assets/user.svg";

const Register = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('');
	const [password, setPassword ] = useState('');
	const [isBusiness, setIsBusiness] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const usernameOnChange = (e) => {
		setErrorMessage('')
		setUsername(e.target.value);
	}
	const emailOnChange = (e) => {
		setErrorMessage('')
		setEmail(e.target.value);
	}
	const passwordOnChange = (e) => {
		setErrorMessage('')
		setPassword(e.target.value);
	}
	const is_businessOnChange = (event) => {
		setIsBusiness(event.target.value === 'company');
	};

	const addUser = async () => {
		try {
			return await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users`, {
				"username":username,"email":email,"password":password,"is_business":isBusiness
			});
		} catch (e) {
			return e.response;
		}
	};

	const register = (event) => {
		event.preventDefault();
		if (!username) {
			setErrorMessage('Username is required');
			return;
		}
		if (!email) {
			setErrorMessage('Email is required');
			return;
		}
		if (!password) {
			setErrorMessage('Password is required');
			return;
		}
		addUser().then((res) => {
			if (res.status === 422) {
				setErrorMessage(
					'Password must be at least 8 characters with 1 digit and 1 letter.',
				);
				setPassword('');
				return;
			}
			if (res.status === 201) {
				localStorage.setItem('userData', JSON.stringify(res.data));
				navigate('/');
			} else {
				setErrorMessage(res.data);
			}
		});
	}

  return (
		<div className="form-container">
			<Animation/>
			<h1>Register</h1>
			<form onSubmit={register} className="form">
				<fieldset>
					<label htmlFor="username">Password</label><br/>
					<div className="form-input">
						<img src={usernameIcon} alt="username" width={24} className="form-input-img"/>
						<input type="text" id="username" value={username} onChange={usernameOnChange}/>
					</div>
				</fieldset>
				<br/>
				<fieldset>
					<label htmlFor="email">Email</label><br/>
					<div className="form-input">
						<img src={emailIcon} alt="email" width={24} className="form-input-img"/>
						<input type="email" id="email" value={email} onChange={emailOnChange} className="form-input"/>
					</div>
				</fieldset>
				<br/>
				<fieldset>
					<label htmlFor="password">Password</label><br/>
					<div className="form-input">
						<img src={passwordIcon} alt="email" width={24} className="form-input-img"/>
						<input type="password" id="password" value={password} onChange={passwordOnChange}/>
					</div>
				</fieldset>
				<br/>
				<div className="form-business-selection">
					<label>
						<input
							type="radio"
							name="businessType"
							value="individual"
							checked={!isBusiness}
							onChange={is_businessOnChange}
						/>
						<img src={individual} alt="individual" width={24} className="form-business-selection-icon"/>
						Individual
					</label>
					<label>
						<input
							type="radio"
							name="businessType"
							value="company"
							checked={isBusiness}
							onChange={is_businessOnChange}
						/>
						<img src={business} alt="business" width={24} className="form-business-selection-icon"/>

						Company
					</label>
				</div>
				<br/>
				<div className="form-to-middle error-message">{errorMessage}</div>
				<br/>
				<div className="form-to-middle">
					<button type="submit" className="form-button">Register&nbsp;&nbsp;&nbsp;&nbsp;&#8594;</button>
				</div>
				<br/>
				<div className="form-to-middle">Already have an account? &nbsp;&nbsp;<Link to="/login"
																																									 className='link-style'>Login</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
