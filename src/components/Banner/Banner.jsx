import Bannerlog from '../../assets/assets/banner-main.png'


const Banner = () => {
  return (
    <div className='mt-5 border border-red-700 bg-black rounded-2xl'>
      <img className='mt-7 mx-auto mb-5' src={Bannerlog} alt="" />
      <h1 className='text-white text-4xl font-bold text-center mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className='text-white text-sm font-medium text-center mb-5'>Beyond Boundaries Beyond Limits</p>
      <button className='bg-[#E7FE29] text-white px-5 py-3 rounded-2xl mb-10'>Claim Free Credit</button>

    </div>
  );
};

export default Banner;