import React, { useState } from 'react';
import './Login.css';
import Animation from "../Animation/Animation";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword ] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);

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
				"email":email,"password":password
			});
		} catch (e) {
			return e.response;
		}
	};

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
			if (res.status === 201) {
				localStorage.setItem('userData', JSON.stringify(res.data));
				navigate('/');
			}})

			console.log(email, password);
	}



  return (
		<div className="login">
			<Animation/>
			<h1>Login</h1>
			<form onSubmit={login}>
				<fieldset>
					<label htmlFor="email">Email</label><br/>
					<input type="email" id="email" value={email} onChange={emailOnChange}/>
				</fieldset>
				<br/>
				<fieldset>
					<label htmlFor="password">Password</label><br/>
					<input type="password" id="password" value={password} onChange={passwordOnChange}/>
				</fieldset>

				<div>{errorMessage}</div>
				<br/><br/>
				<button type="submit">Login -></button>
			</form>
		</div>
	);
};

export default Login;
