 
import "./card-list.styles.css";
import CardComponent from "../card-component/card.component";

const CardList = ({filteredRobots}) => {
  return (
          <div className="card-list">
        {filteredRobots.map((robots) => {
          robots;
          return <CardComponent robots={robots} />;
        })}
      </div>
  )
}

export default CardList;
