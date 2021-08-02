import './Main.css';
import Post from './Post';
import logo from '../photos/wastem/recyclers.jpg';
import tryicon from '../photos/icon/tryicon.png';
import SideBar from './SideBar';
import AddEvent from './AddEvent';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import ReactLoading from 'react-loading';

const Main = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);
	const [events, setEvents] = useState([]);
	const [page, setPage] = useState(localStorage.getItem('page'));
	const [previousPage, setPreviousPage] = useState(null);
	const [nextPage, setNextPage] = useState(null);
	const [paginationCount, setPaginationCount] = useState([]);
	const [loading, setLoading] = useState(false);

	const [showAddEvent, setShowAddEvent] = useState(false);
	const handleShowAddEvent = () => setShowAddEvent(true);
	const handleCloseAddEvent = () => setShowAddEvent(false);

	if (!localStorage.getItem('user')) {
		history.push('/');
	}

	const logoutButtonClickHandler = () => {
		if (window.confirm('Are you sure you want to log out?')) {
			localStorage.clear();
			dispatch({ type: 'UPDATE_USER_INFO', payload: {} });
			history.push('/');
		}
	};

	const adjacentPageClickHandler = (page) => {
		if (page !== null) {
			localStorage.setItem('page', page);
			setPage(page);
		}
	};

	const numberPageClickHandler = (num) => {
		let newPage = `?page=${num}`;
		localStorage.setItem('page', newPage);
		setPage(newPage);
	};

	const updateEvents = () => {
		setLoading(true);
		axios(`http://localhost:8000/api/waste/${user._id}/${user.role}${page}`)
			.then((res) => {
				setEvents(res.data.wastes);
				setPreviousPage(res.data.previous);
				setNextPage(res.data.next);
				// for pagination
				let paginationCountIteration = Math.ceil(res.data.count / 10);
				let paginationArray = [];
				for (let i = 1; i <= paginationCountIteration; i++) {
					paginationArray.push(i);
				}
				setPaginationCount(paginationArray);
				setLoading(false);
			})
			.catch((err) => {
				alert('communication error');
				setLoading(false);
			});
	};

	useEffect(() => {
		if (user) {
			setLoading(true);
			axios(`http://localhost:8000/api/waste/${user._id}/${user.role}${page}`)
				.then((res) => {
					setEvents(res.data.wastes);
					setPreviousPage(res.data.previous);
					setNextPage(res.data.next);
					// for pagination
					let paginationCountIteration = Math.ceil(res.data.count / 10);
					let paginationArray = [];
					for (let i = 1; i <= paginationCountIteration; i++) {
						paginationArray.push(i);
					}
					setPaginationCount(paginationArray);
					setLoading(false);
				})
				.catch((err) => {
					alert('communication error');
					setLoading(false);
				});
		}
	}, [user, page]);

	return (
		<div className='main-body Main pb-5'>
			<div className='nav-div d-flex justify-content-between'>
				<h6 className='text-white pl-5 pt-2'>Project</h6>
				<h6 className='pt-2 text-light pr-5'>
					<span>
						<b className='text-danger'>CALL US:</b>
					</span>{' '}
					(03) 547 0642
				</h6>
			</div>
			<div className='d-lg-flex d-xl-flex main-nav text-center sticky-top justify-content-around p-xl-1 p-lg-1'>
				<h5 className='col-lg-2 col-xl-2  pt-3 '>SWM</h5>
				<form className=' col-lg-8 col-xl-8 p-lg-2 p-xl-2'>
					<input
						className='form-control pl-3  btn-sm col-lg-11 col-xl-11 offset-lg-0 offset-xl-0'
						type='text'
						placeholder='Search'
					/>
				</form>
				<button
					className='btn btn-outline-danger border-0 col-md-2 col-lg-1 col-xl-1 offset-0'
					onClick={logoutButtonClickHandler}
				>
					Log out
				</button>
			</div>
			<div className=' container'>
				<div className='mt-4 '>
					<h6>Trending Today</h6>
					<div className='d-flex mt-3'>
						<div className='trens-box box1 col-lg-3 rounded-lg mr-2  '>
							<h5 className='mt-2 ml-2 trends-p'>
								<b className=''>The Ocean Plastic Pollution Problem</b>
								<h6>Lorem, ipsum dolor sit amet</h6>
							</h5>
						</div>
						<div className='trens-box box2 col-lg-3 rounded-lg mr-2  '>
							<h5 className='mt-2 ml-2 trends-p'>
								<b>Sustainable Hospitals: Eco-Friendly</b>
								<h6>Similique, repudiandae!</h6>
							</h5>
						</div>

						<div className='trens-box box3 col-lg-3 rounded-lg mr-2  '>
							<h5 className='mt-2 ml-2 trends-p'>
								<b>Waste Management Tips</b>
								<h6>ipsum dolor sit amet consectetur adipisicing elit.</h6>
							</h5>
						</div>
						<div className='trens-box box4 col-lg-3 rounded-lg mr-2  '>
							<h5 className='mt-2 ml-2 trends-p '>
								<b>Environmental Literacy Level Comparison</b>
								<h6>Lorem, ipsum dolor sit amet </h6>
							</h5>
						</div>
					</div>
				</div>
				<div className='mt-4'>
					<div className='container  p-0 d-lg-flex d-xl-flex justify-content-between'>
						<div className='col-lg-8 p-0 '>
							<div className='d-flex mb-3 p-3 bg-white border'>
								{/* buttons for disposer */}
								{user && user.role === 'disposer' && (
									<>
										<button
											className='col btn btn-outline-success'
											onClick={handleShowAddEvent}
										>
											Add an Event
										</button>
										<Modal
											show={showAddEvent}
											onHide={handleCloseAddEvent}
											animation={true}
											centered
										>
											<Modal.Header closeButton>
												<Modal.Title>
													<h4 className='text-success ml-3'>Add an Event</h4>
												</Modal.Title>
											</Modal.Header>
											<Modal.Body className=''>
												<AddEvent
													handleCloseAddEvent={handleCloseAddEvent}
													updateEvents={updateEvents}
												/>
											</Modal.Body>
										</Modal>
									</>
								)}
								{/* buttons for disposer */}
							</div>

							{/* all events here */}
							<div className='mb-5 posts-area'>
								{loading && (
									<div className='loading-container'>
										<ReactLoading type={'spokes'} color={'black'} width={100} />
									</div>
								)}
								{events.map((event, index) => {
									return (
										<Post
											key={`event-post-${index}`}
											event={event}
											updateEvents={updateEvents}
										/>
									);
								})}
								{/* pagination */}
								<nav aria-label='Page navigation example'>
									<ul className='pagination'>
										<li className='page-item'>
											<button
												className='page-link'
												onClick={() => adjacentPageClickHandler(previousPage)}
											>
												Previous
											</button>
										</li>
										{paginationCount.map((num) => (
											<li className='page-item' key={`page-item-${num}`}>
												<button
													className={`page-link ${
														Number(page.slice(6)) === num
															? 'bg-primary text-light'
															: null
													}`}
													onClick={() => {
														numberPageClickHandler(num);
													}}
												>
													{num}
												</button>
											</li>
										))}
										<li className='page-item'>
											<button
												className='page-link'
												onClick={() => adjacentPageClickHandler(nextPage)}
											>
												Next
											</button>
										</li>
									</ul>
								</nav>
							</div>
							{/* all events here */}
						</div>
						<div className=' col-lg-4 mb-5 p-0 ml-lg-4 ml-xl-4'>
							<div className='bg-white mb-3 border'>
								<div className='side-bar'>
									<img
										src={logo}
										alt='top community logo'
										className='side-logo w-100'
									/>
									<h6 className='side-top-com'>Top News Communities</h6>
								</div>
								<div>
									<SideBar />
									<div className='d-flex pl-3 mb-3 mt-2'>
										<p className='sidebar-topic text-primary'>
											<b>Top</b>
										</p>
										<p className='sidebar-topic text-primary'>
											<b>Near You</b>
										</p>
										<p className='sidebar-topic text-primary'>
											<b>Sports</b>
										</p>
										<p className='sidebar-topic text-primary'>
											<b>Aww</b>
										</p>
									</div>
								</div>
							</div>
							<div className='bg-white mb-3 pb-2 border'>
								<div className='d-flex pt-3 '>
									<div className='col-2'>
										<img src={tryicon} alt='tryicon' className='tryicon' />
									</div>
									<div className='col-9 d-flex flex-wrap '>
										<p>Premium</p>
										<p>The best SWM experience, with monthly Coins</p>
									</div>
								</div>
								<div className='pb-2 pl-3 pr-3 mt-2'>
									<button className='btn btn-danger btn-small btn-block'>
										Try Now
									</button>
								</div>
							</div>
							<div className='bg-white container border '>
								<div>
									<div className='d-flex	justify-content-between col-10'>
										<span>
											<small>User Agreement</small>
										</span>
										<span>
											<small>Content Policy</small>
										</span>
									</div>
									<div className='d-flex	justify-content-between col-12'>
										<span>
											<small>Privacy Policy</small>
										</span>
										<span>
											<small>Monderator Guidelines</small>
										</span>
									</div>
								</div>
								<div className='text-center mb-1'>
									<span>
										<small>© 2021 Waste Management</small>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
