const Card = ({ id, name, type, hp, attack }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className={`pokemon-card ${type}`}>
      <h2 className="pokemon-name">{name}</h2>
      <div className={`pokemon-image-container ${type}`}>
        {imageUrl && <img src={imageUrl} alt={name} className="pokemon-image" />}
        <span className="pokemon-type">Type: {type}</span>
      </div>
      <div className="pokemon-stats">
        <div className="stats-container">
          <p>HP: {hp}</p>
          <p>Attack: {attack}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;