const app = require("express")();
const PORT = 8080;

const {
    getAllDelicacy,
    getDelicacy,
    postDelicacy,
    putDelicacy,
    deleteDelicacy
} = require("./delicaciesAPI.js");

const {
    getAllVendor,
    getVendor,
    postVendor,
    putVendor,
    deleteVendor
} = require("./vendorsAPI.js");

const {
    postContact
} = require("./contactAPI.js");

app.get("/api/delicacies", getAllDelicacy)
app.get("/api/delicacies/:id", getDelicacy)
app.post("/api/delicacies/", postDelicacy)
app.put("/api/delicacies/:id", putDelicacy)
app.delete("/api/delicacies/:id", deleteDelicacy)

app.get("/api/vendors", getAllVendor)
app.get("/api/vendors/:id", getVendor)
app.post("/api/vendors/", postVendor)
app.put("/api/vendors/:id", putVendor)
app.delete("/api/vendors/:id", deleteVendor)

app.post("/api/contact", postContact)

app.listen(
    PORT,
    () => {`Server online on Port ${PORT}`}
);