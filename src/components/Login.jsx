import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
	const dispatch = useDispatch();
	return (
		<div className="loginContainer">
			<button
				onClick={() => {
					dispatch(
						login({
							name: 'Artion',
							age: 32,
							email: 'artions1@gmail.com',
						})
					);
				}}
			>
				Login
			</button>
			<button
				onClick={() => {
					dispatch(logout());
				}}
			>
				Logout
			</button>
		</div>
	);
};

export default Login;
