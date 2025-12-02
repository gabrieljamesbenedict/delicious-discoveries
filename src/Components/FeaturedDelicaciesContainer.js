import "../Styles/FeaturedDelicacies.css";
import FeaturedDelicacies from "./FeaturedDelicacies";

import imageNotFound from "../Assets/image-not-found.png";

function FeaturedDelicaciesContainer() {
    return (
        <div className="featured-delicacies-container">
            <FeaturedDelicacies name="Lorem" description="Lorem ipsum dolor sit amet." imageURL={imageNotFound} />
            <FeaturedDelicacies name="Lorem" description="Lorem ipsum dolor sit amet." imageURL={imageNotFound} />
            <FeaturedDelicacies name="Lorem" description="Lorem ipsum dolor sit amet." imageURL={imageNotFound} />
        </div>
    );
};

export default FeaturedDelicaciesContainer;