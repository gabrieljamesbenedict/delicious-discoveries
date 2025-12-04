import "../Styles/CulturalHighlights.css";
import CulturalHighlights from "./CulturalHighlights";
import imageNotFound from "../Assets/image-not-found.png";
import cultural1 from "../Assets/Cultural/moriones.jpg";
import cultural2 from "../Assets/Cultural/putong.jpg";
import cultural3 from "../Assets/Cultural/bila-bila.jpg";


function CulturalHighlightsContainer() {
    return (
        <div className="cultural-highlights-container">
            <CulturalHighlights 
                name="Moriones Festival" 
                description="A week-long Holy Week celebration where people wear elaborate wooden masks and Roman soldier costumes to reenact the search for the centurion Longinus." 
                imageURL={cultural1} 
            />
            <CulturalHighlights 
                name="Tubong / Putong" 
                description="A traditional and hospitable ceremony unique to Marinduque, often used to welcome guests." 
                imageURL={cultural2} 
            />
            <CulturalHighlights 
                name="Bila-bila Festival" 
                description="The Bila-Bila Festival in Marinduque is a street dancing competition and parade held in the town of Boac on December 8th to celebrate the local butterfly industry, which is a significant part of the region's culture and economy. The festival's name comes from the local term for butterflies and highlights their life cycle as a symbol of hope." 
                imageURL={cultural3} 
            />
        </div>
    );
};

export default CulturalHighlightsContainer;