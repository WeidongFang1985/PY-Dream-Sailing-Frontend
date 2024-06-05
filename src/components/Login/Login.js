import React from 'react';
import './Login.css';
import Animation from "../Animation/Animation";

const Login = () => {
  return (
		<div className="login">
			<Animation/>

			<h1>Login</h1>
			<span>Email</span><br/>
			<input/><br/>
			<span>Password</span><br/>
			<input/><br/>
		</div>
	);
};

export default Login;
