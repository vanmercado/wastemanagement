import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './ClaimEvent.css';

// dependencies for the date picker
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// dependency for loading animation
import ReactLoading from 'react-loading';

const ClaimEvent = ({ handleCloseClaimEvent, updateEvents, event }) => {
	const user = useSelector((state) => state.user);
	const [claimDate, setClaimDate] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const filterOutPassedDates = (date) => {
		return date.getTime() > moment(event.eventDate).subtract(1, 'days');
	};

	const filterOutPassedTimes = (time) => {
		return time.getTime() > moment(event.eventDate).valueOf();
	};

	const claimEventButtonClickHandler = (e) => {
		e.preventDefault();
		setErrorMessage('');
		if (!moment(claimDate).isValid()) {
			return setErrorMessage('Choosing a claim date is required');
		} else {
			setLoading(true);
			let eventBody = {
				recyclerUserId: user._id,
				pickupTime: claimDate,
			};
			axios
				.put(`http://localhost:8000/api/waste/claim/${event._id}`, eventBody)
				.then((res) => {
					if (res.data.error) {
						alert(res.data.error);
					} else {
						alert('Event claimed successfully');
					}
					updateEvents();
					setLoading(false);
					handleCloseClaimEvent();
				})
				.catch((err) => {
					alert('communication error');
					setLoading(false);
				});
		}
	};

	return (
		<form className='container col-10 mb-5 ClaimEvent'>
			{loading && (
				<div className='loading-container'>
					<ReactLoading type={'spokes'} color={'black'} width={100} />
				</div>
			)}
			<div className='text-center'>
				<span className='text-danger'>{errorMessage}</span>
			</div>
			<div className='form-group'>
				<label htmlFor='event-date'>Pickup Date:&nbsp;</label>
				<DatePicker
					id='event-date'
					className='form-control ml-3'
					selected={claimDate}
					required
					onChange={(date) => setClaimDate(date)}
					showTimeSelect
					dateFormat='MMMM d, yyyy h:mm aa'
					filterDate={filterOutPassedDates}
					filterTime={filterOutPassedTimes}
				/>
			</div>
			<button
				className='btn btn-primary btn-block mt-4'
				type='submit'
				onClick={(e) => {
					claimEventButtonClickHandler(e);
				}}
			>
				Claim Event
			</button>
		</form>
	);
};

export default ClaimEvent;
