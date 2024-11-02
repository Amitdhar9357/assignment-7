import './Button.css'


const Button = ({handelActive, isActive, selectedPlayers}) => {
  return (
    <div className="flex gap-7 justify-end ">
      <button className= {`${isActive? 'btn active': 'btn'}`} onClick={()=>handelActive (true)}> Available</button>
      <button className= {`${isActive? 'btn': 'btn active'}`} onClick={()=>handelActive (false)}> Selected ({selectedPlayers.length})</button>
    </div>

  );
};


export default Button;