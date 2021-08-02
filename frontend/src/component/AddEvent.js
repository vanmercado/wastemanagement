import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './AddEvent.css';

// dependencies for the date picker
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// dependency for loading animation
import ReactLoading from 'react-loading';

const AddEvent = ({ handleCloseAddEvent, updateEvents }) => {
	const user = useSelector((state) => state.user);
	const [eventName, setEventName] = useState('');
	const [eventLocation, setEventLocation] = useState('');
	const [eventDate, setEventDate] = useState('');
	const [estimatedWeight, setEstimatedWeight] = useState('');
	const [information, setInformation] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const filterOutPassedDates = (date) => {
		const yesterday = moment().subtract(1, 'days');
		return date.getTime() > yesterday;
	};

	const filterOutPassedTimes = (time) => {
		return time.getTime() > Date.now();
	};

	const addEventButtonClickHandler = (e) => {
		e.preventDefault();
		setErrorMessage('');
		if (
			eventName.trim() === '' ||
			eventLocation.trim() === '' ||
			!moment(eventDate).isValid() ||
			estimatedWeight.trim() === '' ||
			information.trim() === ''
		) {
			return setErrorMessage("Don't leave any input blank");
		} else {
			setLoading(true);
			let eventBody = {
				disposerUserId: user._id,
				eventName: eventName.trim().toLowerCase(),
				eventLocation: eventLocation.trim().toLowerCase(),
				eventDate,
				estimatedWeight: Number(estimatedWeight),
				information,
			};
			axios
				.post('http://localhost:8000/api/waste', eventBody)
				.then((res) => {
					updateEvents();
					alert('Event added successfully');
					setLoading(false);
					handleCloseAddEvent();
				})
				.catch((err) => {
					alert('communication error');
					setLoading(false);
				});
		}
	};

	return (
		<form className='container col-10 mb-5 AddEvent'>
			{loading && (
				<div className='loading-container'>
					<ReactLoading type={'spokes'} color={'black'} width={100} />
				</div>
			)}
			<div className='text-center'>
				<span className='text-danger'>{errorMessage}</span>
			</div>
			<div className='form-group'>
				<label htmlFor='event-name'>Event Name:</label>
				<input
					id='event-name'
					className='form-control'
					type='text'
					autoFocus
					required
					value={eventName}
					onChange={(e) => {
						setEventName(e.target.value);
					}}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='event-location'>Event Location:</label>
				<input
					id='event-location'
					className='form-control'
					type='text'
					required
					value={eventLocation}
					onChange={(e) => {
						setEventLocation(e.target.value);
					}}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='event-date mr-2'>Event Date:</label>
				<DatePicker
					id='event-date'
					className='form-control ml-4'
					selected={eventDate}
					required
					onChange={(date) => setEventDate(date)}
					showTimeSelect
					dateFormat='MMMM d, yyyy h:mm aa'
					filterDate={filterOutPassedDates}
					filterTime={filterOutPassedTimes}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='estimated-weight'>
					Estimated&nbsp;Weight (in&nbsp;kilos):
				</label>
				<input
					id='estimated-weight'
					className='form-control'
					type='number'
					required
					value={estimatedWeight}
					onChange={(e) => {
						let estimatedWeightValue = e.target.value < 0 ? 0 : e.target.value;
						setEstimatedWeight(estimatedWeightValue);
					}}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='event-information'>Event Waste Information:</label>
				<textarea
					id='event-information'
					className='form-control'
					value={information}
					onChange={(e) => {
						setInformation(e.target.value);
					}}
				/>
			</div>
			<button
				className='btn btn-primary btn-block mt-4'
				type='submit'
				onClick={(e) => {
					addEventButtonClickHandler(e);
				}}
			>
				Add Event
			</button>
		</form>
	);
};

export default AddEvent;
