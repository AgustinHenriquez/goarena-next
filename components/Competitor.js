const Competitor = ({nick, wins, loses}) => {
  return ( 
    <li className="competitor">
      <h4>{nick}</h4>
      <h4>{wins}</h4>
      <h4>{loses}</h4>
    </li>
   );
}
 
export default Competitor;