const HooverLog = require('../models/hooverLog.model');
const hooverService = require('../services/hoover.service');


exports.clean = (req, res) => {

    if (!req.body.roomSize || !req.body.coords
        || !req.body.patches || !req.body.instructions) {
        return res.status(400).send({
            message: 'payload was missing an attribute'
        });
    }

    const hooverInput = {
        roomSize: req.body.roomSize,
        coords: req.body.coords,
        patches: req.body.patches,
        instructions: req.body.instructions
    };

    let hooverLog = new HooverLog({
        input: hooverInput
    });

    const hoover = new hooverService(hooverInput);
    const hooverOutput = hoover.run();

    hooverLog.output = hooverOutput;

    hooverLog.save()
        .then(() => {
            res.send(hooverOutput);
        }).catch(error => {
        res.status(500).send({
            message: error.message || 'error occurred'
        });
    });
};