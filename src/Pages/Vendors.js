import { useEffect, useState } from "react";
import { getAllVendors, getVendor, postVendor, putVendor, deleteVendor } from "../Services/vendorService.js";

function Vendors() {

    const [vendorList, setVendorList] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await getAllVendors();
            setVendorList(data);
        }
        loadData();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Specialty</th>
                        <th style={thStyle}>Contact</th>
                        <th style={thStyle}>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {vendorList.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>No vendors available</td>
                        </tr>
                    ) : (
                        vendorList.map((vendor, index) => (
                            <tr key={index} style={index % 2 === 0 ? { backgroundColor: "#fafafa" } : {}}>
                                <td style={tdStyle}>{vendor.name}</td>
                                <td style={tdStyle}>{vendor.specialty}</td>
                                <td style={tdStyle}>{vendor.contact}</td>
                                <td style={tdStyle}>{vendor.location}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

const thStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd"
};

const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #eee"
};

export default Vendors;