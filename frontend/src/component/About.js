import './About.css';
import CallIcon from '../photos/icon/call-icon.png';

const About = () => {
	return (
		<div className=' mb-5  container col-lg-12 col-xl-10'>
			<div className=' d-xl-flex d-lg-flex'>
				<div className='col-lg-6 col-xl-6 align-items-center d-flex'>
					<div className='container '>
						<h3 className='d-flex'>
							<div className='red-line bg-danger'></div>
							<span className='text-danger mr-2'>WELCOME TO </span>
							SWM
						</h3>
						<div className='container indent'>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
								temporibus pariatur iusto alias. Nemo corrupti, explicabo
								tempore quasi cum optio ex blanditiis autem doloribus cupiditate
								perspiciatis officia temporibus a amet eveniet vel natus sed! A
								obcaecati natus accusamus rem alias fugit, placeat velit ea
								dolorum
							</p>
							<br />
							<p>
								Deleniti iure ad nihil impedit nisi nemo quibusdam architecto
								exercitationem voluptatibus ratione ut qui labore iusto sit
								facilis. Eum voluptatibus explicabo tenetur fugiat sapiente
								asperiores incidunt, vero at rerum, perspiciatis totam
								architecto molestiae necessitatibus quaerat.
							</p>
							<br />
							<button className='btn btn-outline-danger'>DISCOVER MORE</button>
						</div>
					</div>
				</div>
				<div className=' col-lg-6 col-xl-6  d-flex justify-content-center'>
					<div className=' about-box mt-5 mb-5'>
						<div className='about-red-box bg-danger'></div>
						<div className='about-address-box text-center'>
							<h3 className='text-danger mt-3'>Your Collection</h3>
							<h4>-- Address --</h4>
							<form className='d-xl-flex flex-wrap container  justify-content-center'>
								<input
									className='form-control '
									id='input'
									type='text'
									placeholder=' Name'
								/>

								<input
									className='form-control '
									type='text'
									id='input'
									placeholder=' Phone'
								/>
								<input
									className='form-control '
									type='text'
									id='input'
									placeholder=' Your Street Address'
								/>
								<fieldset className=' d-flex col-12 mt-3'>
									<div className=' custom-control custom-radio col-6'>
										<input
											type='radio'
											className='custom-control-input '
											id='Radio1'
											name='customRadio'
										/>
										<label htmlFor='Radio1' className='custom-control-label'>
											Urban Streets
										</label>
									</div>
									<div className=' custom-control custom-radio col-6'>
										<input
											type='radio'
											id='customRadio1'
											name='customRadio'
											className='custom-control-input'
											required
										/>
										<label
											className='custom-control-label mr-md-2'
											htmlFor='customRadio1'
										>
											Rural Streets
										</label>
									</div>
								</fieldset>
							</form>
							<div className=' about-box-send mt-4'>
								<div className=' col-6'>
									<img
										className='call-icon'
										src={CallIcon}
										alt='phone call icon'
									/>
									<span className='number'> 03 547 00642</span>
								</div>
								<div className='col-6 btn btn-danger' id='send'>
									{' '}
									Send
								</div>
							</div>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
