import FeaturedDelicacyCard from "../Components/FeaturedDelicacyCard";
import { getAllDelicacies, getDelicacy, postDelicacy, putDelicacy, deleteDelicacy } from "../Services/delicacyService.js";

function Delicacies() {
    
    const delicacyList = getAllDelicacies();

    return (
        <>
            <section>
                <div>
                    {
                        delicacyList.map(
                            delicacy => {<FeaturedDelicacyCard data={delicacy} />}
                        )
                    }
                </div>
            </section>
        </>
    );
}

export default Delicacies;