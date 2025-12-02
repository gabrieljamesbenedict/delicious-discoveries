import "../Styles/CulturalHighlights.css";
import CulturalHighlights from "./CulturalHighlights";
import imageNotFound from "../Assets/image-not-found.png";


function CulturalHighlightsContainer() {
    return (
        <div className="cultural-highlights-container">
            <CulturalHighlights name="Lorem" description="Lorem ipsum dolor sit amet." imageURL={imageNotFound} />
            <CulturalHighlights name="Lorem" description="Lorem ipsum dolor sit amet." imageURL={imageNotFound} />
            <CulturalHighlights name="Lorem" description="Lorem ipsum dolor sit amet." imageURL={imageNotFound} />
        </div>
    );
};

export default CulturalHighlightsContainer;