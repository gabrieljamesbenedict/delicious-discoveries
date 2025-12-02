import "../Styles/FeaturedDelicacies.css";

function FeaturedDelicacies(data) {
    const name = data.name;
    const description = data.description;
    const imageURL = data.imageURL;
    return (
        <div className="featured-delicacies-card">
            <img src={imageURL} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default FeaturedDelicacies;