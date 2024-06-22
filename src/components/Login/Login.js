import React, {useEffect, useState} from 'react';
import './Login.css';
import Animation from "../Animation/Animation";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import emailIcon from '../../assets/email.svg';
import passwordIcon from '../../assets/locker.svg';
import openEyeIcon from '../../assets/openEye.svg';
import closeEyeIcon from '../../assets/closeEye.svg';

const Login = () => {
	const currentUser = JSON.parse(localStorage.getItem('userData'));
	const navigate = useNavigate();
	useEffect(() => {
		if (currentUser) {
			navigate('/');
		}
	});

	const [email, setEmail] = useState('');
	const [password, setPassword ] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);
	const [isHiddenPassword, setIsHiddenPassword] = useState(true);

	const emailOnChange = (e) => {
		setErrorMessage('')
		setEmail(e.target.value);
	}
	const passwordOnChange = (e) => {
		setErrorMessage('')
		setPassword(e.target.value);
	}

	const verifyUser = async () => {
		try {
			return await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/login`, {
				email, password
			});
		} catch (e) {
			if (!e.response) {
				return {
					status: 500,
					message: "Server not responding or network error"
				};
			}
			return e.response;
		}
	};

	const hidePassword = () => {
		setIsHiddenPassword(!isHiddenPassword);
	}

	const login = (event) => {
		event.preventDefault();
		if (!email) {
			setErrorMessage('Email is required');
			return;
		}
		if (!password) {
			setErrorMessage('Password is required');
			return;
		}
		verifyUser().then((res) => {
			if (res.status === 404) {
				setErrorMessage('This email does not exist');
				return;
			}
			if (res.status === 401) {
				setErrorMessage('Invalid email or password');
				return;
			}
			if (res.status === 500) {
				setErrorMessage(res.message);
				return;
			}
			if (res.status === 201) {
				localStorage.setItem('userData', JSON.stringify(res.data));
				navigate('/');
			}
		}).catch(err => {
			setErrorMessage('An unexpected error occurred');
			console.error(err);
		});
	}

	return (
		<div className="form-container">
			<Animation/>
			<h1>Login</h1>
			<form onSubmit={login} className="form">
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
						<input type={isHiddenPassword ? "password" : "text"} id="password" value={password} onChange={passwordOnChange}/>
						<img src={isHiddenPassword ? openEyeIcon : closeEyeIcon} alt="openEye" width={24} className="from-input-eye" onClick={hidePassword}/>
					</div>
				</fieldset>
				<br/>
				<div className="form-to-middle error-message">{errorMessage}</div>
				<br/>
				<div className="form-to-middle">
					<button type="submit" className="form-button">Login&nbsp;&nbsp;&nbsp;&nbsp;&#8594;</button>
				</div>
				<br/><br/>
				<div className="form-to-middle">Don't have an account?&nbsp;&nbsp; <Link to="/register" className='link-style'>Create</Link></div>
			</form>
		</div>
	);
};

export default Login;
