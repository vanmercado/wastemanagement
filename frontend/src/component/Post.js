import './Post.css';
import ClaimEvent from './ClaimEvent';
import moment from 'moment';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Post = ({ event, updateEvents }) => {
	const role = useSelector((state) => state.user.role);
	const [loading, setLoading] = useState(false);

	const [showClaimEvent, setShowClaimEvent] = useState(false);
	const handleShowClaimEvent = () => setShowClaimEvent(true);
	const handleCloseClaimEvent = () => setShowClaimEvent(false);

	const deleteEventClickHandler = () => {
		if (window.confirm('Are you sure you want to delete this post?')) {
			setLoading(true);
			axios
				.delete(`http://localhost:8000/api/waste/${event._id}`)
				.then((res) => {
					updateEvents();
					setLoading(false);
					alert('Post deleted');
				})
				.catch((err) => {
					setLoading(false);
					alert('communication error');
				});
		}
	};

	const cancelClaimEventButtonHandler = () => {
		if (window.confirm('Are you sure you want to cancel this event?')) {
			setLoading(true);
			axios
				.put(`http://localhost:8000/api/waste/cancel/${event._id}`)
				.then((res) => {
					if (res.data.error) {
						alert(res.data.error);
					} else {
						alert('Event cancelled');
					}
					updateEvents();
					setLoading(false);
				})
				.catch((err) => {
					alert('communication error');
					setLoading(false);
				});
		}
	};

	const acknowledgePickupButtonClickHandler = () => {
		if (window.confirm('Are you sure you want to acknowledge this pickup?')) {
			setLoading(true);
			let eventBody = {
				acknowledgedDate: Date.now(),
			};
			axios
				.put(
					`http://localhost:8000/api/waste/acknowledge/${event._id}`,
					eventBody
				)
				.then((res) => {
					if (res.data.error) {
						alert(res.data.error);
					} else {
						alert('Event acknowledged successfully');
					}
					updateEvents();
					setLoading(false);
				})
				.catch((err) => {
					alert('communication error');
					setLoading(false);
				});
		}
	};

	return (
		<div className=' mb-3 rounded-lg bg-white border Post'>
			{loading && (
				<div className='loading-container'>
					<ReactLoading type={'spokes'} color={'black'} width={100} />
				</div>
			)}
			<div className='d-flex'>
				<div className='col-1  bg-light text-center pt-2'>
					<b> {event.estimatedWeight} </b> Kg
				</div>
				<div className='col-lg-11 col-xl-11 p-2'>
					<div className='d-flex justify-content-between  '>
						<div className='col-10 p-0'>
							<p>
								<strong className='capitalize mr-1'>{event.eventName}</strong>{' '}
								posted by
								<b className='capitalize ml-1 mr-1'>
									{' '}
									{event.disposerUserId.name}{' '}
								</b>
								{moment(event.datePosted).fromNow()}
							</p>
						</div>
						{role === 'disposer' && (
							<button
								className='btn btn-sm btn-light'
								onClick={deleteEventClickHandler}
							>
								x
							</button>
						)}
					</div>
					<div className='mb-1'>
						<p>
							<b className='mr-1'>Event Date:</b>{' '}
							{moment(event.eventDate).format('MMMM DD, YYYY - h:mm A')}
						</p>
					</div>
					<div className='mb-1'>
						<p>
							<b className='mr-1'>Contact Number:</b>{' '}
							{event.disposerUserId.contactNumber}
						</p>
					</div>
					<div className='mb-1'>
						<p>
							<b>Event Waste Information:</b>
						</p>
					</div>
					<div className='mb-1'>
						<p className=' pl-4 pr-2'> {event.information}</p>
					</div>
					<div className='bottom-buttons'>
						{role === 'recycler' && (
							<>
								{/* button for claiming event */}
								{!event.recyclerUserId && (
									<button
										className='btn btn-success'
										onClick={handleShowClaimEvent}
									>
										Claim This Event
									</button>
								)}
								{/* button for cancelling event */}
								{event.recyclerUserId && !event.acknowledgedDate && (
									<button
										className='btn btn-danger'
										onClick={cancelClaimEventButtonHandler}
									>
										Cancel This Event
									</button>
								)}
								<Modal
									show={showClaimEvent}
									onHide={handleCloseClaimEvent}
									animation={true}
									centered
								>
									<Modal.Header closeButton>
										<Modal.Title>
											<h4 className='text-success pl-2'>Claim Event</h4>
										</Modal.Title>
									</Modal.Header>
									<Modal.Body className=''>
										<ClaimEvent
											handleCloseClaimEvent={handleCloseClaimEvent}
											updateEvents={updateEvents}
											event={event}
										/>
									</Modal.Body>
								</Modal>
							</>
						)}
						{role === 'disposer' && event.recyclerUserId && (
							<div>
								<p className='text-primary '>
									Claimed by{' '}
									<span className='capitalize'>
										{event.recyclerUserId.name}
									</span>
									, Pickup by:{' '}
									<b>
										{moment(event.pickupTime).format('MMMM DD, YYYY - h:mm A')}
									</b>
								</p>
								<p className='text-primary'>
									Contact number of recycler:{' '}
									<b>{event.recyclerUserId.contactNumber}</b>
								</p>
								{/* button for acknowledging pickup */}
								{!event.acknowledgedDate && (
									<button
										className='btn btn-success mt-2'
										onClick={acknowledgePickupButtonClickHandler}
									>
										Acknowledge Pickup
									</button>
								)}
							</div>
						)}
						{event.acknowledgedDate && (
							<p className='text-primary'>
								Acknowledged pickup on{' '}
								{moment(event.acknowledgedDate).format(
									'MMMM DD, YYYY - h:mm A'
								)}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
