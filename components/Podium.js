const Podium = ({results}) => {
  return ( 
    <div className="podium">
          {results.reverse().map((player, index) => {
            let style = {color: '#ff8e57'};
            if (index === 5) {
              style = {color: '#efe85b'};
            } else if (index === 4) {
              style = {color: '#737682'}
            } else if (index === 3) {
              style = {color: '#ab8569'}
            }
            return(
            <div className="player">
              <span id="place">
                <h2 style={style}>{6-index}</h2>
              </span>
              <span id="nick">
                <h4>{player}</h4>
              </span>  
           </div>)

          })}
        </div> 
   );
}
 
export default Podium;