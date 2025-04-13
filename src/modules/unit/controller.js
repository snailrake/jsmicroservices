const unitService = require('./service');

exports.getAllUnits = async (req, res) => {
    try {
        const units = await unitService.getAllUnits();
        res.json(units);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUnitById = async (req, res) => {
    try {
        const unit = await unitService.getUnitById(req.params.id);
        if (!unit) {
            return res.status(404).json({ message: 'Unit not found' });
        }
        res.json(unit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUnit = async (req, res) => {
    try {
        console.log('createUnit', req.body);
        const newUnit = await unitService.createUnit(req.body);
        res.status(201).json(newUnit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUnit = async (req, res) => {
    try {
        const updatedUnit = await unitService.updateUnit(req.params.id, req.body);
        if (!updatedUnit) {
            return res.status(404).json({ message: 'Unit not found' });
        }
        res.json(updatedUnit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUnit = async (req, res) => {
    try {
        await unitService.deleteUnit(req.params.id);
        res.json({ message: 'Unit deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
