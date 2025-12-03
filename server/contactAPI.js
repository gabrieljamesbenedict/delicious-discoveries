export const postContact = async (req, res) => {
    try {
        const data = req.body;
        const result = await run("messages", (coll) => coll.insertOne(data));

        res.status(201).json({
            message: "Message created",
            id: result.insertedId
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};