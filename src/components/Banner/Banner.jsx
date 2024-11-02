
import Bannerlog from '../../assets/assets/banner-main.png'
import PropTypes from 'prop-types';

const Banner = ({ handelAddCoin }) => {
  return (
    <div className='mt-5 border border-red-700 bg-gradient-to-r from-[#304a63] via-black to-[#695149] rounded-2xl mb-4'>
      <img className='mt-7 mx-auto mb-5' src={Bannerlog} alt="" />
      <h1 className='text-white text-4xl font-bold text-center mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className='text-white text-sm font-medium text-center mb-5'>Beyond Boundaries Beyond Limits</p>
      <div className='flex justify-center'>
        <button onClick={handelAddCoin} className='bg-[#E7FE29] text-black px-5 py-3 rounded-2xl mb-10 '>Claim Free Credit</button>
      </div>

    </div>
  );
};

Banner.propTypes ={
  handelAddCoin: PropTypes.func
}

export default Banner;