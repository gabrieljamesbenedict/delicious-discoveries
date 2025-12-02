import "../Styles/FeaturedDelicaciesCarousel.css";

function FeaturedDelicacies(data) {
    const name = data.name;
    const description = data.description;
    return (
        <div className="featured-delicacies-card">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default FeaturedDelicacies;