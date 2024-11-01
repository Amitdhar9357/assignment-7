import log from '../../assets/assets/logo.png'
import { BsCoin } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className='flex justify-between  items-center'>
      <img src={log} alt="" />
      <div className='flex gap-20'>
        <ul className='flex gap-10'>
          <li className='text-gray-500'>Home</li>
          <li className='text-gray-500'>Fixture</li>
          <li className='text-gray-500'>Teams</li>
          <li className='text-gray-500'>Schedules</li>
        </ul>
        <button className='flex items-center gap-1 font-semibold'> 0 Coin <BsCoin className='text-yellow-500' /> </button>
      </div>
    </nav>
  );
};

export default Nav;