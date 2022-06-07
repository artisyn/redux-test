import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

const ChangeColor = () => {
	const dispatch = useDispatch();
	const [color, setColor] = useState('');
	const handleChange = (e) => {
		setColor(e.target.value);
	};

	return (
		<div>
			<input type="text" value={color} onChange={handleChange}></input>
			<button
				onClick={() => {
					dispatch(changeColor(color));
				}}
			>
				Change Color
			</button>
		</div>
	);
};

export default ChangeColor;
