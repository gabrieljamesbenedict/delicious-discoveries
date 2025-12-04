export const getAllVendors = async () => {
    const res = await fetch("http://localhost:8080/api/delicacies");
    return await res.json();
};

export const getVendor = async (id) => {
    const res = await fetch(`http://localhost:8080/api/delicacies/${id}`);
    return await res.json();
};

export const postVendor = async (data) => {
    const res = await fetch("http://localhost:8080/api/delicacies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await res.json();
};

export const putVendor = async (id, data) => {
    const res = await fetch(`http://localhost:8080/api/delicacies/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await res.json();
};

export const deleteVendor = async (id) => {
    const res = await fetch(`http://localhost:8080/api/delicacies/${id}`, {
        method: "DELETE"
    });
    return await res.json();
};
