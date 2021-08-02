import './Testimonial.css';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
	return (
		<div className='slides container col-xl-6 justify-content-center d-flex'>
			<Carousel className='w-100 carousel'>
				<Carousel.Item className=''>
					<div className='d-flex  flex-wrap justify-content-center carousel-item text-center align-items-center'>
						<div className='col-12 text-center d-flex justify-content-center '>
							<img
								className='d-block rounded-circle'
								src='https://media.istockphoto.com/photos/young-female-professional-at-desk-smiling-to-camera-picture-id1011793090?k=6&m=1011793090&s=612x612&w=0&h=AGpz4u85fP2tqoC3oalwTvU_qu5slBuCbxfR5Z-Ds-8='
								alt='First slide'
							/>
						</div>
						<h4 className='  text-dark'>
							“ Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Delectus et repudiandae nesciunt incidunt aliquam dolore illum
							velit unde quae ipsa iste maxime odio consequuntur officiis natus,
							cum facere. ”<b>- Hellen Wright</b>
						</h4>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className='d-flex  flex-wrap justify-content-center carousel-item text-center align-items-center'>
						<div className='col-12 text-center d-flex justify-content-center '>
							<img
								className='d-block rounded-circle'
								src='https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=6&m=1016761216&s=612x612&w=0&h=j-DyZTSqmnhoHKsJdGmiMPnungpHiq9UTrvx4UylMQI='
								alt='First slide'
							/>
						</div>

						<h4 className=' col-12 text-dark '>
							“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
							debitis ratione ipsum? Voluptas eius quibusdam eos neque impedit
							ad laboriosam unde cupiditate natus exercitationem. ”
							<b> - Dauglas McNum</b>
						</h4>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className='d-flex flex-wrap justify-content-center carousel-item text-center align-items-center'>
						<div className='col-12 text-center d-flex justify-content-center '>
							<img
								className='d-block rounded-circle'
								src='https://i.pinimg.com/236x/c7/c9/34/c7c934dc9e462d87aeca37513481f8db--professional-headshots-corporate-headshots.jpg'
								alt='First slide'
							/>
						</div>
						<h4 className='col-12 text-dark '>
							“ Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sunt
							similique ab deserunt excepturi numquam nemo quibusdam ex saepe,
							quod nisi aliquam, omnis ullam nihil minus mollitia quis! ”
							<b>- Patty Smith</b>
						</h4>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Testimonial;
