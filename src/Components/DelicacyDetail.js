import "../Styles/DelicacyDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import imageNotFound from "../Assets/image-not-found.png";
import { getDelicacy } from "../Services/delicacyService";

function DelicacyDetail() {
    const { id } = useParams();               
    const navigate = useNavigate();
    const [delicacy, setDelicacy] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDelicacy() {
            try {
                const data = await getDelicacy(id);
                setDelicacy(data);
            } catch (error) {
                console.error("Failed to load delicacy:", error);
            } finally {
                setLoading(false);
            }
        }
        loadDelicacy();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!delicacy) return <p>Delicacy not found.</p>;

    const finalImageURL = '../'+delicacy.imageURL || imageNotFound;

    return (
        <>  
            <div className="delicacy-details-page">
                <div className="delicacy-details-img">
                    <img src={finalImageURL} alt={finalImageURL} />
                </div>
                <div className="delicacy-details-container">
                    <h2 className="card-title">{delicacy.name}</h2>

                    <p className="card-description">{delicacy.description}</p>

                    <div className="card-section">
                        <h3>Ingredients</h3>
                        <p>{delicacy.ingredients}</p>
                    </div>
                    <div className="card-section">
                        <h3>Preparation</h3>
                        <p>{delicacy.preparation}</p>
                    </div>

                    <span className="card-region-badge">{delicacy.region}</span>
                </div>
            </div>
        </>
    );
}

export default DelicacyDetail;
