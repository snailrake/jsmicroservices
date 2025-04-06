const unitModel = require('./model');

const validateUnit = (data) => {
    if (!data.name || data.name.length <= 4) {
        throw new Error('Name must be longer than 4 characters');
    }
    if (!data.image_name) {
        throw new Error('Image name is required');
    }
};

exports.getAllUnits = async () => {
    return await unitModel.getAllUnits();
};

exports.getUnitById = async (id) => {
    return await unitModel.getUnitById(id);
};

exports.createUnit = async (data) => {
    validateUnit(data);
    return await unitModel.createUnit(data);
};

exports.updateUnit = async (id, data) => {
    validateUnit(data);
    return await unitModel.updateUnit(id, data);
};

exports.deleteUnit = async (id) => {
    return await unitModel.deleteUnit(id);
};
