import React, {useState} from 'react';
import Animation from "../Animation/Animation";
import './Register.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

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
		<div className="register">
			<Animation/>
			<h1>Register</h1>
			<form onSubmit={register}>
				<fieldset>
					<label htmlFor="username">Username</label><br/>
					<input type="text" id="username" value={username} onChange={usernameOnChange}/>
				</fieldset>
				<br/>
				<fieldset>
					<label htmlFor="email">Email</label><br/>
					<input type="email" id="email" value={email} onChange={emailOnChange}/>
				</fieldset>
				<br/>
				<fieldset>
					<label htmlFor="password">Password</label><br/>
					<input type="password" id="password" value={password} onChange={passwordOnChange}/>
				</fieldset>
				<fieldset>
					<label>
						<input
							type="radio"
							name="businessType"
							value="individual"
							checked={!isBusiness}
							onChange={is_businessOnChange}
						/>
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
						Company
					</label>
				</fieldset>
				<div>{errorMessage}</div>
				<br/><br/>
				<button type="submit">Register -></button>
				<div>Already have an account? <Link to="/login" className='link-style'>Login</Link></div>
			</form>
		</div>
	);
};

export default Register;
