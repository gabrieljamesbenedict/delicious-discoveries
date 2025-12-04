export const postMessage = async (data) => {
    const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await res.json();
};