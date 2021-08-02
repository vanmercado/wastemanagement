import React from 'react';
import './Product.css';
import helpinghand from '../photos/icon/helpinghand.png';
import recycleicon from '../photos/icon/recycleicon.png';
import membericon from '../photos/icon/membericon.png';
import CountUp from 'react-countup';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import VisibilitySensor from 'react-visibility-sensor';

const Product = () => {
	const [userCount, setUserCount] = useState(0);
	const [wastesMonth, setWastesMonth] = useState(0);
	const [wastesYear, setWastesYear] = useState(0);
	const [focus, setFocus] = useState(false);

	useEffect(() => {
		axios('http://localhost:8000/api/statistics').then((res) => {
			setUserCount(res.data.userCount);
			setWastesMonth(res.data.wastesMonth);
			setWastesYear(res.data.wastesYear);
		});
	}, []);

	return (
		<div className='d-lg-flex d-flex-xl mb-5  text-center ' data-aos='fade-up'>
			<VisibilitySensor
				onChange={(isVisible) => {
					if (isVisible) {
						setFocus(true);
					}
				}}
			>
				<div className='service-box  col-xl-4 col-lg-4 ' id='service-boxs'>
					<img id='product-icon' src={helpinghand} alt='helping hand icon' />
					<h2 className='product-number'>
						<CountUp start={focus ? 0 : null} end={wastesYear} duration={5} />{' '}
						Kg
					</h2>
					<p>Recycled waste this year</p>
				</div>
			</VisibilitySensor>

			<div className='service-box  col-xl-4 col-lg-4 '>
				<img id='product-icon' src={recycleicon} alt='recycle icon' />
				<h2 className='product-number'>
					<CountUp start={focus ? 0 : null} end={wastesMonth} duration={5} /> Kg
				</h2>
				<p>Recycled waste this month</p>
			</div>
			<div className='service-box col-xl-4 col-lg-4  '>
				<img id='product-icon' src={membericon} alt='members icon' />
				<h2 className='product-number'>
					<CountUp start={focus ? 0 : null} end={userCount} duration={7} />
				</h2>
				<p>Members</p>
			</div>
		</div>
	);
};

export default Product;
