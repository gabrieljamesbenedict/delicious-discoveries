import { run } from "./mongodb.js";
import { ObjectId } from "mongodb";

export const getAllDelicacy = async (req, res) => {
    try {
        const delicacies = await run("delicacies", (coll) => coll.find().toArray());

        res.status(200).json(delicacies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


export const getDelicacy = async (req, res) => {
    try {
        const id = req.params.id;

        const delicacy = await run("delicacies", (coll) => coll.findOne({ _id: new ObjectId(id) }));

        if (!delicacy) {
            return res.status(404).json({ error: "Delicacy not found" });
        }

        res.status(200).json(delicacy);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


export const postDelicacy = async (req, res) => {
    try {

        const data = req.body;

        const result = await run("delicacies", (coll) => coll.insertOne(data));

        res.status(201).json({
            message: "Delicacy created",
            id: result.insertedId
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


export const putDelicacy = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;

        const result = await run("delicacies", (coll) =>
            coll.updateOne(
                { _id: new ObjectId(id) },
                { $set: update }
            )
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "Delicacy not found" });
        }

        res.status(200).json({ message: "Delicacy updated" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


export const deleteDelicacy = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await run("delicacies", (coll) => coll.deleteOne({ _id: new ObjectId(id) }));

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Delicacy not found" });
        }

        res.status(200).json({ message: "Delicacy deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};