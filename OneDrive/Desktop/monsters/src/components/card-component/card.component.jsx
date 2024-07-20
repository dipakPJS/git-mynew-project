import "./card-component.styles.css";

const CardComponent = ({robots}) => {

    const {id, name, email} = robots;

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set6&size=180x180`}
        alt={`${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardComponent;
