import FeaturedDelicaciesCarousel from "../Components/FeaturedDelicaciesCarousel";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

function Home() {

    const bannerTitle = `Discover the Hidden Treasures of Marinduqueño Cuisine`;
    const bannerText = `
    Famously known as the Heart of the Philippines, Marinduque 
    offers a rich and unique selection of traditional dishes that reflect its vibrant 
    culture and history. From savory specialties to sweet treats, explore the flavors 
    that make Marinduqueño cuisine a true delight for food enthusiasts.
    `;

    const featuredDelicaciesTitle = `Featured Delicacies`;
    const featuredDelicaciesText = `
    Check out today's featured Marinduqueño delicacies that.
    `;
    
    return (
        <>
            <section className="banner">
                <div className="banner-content">
                    <h1 className="banner-title">{bannerTitle}</h1>
                    <p className="banner-text">{bannerText}</p>
                    <Link to="/delicacies" className="banner-button">Discover</Link>
                </div>
            </section>


            <section className="featured-delicacies">
                <div className="featured-delicacies-content">
                    <h1 className="featured-delicacies-title">{featuredDelicaciesTitle}</h1>
                    <p className="featured-delicacies-text">{featuredDelicaciesText}</p>
                </div>
                <FeaturedDelicaciesCarousel className="featured-delicacies-carousel" />
            </section>


            <section className="cultural-highlights">

            </section>
        </>
    );
}

export default Home;