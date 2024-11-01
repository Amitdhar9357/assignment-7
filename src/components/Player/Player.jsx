

const Player = ({ player }) => {
  const { player_img ,player_name, country, type, batsman_type, price } = player;

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg max-w-xs p-4">
        
        <img src={player_img} alt="Virat Kohli" className="w-full h-60 object-cover rounded-t-lg"/>

          
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{player_name}</h2>
            <div className="flex items-center mb-2">
              <img src="https://cdn-icons-png.flaticon.com/512/197/197560.png" alt="India Flag" className="w-5 h-5 mr-2"/>
                <span className="text-gray-600">{country}</span>
            </div>
            <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">{type}</span>

            
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-700">Rating</span>
                <span className="font-semibold text-gray-800">⭐⭐⭐⭐⭐</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="font-medium text-gray-700">{batsman_type}</span>
                
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="font-medium text-gray-700">{price}</span>
                
              </div>
            </div>

            
            <button className="mt-4 w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition">
              Choose Player
            </button>
          </div>
      </div>

    </div>
  );
};

export default Player;