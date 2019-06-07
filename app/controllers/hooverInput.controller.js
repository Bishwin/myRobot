
exports.clean = (req, res) => {

    if (!req.body.roomSize || !req.body.coords
        || !req.body.patches || !req.body.instructions) {
        return res.status(400).send({
            message: 'payload was missing an attribute'
        });
    }

};