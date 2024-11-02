import { CiSquareRemove } from "react-icons/ci";
import PropTypes from "prop-types";

const SelectedPlayer = ({ selectedPlayer, handleRemovePlayer}) => {

  const { id, player_img, player_name, type, price } = selectedPlayer

  return (
    <div>
      <div className="flex justify-between items-center border-2 px-4 rounded-lg bg-gray-100 mt-3">
        <div className='flex gap-4 items-center'>
          <div className="w-20">
            <img className='rounded-full py-3 w-full' src={player_img} alt="" />
          </div>
          <div>
            <h3 className='font-bold'>{player_name}</h3>
            <p className='text-gray-600'>{type}</p>
            <p className='text-gray-600'>Price: ${price}</p>
          </div>
        </div>
        <button><CiSquareRemove onClick={()=>handleRemovePlayer(id, price)} className="text-3xl text-red-700"></CiSquareRemove></button>
      </div>
    </div>
  );
};

SelectedPlayer.propTypes = {
  selectedPlayer: PropTypes.object.isRequired,
  handleRemovePlayer: PropTypes.func
}

export default SelectedPlayer;