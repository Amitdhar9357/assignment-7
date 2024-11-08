import { useEffect, useState } from "react";
import Player from "../player/Player";
import PropTypes from "prop-types";

const Players = ({handelSelectedPlayer}) => {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])


  return (
    <div>
      <h3>all Players: {players.length}</h3>

      <div className="grid gap-4 lg:grid-cols-3 md: grid-cols-2 ">
        {
          players.map(player => <Player key={player.id} player={player} handelSelectedPlayer={handelSelectedPlayer}></Player>)

        }
      </div>
    </div>
  );
};

Players.propTypes ={
  handelSelectedPlayer: PropTypes.func
}

export default Players;