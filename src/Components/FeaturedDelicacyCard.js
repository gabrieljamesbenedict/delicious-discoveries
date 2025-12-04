import "../Styles/Card.css";
import imageNotFound from "../Assets/image-not-found.png";
import { useState } from "react"; // needed

function FeaturedDelicacyCard (props) {
    const delicacy = props.delicacy;
    const name = delicacy.name;
    const description = delicacy.description;
    const ingredients = delicacy.ingredients;
    const preparation = delicacy.preparation;
    const region = delicacy.region;
    const imageURL = delicacy.imageURL || imageNotFound;

    const overview = props.overview;

    const onClick = props.onClick;

    const flexDir = overview? {flexDirection: 'column'} : {flexDirection: 'row'};

    return (
        <div className="card" style={flexDir} onClick={onClick}>
            <div className="card-image">
                <img src={imageURL} alt={imageURL} />
            </div>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <p className="card-description">{description}</p>

                {!overview && (
                    <>
                        <div className="card-section">
                            <h3>Ingredients</h3>
                            <p>{ingredients}</p>
                        </div>

                        <div className="card-section">
                            <h3>Preparation</h3>
                            <p>{preparation}</p>
                        </div>
                    </>
                )}

                <span className="card-region-badge">{region}</span>
            </div>
        </div>
    );
}

export default FeaturedDelicacyCard;