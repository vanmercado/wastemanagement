import '../App.css';
import { Link } from 'react-scroll';
import { useEffect } from 'react';
import Service from './Service';
import About from './About';
import gmailicon from '../photos/icon/gmailicon.png';
import iconLocation from '../photos/icon/location.png';
import iconCall from '../photos/icon/call.png';
import fbicon from '../photos/icon/fbicon.png';
import iconSend from '../photos/icon/send.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Product from './Product';
import Testimonial from './Testimonial';

const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div>
			<div id='home'></div>
			<div className='banner'>
				<div className='content-area h-100 d-flex justify-content-center align-items-center'>
					<div className='content text-center'>
						<h1 className='text-white welcome'>
							Our Waste, Our Responsibility
						</h1>
						<div className='content text-white d-flex welcome'>
							<h3>
								We can all recycle, We can all do our part. Lets make it better!
							</h3>
						</div>
						<Link
							to='contact'
							duration={500}
							smooth={true}
							spy={true}
							offset={0}
							activeClass='active'
							className='btn btn-danger mt-5 welcome-btn'
						>
							EXPLORE MORE
						</Link>
					</div>
				</div>
			</div>
			<div id='service'></div>
			<div className=' about '>
				<Service />
			</div>
			<div id='about'></div>
			<div className=' section-3'>
				<About />
			</div>
			<div id='product'></div>
			<div className='section-4'>
				<div className='text-center mt-5 mb-4'></div>
				<div className='container col-xl-10'>
					<Product />
				</div>
			</div>
			<div id='testimonial'></div>
			<div className='section-5 text-center  p-5'>
				<div className='section-5-border'>
					<h2>Testimonials</h2>
				</div>
				<Testimonial />
			</div>
			{/* Footer  */}
			<footer className=' text-lg-start footer '>
				<div className=' container d-xl-flex'>
					<div className='col-xl-3 col-lg-3'>
						<img src='' alt='' />
						<h1>COMPANY IMAGE</h1>
					</div>
					<div className='col-xl-3 col-lg-3 p-2'>
						<h6>Contact Us</h6>
						<div className='container '>
							<div className='d-flex ml-3 '>
								<div className='mr-3 '>
									<img className='icon' src={iconLocation} alt='' />
								</div>
								<div>
									<p>Bins</p>
									<p>23 Forests Rd, Manila</p>
								</div>
							</div>
							<div className='d-flex  ml-3 '>
								<div className='mr-3 '>
									<img className='icon' src={iconCall} alt='' />
								</div>
								<div>
									<p>Call us:</p>
									<p>(03) 547 0642</p>
								</div>
							</div>
							<div className='d-flex ml-3 '>
								<div className='mr-3'>
									<img className='icon ' src={iconSend} alt='' />
								</div>
								<div>
									<p>Email Us:</p>
									<p>info@bins.co</p>
								</div>
							</div>
						</div>
						<div className='mb-2 ml-3 mt-3'>
							<h6>Keep in Touch</h6>
							<img className='icon mr-3 ml-3' src={fbicon} alt='' />
							<img className='icon' src={gmailicon} alt='' />
						</div>
					</div>
					<div className='col-xl-8 col-lg-8'>
						<div className='p-2 '>
							<div className='mapouter'>
								<div className='gmap_canvas'>
									<iframe
										title='gmap-company'
										height='250'
										id='gmap_canvas'
										src='https://maps.google.com/maps?q=23%20Forests%20Rd,%20Nelson&t=&z=13&ie=UTF8&iwloc=&output=embed'
										frameBorder='0'
										scrolling='no'
										marginHeight='0'
										marginWidth='0'
										className='col-12'
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='text-center p-3 copyright'>© 2021 Copyright:</div>
			</footer>
			{/* Footer  */}
		</div>
	);
};

export default Home;
