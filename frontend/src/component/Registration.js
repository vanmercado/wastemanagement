import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';

// dependency for loading animation
import ReactLoading from 'react-loading';

const Registration = ({ handleCloseRegistration, handleShowLogin }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [role, setRole] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [location, setLocation] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const registerButtonClickHandler = (e) => {
		e.preventDefault();
		setErrorMessage('');
		if (
			username === '' ||
			password === '' ||
			name === '' ||
			role === '' ||
			contactNumber === '' ||
			location === ''
		) {
			return setErrorMessage("Don't leave any input blank");
		} else {
			setLoading(true);
			let registerBody = {
				username,
				password,
				name: name.trim().toLowerCase(),
				role,
				contactNumber: contactNumber.trim(),
				location: location.trim().toLowerCase(),
			};
			axios
				.post('http://localhost:8000/api/user', registerBody)
				.then((res) => {
					if (res.data.error) {
						setErrorMessage(res.data.error);
					} else {
						alert('Registration successful');
						handleCloseRegistration();
						handleShowLogin();
					}
					setLoading(false);
				})
				.catch((err) => {
					alert('communication error');
					setLoading(false);
				});
		}
	};

	return (
		<form className='container col-10 mb-5 Registration'>
			{loading && (
				<div className='loading-container'>
					<ReactLoading type={'spokes'} color={'black'} width={100} />
				</div>
			)}
			<div className='text-center'>
				<span className='text-danger'>{errorMessage}</span>
			</div>
			<div className='form-group'>
				<label htmlFor='registration-username'>Username:</label>
				<input
					id='registration-username'
					className='form-control'
					type='text'
					autoFocus
					required
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='registration-password'>Password:</label>
				<input
					id='registration-password'
					className='form-control'
					type='password'
					required
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='registration-name'>Company name:</label>
				<input
					id='registration-name'
					className='form-control'
					type='text'
					required
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='registration-role'>Role:</label>
				<select
					name='role'
					id='registration-role'
					className='form-control'
					value={role}
					onChange={(e) => {
						setRole(e.target.value);
					}}
				>
					<option value='' hidden>
						--- Select Role ---
					</option>
					<option value='disposer'>Disposer</option>
					<option value='recycler'>Recycler</option>
				</select>
			</div>
			<div className='form-group'>
				<label htmlFor='registration-number'>Contact number:</label>
				<input
					id='registration-number'
					className='form-control'
					type='text'
					required
					value={contactNumber}
					onChange={(e) => {
						setContactNumber(e.target.value);
					}}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='registration-location'>Location:</label>
				<input
					id='registration-location'
					className='form-control'
					type='text'
					required
					value={location}
					onChange={(e) => {
						setLocation(e.target.value);
					}}
				/>
			</div>
			<button
				className='btn btn-primary btn-block mt-4'
				type='submit'
				onClick={(e) => {
					registerButtonClickHandler(e);
				}}
			>
				Register
			</button>
		</form>
	);
};

export default Registration;
