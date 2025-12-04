import FeaturedDelicacyCard from "../Components/FeaturedDelicacyCard";
import { getAllDelicacies, getDelicacy, postDelicacy, putDelicacy, deleteDelicacy } from "../Services/delicacyService.js";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../Styles/Card.css";

function Delicacies() {

    const [delicacyList, setDelicacyList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadData() {
            const data = await getAllDelicacies();
            setDelicacyList(data);
        }
        loadData();
    }, []);

    function openLargeCard(delicacy) {
        navigate(`/delicacies/${delicacy._id}`);
    }

    return (
        <>
            <div className="card-container">
                {delicacyList.map((delicacy) => (
                    <FeaturedDelicacyCard
                        key={delicacy._id}
                        delicacy={delicacy}
                        overview={true}
                        onClick={() => openLargeCard(delicacy)}
                    />
                ))}
            </div>
        </>
    );
}

export default Delicacies;