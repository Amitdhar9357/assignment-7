import PropTypes from "prop-types";

const Player = ({ player, handelSelectedPlayer }) => {
  const { player_img, player_name, country, type, batsman_type, bowler_type, price } = player;

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 p-2 mb-20">
        <img className="w-full h-52 object-top rounded-lg" src={player_img} alt="Player Image" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 flex items-center">{player_name}</h2>
          <div className="text-gray-600 flex items-center mb-3">
            <span className="mr-2"></span> {country}
            <span className="ml-auto bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">{type}</span>
          </div>
          <hr />
          <div className="text-gray-600 mb-2 mt-3">
            <span className="flex gap-2 text-yellow-500">Rating: </span>
            <div className="flex justify-between">
              <span>{batsman_type ? batsman_type : 'Bowler'}</span>
              <span>{bowler_type ? bowler_type : ''}</span>
            </div>
            <p className="mt-2">Price: ${price}</p>
          </div>
          <button onClick={() => handelSelectedPlayer(player)} className="mt-4 w-full bg-white text-black border-2 font-bold py-2 px-4 rounded-lg hover:bg-[#eaff29]">Choose player</button>
        </div>
      </div>

    </div>
  );
};


Player.propTypes = {
  player: PropTypes.object.isRequired,
  handelSelectedPlayer : PropTypes.function
}
export default Player;