import "./CardList.styles.css";
import Card from "../Card/Card.component";
const CardList = (props) => {
  const monsters = props.monsters;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
