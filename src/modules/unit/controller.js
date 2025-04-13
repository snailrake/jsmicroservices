const service = require('./service');
const { sendLog } = require('../log/logger');

exports.getAllUnits = async (req, res) => {
    const units = await service.getAllUnits();
    await sendLog('Получены все юниты');
    res.status(200).json(units);
};

exports.getUnit = async (req, res) => {
    try {
        const unit = await service.getUnit(req.params.id);
        await sendLog(`Получен юнит с id=${req.params.id}`);
        res.status(200).json(unit);
    } catch (err) {
        await sendLog(`Ошибка: юнит с id=${req.params.id} не найден`);
        res.status(404).json({ message: 'Unit не найден' });
    }
};

exports.createUnit = async (req, res) => {
    try {
        const unit = await service.createUnit(req.body);
        await sendLog('Создан новый юнит');
        res.status(201).json(unit);
    } catch (err) {
        await sendLog('Ошибка создания юнита');
        res.status(400).json({ message: err.message });
    }
};

exports.updateUnit = async (req, res) => {
    try {
        const unit = await service.updateUnit(req.params.id, req.body);
        await sendLog(`Обновлён юнит с id=${req.params.id}`);
        res.status(200).json(unit);
    } catch (err) {
        await sendLog(`Ошибка обновления юнита с id=${req.params.id}`);
        res.status(400).json({ message: err.message });
    }
};

exports.deleteUnit = async (req, res) => {
    try {
        await service.deleteUnit(req.params.id);
        await sendLog(`Удалён юнит с id=${req.params.id}`);
        res.status(200).json({ message: 'Unit удалён' });
    } catch (err) {
        await sendLog(`Ошибка удаления юнита с id=${req.params.id}`);
        res.status(404).json({ message: err.message });
    }
};
