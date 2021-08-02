import './Main.css';
import arrowup from '../photos/icon/arrowup.png';
import arrowdown from '../photos/icon/arrowdown.png';

const SideBar = () => {
	return (
		<div>
			<div className='d-flex justify-content-start p-3 pl-4 sidebar-names  align-items-center'>
				<h5 className='mr-3 p-0'>1</h5>
				<img src={arrowup} className='mr-3 arrowicon' alt='arrowup icon' />
				<img
					className='rounded-circle sidebar-img mr-3'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBzFrcftoq7oCL1FkCG79TegC8DK8YU2Jpj9nvvOzvRx8iUg6-qyCtNMiruBhsEFkx60&usqp=CAU'
					alt=''
				/>
				<h5>w/technews</h5>
			</div>
			<div className='d-flex justify-content-start p-3 pl-4 sidebar-names  align-items-center'>
				<h5 className='mr-3 p-0'>2</h5>
				<img src={arrowup} className='mr-3 arrowicon' alt='arrowup icon' />
				<img
					className='rounded-circle sidebar-img mr-3'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4y4fSNBl3nWKzFNxCMe02GZEaUbwerztmS5pwzx1lEbf8BFj5lVRovfdzHin8QRZLDPc&usqp=CAU'
					alt=''
				/>
				<h5>m/wasteapp</h5>
			</div>
			<div className='d-flex justify-content-start p-3 pl-4 sidebar-names  align-items-center'>
				<h5 className='mr-3 p-0'>3</h5>
				<img src={arrowup} className='mr-3 arrowicon' alt='arrowup icon' />
				<img
					className='rounded-circle sidebar-img mr-3'
					src='https://pbs.twimg.com/profile_images/732692153978085376/xkGimw1M.jpg'
					alt=''
				/>
				<h5>a/Philippines</h5>
			</div>
			<div className='d-flex justify-content-start p-3 pl-4 sidebar-names  align-items-center'>
				<h5 className='mr-3 p-0'>4</h5>
				<img src={arrowup} className='mr-3 arrowicon' alt='arrowup icon' />
				<img
					className='rounded-circle sidebar-img mr-3'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3O9wU-K-dHxTw3_2qoRqpT4oMaRZW_BQ-g&usqp=CAU'
					alt=''
				/>
				<h5>p/nature</h5>
			</div>
			<div className='d-flex justify-content-start p-3 pl-4 sidebar-names  align-items-center'>
				<h5 className='mr-3 p-0'>5</h5>
				<img src={arrowdown} className='mr-3 arrowicon' alt='arrowup icon' />
				<img
					className='rounded-circle sidebar-img mr-3'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkOd6BwCU28TH8MKM2wqT4DBOifdX4SrEiqxtkZnPn15CGwqsBpmTLRRj3Mr23q9MHXE&usqp=CAU'
					alt=''
				/>
				<h5>p/wilderness</h5>
			</div>
		</div>
	);
};

export default SideBar;
