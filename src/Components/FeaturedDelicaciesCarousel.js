import "../Styles/FeaturedDelicaciesCarousel.css";
import FeaturedDelicacies from "./FeaturedDelicacies";

function FeaturedDelicaciesCarousel() {
    return (
        <div className="featured-delicacies-carousel">
            <FeaturedDelicacies name="Lorem" description="Lorem ipsum dolor sit amet." />
            <FeaturedDelicacies name="Ipsum" description="Consectetur adipiscing elit." />
            <FeaturedDelicacies name="Dolor" description="Sed do eiusmod tempor incididunt." />
        </div>
    );
};

export default FeaturedDelicaciesCarousel;