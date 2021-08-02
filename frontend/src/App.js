import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
import Login from './component/Login';
import Registration from './component/Registration';
import Home from './component/Home';
import Main from './component/Main';
import { Modal, Navbar, Nav } from 'react-bootstrap';
import './App.css';

const App = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegistration, setShowRegistration] = useState(false);
	const handleCloseLogin = () => setShowLogin(false);
	const handleShowLogin = () => setShowLogin(true);
	const handleCloseRegistration = () => setShowRegistration(false);
	const handleShowRegistration = () => setShowRegistration(true);
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('user')) {
			dispatch({
				type: 'UPDATE_USER_INFO',
				payload: JSON.parse(localStorage.getItem('user')),
			});
		}
	}, []);

	return (
		<div className='App'>
			<Route exact path='/'>
				{/* navbar  */}
				<Navbar
					collapseOnSelect
					expand='lg'
					variant='dark'
					className='sticky-top nav pt-1 pb-1'
				>
					<div className='container-fluid pr-3'>
						<Navbar.Brand className='col-1 offset-lg-1 offset-xl-1'>
							<h4 className='text-center pl-2'>Project</h4>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse
							id='responsive-navbar-nav'
							className='justify-content-end col-lg-7 col-xl-7 mr-xl-5 mr-lg-4 p-0'
						>
							<Nav className='col-lg-12 p-0 justify-content-lg-around justify-content-xl-around'>
								<Nav.Link className='text-center'>
									<Link
										to='home'
										duration={500}
										smooth={true}
										spy={true}
										offset={0}
										activeClass='active'
										className='text-light link-cursor '
									>
										Home
									</Link>
								</Nav.Link>
								<Nav.Link className='text-center'>
									<Link
										to='service'
										duration={500}
										smooth={true}
										spy={true}
										offset={-32}
										activeClass='active'
										className='text-light link-cursor'
									>
										Service
									</Link>
								</Nav.Link>

								<Nav.Link className='text-center'>
									<Link
										to='about'
										duration={500}
										smooth={true}
										spy={true}
										offset={-55}
										activeClass='active'
										className=' text-light link-cursor'
									>
										About Us
									</Link>
								</Nav.Link>
								<Nav.Link className='text-center'>
									<Link
										to='product'
										duration={500}
										smooth={true}
										spy={true}
										offset={-55}
										activeClass='active'
										className='text-light link-cursor'
									>
										Dashboard
									</Link>
								</Nav.Link>
								<Nav.Link className='text-center'>
									<Link
										to='testimonial'
										duration={500}
										smooth={true}
										spy={true}
										offset={0}
										activeClass='active'
										className=' text-light link-cursor'
									>
										Testimonials
									</Link>
								</Nav.Link>
								<Nav.Link className='text-center'>
									{/* link for login modal */}
									<span
										variant='primary'
										onClick={handleShowLogin}
										className=' text-light link-cursor span-link'
									>
										Login
									</span>
									<Modal
										show={showLogin}
										onHide={handleCloseLogin}
										animation={true}
										centered
									>
										<Modal.Header closeButton>
											<Modal.Title>
												<h4 className='text-success pl-4'>Log in</h4>
											</Modal.Title>
										</Modal.Header>
										<Modal.Body className=''>
											<Login handleCloseLogin={handleCloseLogin} />
										</Modal.Body>
									</Modal>
									{/* link for login modal */}
								</Nav.Link>
								<Nav.Link className='text-center'>
									{/* link for registration modal */}
									<span
										variant='primary'
										onClick={handleShowRegistration}
										className='text-light link-cursor span-link'
									>
										Register
									</span>
									<Modal
										show={showRegistration}
										onHide={handleCloseRegistration}
										animation={true}
										centered
									>
										<Modal.Header closeButton>
											<Modal.Title>
												<h4 className='text-success pl-4'>Register</h4>
											</Modal.Title>
										</Modal.Header>
										<Modal.Body className=''>
											<Registration
												handleCloseRegistration={handleCloseRegistration}
												handleShowLogin={handleShowLogin}
											/>
										</Modal.Body>
									</Modal>
									{/* link for registration modal */}
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</div>
				</Navbar>
			</Route>
			{/* navbar  */}
			<main>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/main'>
						<Main />
					</Route>
				</Switch>
			</main>
		</div>
	);
};

export default App;
