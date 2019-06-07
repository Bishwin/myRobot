module.exports = (app) => {
    const hooverInput = require('../controllers/hooverInput.controller.js');

    app.post('/hoover/clean', hooverInput.clean);

};