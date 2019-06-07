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

    const hoover = new hooverService(hooverInput);
    const hooverOutput = hoover.run();

};