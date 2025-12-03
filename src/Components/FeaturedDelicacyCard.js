import "../Styles/Card.css";

function FeaturedDelicacyCard (data) {
    const name = data.name;
    const description = data.description;
    const ingredients = data.ingredients;
    const preparation = data.description;
    const region = data.description;
    const imageURL = data.imageURL;
    return (
        <div className="card">
            <img src={imageURL} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{ingredients}</p>
            <p>{preparation}</p>
            <p>{region}</p>
        </div>
    );
}

export default FeaturedDelicacyCard;