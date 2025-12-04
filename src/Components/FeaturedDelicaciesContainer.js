import "../Styles/FeaturedDelicacies.css";
import FeaturedDelicacies from "./FeaturedDelicacies";

import imageNotFound from "../Assets/image-not-found.png";

function FeaturedDelicaciesContainer() {
    return (
        <div className="featured-delicacies-container">
            <FeaturedDelicacies 
                name="Kari-kari"    
                description="One of Marinduque’s unique dishes is kari-kari, a spicy pork blood stew not to be confused with the more popular kare-kare, a totally different Filipino dish of oxtail and beef tripe in a savory peanut sauce. Similar to dinuguan or dugó-dugó but with less broth, traditional Marinduque kari-kari is made from pork blood and pork innards, like the heart, spleen, kidneys and small intestines. For picky eaters, the Boac version of this dish substitutes the innards with ground meat." 
                imageURL={"images/delicacy/kari-kari.jpg"} 
            />
            <FeaturedDelicacies 
                name="Ulang-ulang (Soup)" 
                description="A sour soup of ulang (freshwater prawn) and shredded buko (coconut meat). As its name suggests, the ulang-ulang soup is traditionally made with ulang (freshwater prawns), but due to local scarcity hipon (saltwater shrimp) is often used as a substitute. The souring agent for this soup dish is calamansí, a citrus hybrid predominately cultivated in the Philippines and widely used in Filipino cuisine." 
                imageURL={"images/delicacy/ulang-ulang.jpg"}
            />
            <FeaturedDelicacies 
                name ="Uraro"
                description="Perhaps the most well-known pasalubong from the island is uraró, a soft cookie made from arrowroot flour that originated from the Tagalog people of southern Luzon, particularly Laguna, Quezon and Marinduque. Arrowroot (Maranta arundinacea) is a root crop native to Central and South America, and was introduced to the Philippines through the Manila-Acapulco Galleon trade." 
                imageURL={"images/delicacy/uraro.jpg"} 
            />
        </div>
    );
};

export default FeaturedDelicaciesContainer;