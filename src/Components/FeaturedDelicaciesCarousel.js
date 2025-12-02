import "../Styles/FeaturedDelicaciesCarousel.css";
import FeaturedDelicacies from "./FeaturedDelicacies";

import imageNotFound from "../Assets/image-not-found.png";

function FeaturedDelicaciesCarousel() {
    return (
        <div className="featured-delicacies-carousel">
            <FeaturedDelicacies name="Lorem" description="Lorem ipsum dolor sit amet." imageURL={imageNotFound} />
            <FeaturedDelicacies name="Lorem" description="Lorem ipsum dolor sit amet." imageURL={imageNotFound} />
            <FeaturedDelicacies name="Lorem" description="Lorem ipsum dolor sit amet." imageURL={imageNotFound} />
        </div>
    );
};

export default FeaturedDelicaciesCarousel;