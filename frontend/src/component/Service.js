import 'aos/dist/aos.css';
import './Service.css';
import ImgRes2 from '../photos/wastem/recyclers.jpg';
import ImgRes from '../photos/wastem/disposers.jpg';

const Service = () => {
	return (
		<div className=' container col-lg-12 col-xl-10'>
			<div
				className=' d-lg-flex d-xl-flex justify-content-center container-fluid'
				data-aos='fade-up'
			>
				<div className='div-product col-xl-6 mt-5'>
					<img
						className='img-product'
						src={ImgRes}
						alt='producct photo for residential'
					/>
					<div className='product-title'>
						<h2>FOR WASTE DISPOSERS</h2>
					</div>
					<button className='btn btn-danger product-btn'>LEARN MORE</button>
				</div>
				<div className='div-product col-xl-6 mt-5'>
					<img
						className='img-product'
						src={ImgRes2}
						alt='producct photo for residential'
					/>
					<div className='product-title'>
						<h2>FOR RECYCLERS</h2>
					</div>
					<button className='btn btn-danger product-btn'>LEARN MORE</button>
				</div>
			</div>
			<div
				className='  d-lg-flex d-xl-flex justify-content-center container-fluid col-lg-12 mb-5'
				data-aos='fade-up'
			>
				<div className='product-box one col-xl-4 mt-5 '>
					<h2 className='mt-2 ml-2'>OPPORTUNITES TOO GOOD TO WASTE</h2>
					<div className='container col-12 '>
						<p className='product-p'>
							<small>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium consequuntur reprehenderit repudiandae deleniti sint
								ea incidunt molestiae dolorum alias veritatis quasi quia qui,
								aliquam suscipit eveniet et
							</small>
						</p>
					</div>
					<button className=' product-box-btn mt-3 ml-3 btn btn-danger btn-sm'>
						Read More
					</button>
				</div>
				<div className='product-box two col-xl-4 mt-5 '>
					<h2 className='mt-2 mb-4 ml-2'>FIND A REFUSE TRANSFER STATION</h2>
					<form className=' col-12'>
						<input
							type='text'
							placeholder='No.:'
							className='form-control mb-3  '
							id='product-input'
						/>
						<input
							type='text'
							placeholder='Your Street'
							className='form-control'
							id='product-input'
						/>
					</form>
					<button className='product-box-btn mt-3 ml-3 btn btn-danger btn-sm'>
						Go
					</button>
				</div>
				<div className='product-box three col-xl-4 mt-5 '>
					<h2 className='mt-2 ml-2'>WHO WE ARE</h2>
					<br />
					<div className='container col-12 '>
						<p className='product-p'>
							<small>
								Natus, facere! Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Illum sequi dolore libero quaerat nam rerum
								placeat ex accusantium assumenda, similique ducimus earum magni
								ut tempora adipisci impedit dolor temporibus minima.
							</small>
						</p>
					</div>
					<button className='product-box-btn mt-3 ml-3 btn btn-danger btn-sm'>
						Read More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Service;
