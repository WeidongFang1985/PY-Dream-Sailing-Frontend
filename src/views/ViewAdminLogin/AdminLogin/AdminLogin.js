import React, {useState} from 'react';
import Animation from "../../../components/Animation/Animation";
import './AdminLogin.css';
import userIcon from "../../../assets/user.svg";
import passwordIcon from "../../../assets/locker.svg";
import openEyeIcon from "../../../assets/openEye.svg";
import closeEyeIcon from "../../../assets/closeEye.svg";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AdminLogin = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword ] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);
	const [isHiddenPassword, setIsHiddenPassword] = useState(true);

	const hidePassword = () => {
		setIsHiddenPassword(!isHiddenPassword);
	}

	const usernameOnChange = (e) => {
		setErrorMessage('')
		setUsername(e.target.value);
	}
	const passwordOnChange = (e) => {
		setErrorMessage('')
		setPassword(e.target.value);
	}

	const verifyUser = async () => {
		try {
			return await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/admins/login`, {
				username, password
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

	const login = (e) => {
		e.preventDefault();
		if(!username) {
			setErrorMessage('Username is required!')
			return
		}
		if(!password) {
			setErrorMessage('Password is required!')
			return
		}
		verifyUser().then((res) => {
			if (res.status === 422) {
				setErrorMessage('Username and password are required!');
				return;
			}
			if (res.status === 401) {
				setErrorMessage('Invalid username or password!');
				return;
			}
			if (res.status === 500) {
				setErrorMessage(res.message);
				return;
			}
			if (res.status === 200) {
				localStorage.setItem('adminData', JSON.stringify(res.data));
				navigate('/review');
			}
		}).catch(err => {
			setErrorMessage('An unexpected error occurred');
			console.error(err);
		});
	}

  return (
		<div className="form-container admin-form-container">
			<Animation/>
			<h1 className="admin-login__title">Admin Login</h1>
			<form onSubmit={login} className="form">
				<fieldset>
					<label htmlFor="username">Username</label><br/>
					<div className="form-input">
						<img src={userIcon} alt="username" width={24} className="form-input-img"/>
						<input type="text" id="username" value={username} onChange={usernameOnChange} className="form-input"/>
					</div>
				</fieldset>
				<br/>
				<fieldset>
					<label htmlFor="password">Password</label><br/>
					<div className="form-input">
						<img src={passwordIcon} alt="email" width={24} className="form-input-img"/>
						<input type={isHiddenPassword ? "password" : "text"} id="password" value={password}
									 onChange={passwordOnChange}/>
						<img src={isHiddenPassword ? openEyeIcon : closeEyeIcon} alt="openEye" width={24} className="from-input-eye"
								 onClick={hidePassword}/>
					</div>
				</fieldset>
				<br/>
				<div className="form-to-middle error-message">{errorMessage}</div>
				<br/>
				<div className="form-to-middle">
					<button type="submit" className="form-button">Login&nbsp;&nbsp;&nbsp;&nbsp;&#8594;</button>
				</div>
			</form>
		</div>
	);
};

export default AdminLogin;
