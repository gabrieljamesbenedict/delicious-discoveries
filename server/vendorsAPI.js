import { ObjectId } from "mongodb";
import { run } from "./mongodb.js";

export const getAllVendor = async (req, res) => {
    try {
        const vendors = await run("vendors", (coll) => coll.find().toArray());
        res.status(200).json(vendors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

export const getVendor = async (req, res) => {
    try {
        const id = req.params.id;
        const vendor = await run("vendors", (coll) => coll.findOne({ _id: new ObjectId(id) }));

        if (!vendor) {
            return res.status(404).json({ error: "Vendor not found" });
        }

        res.status(200).json(vendor);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

export const postVendor = async (req, res) => {
    try {
        const data = req.body;
        const result = await run("vendors", (coll) => coll.insertOne(data));

        res.status(201).json({
            message: "Vendor created",
            id: result.insertedId
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

export const putVendor = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;

        const result = await run("vendors", (coll) =>
            coll.updateOne(
                { _id: new ObjectId(id) },
                { $set: update }
            )
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "Vendor not found" });
        }

        res.status(200).json({ message: "Vendor updated" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

export const deleteVendor = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await run("vendors", (coll) => coll.deleteOne({ _id: new ObjectId(id) }));

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Vendor not found" });
        }

        res.status(200).json({ message: "Vendor deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
