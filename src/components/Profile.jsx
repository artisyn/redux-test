import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
	const user = useSelector((state) => state.user.value);
	const color = useSelector((state) => state.theme.value);
	console.log(color);
	return (
		<div className="profileContainer" style={{ backgroundColor: color }}>
			<p>Name: {user.name}</p>
			<p>Age: {user.age}</p>
			<p>Email: {user.email}</p>
		</div>
	);
};

export default Profile;
