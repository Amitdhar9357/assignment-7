import PropTypes from "prop-types";
import SelectedPlayer from "../selected Player/Selectedplayer";

const SelectedPlayers = ({selectedPlayers, handleRemovePlayer}) => {
  return (
    <div>
      <h3>selected player ({selectedPlayers.length}/6)</h3> 

      {
        selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} handleRemovePlayer={handleRemovePlayer}></SelectedPlayer>)
      }
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.object.isRequired,
  handleRemovePlayer: PropTypes.func
}

export default SelectedPlayers;