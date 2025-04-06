const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
});

exports.getAllUnits = async () => {
    const { rows } = await pool.query('SELECT * FROM units ORDER BY id');
    return rows;
};

exports.getUnitById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM units WHERE id = $1', [id]);
    return rows[0];
};

exports.createUnit = async (data) => {
    const { name, image_name } = data;
    const { rows } = await pool.query(
        'INSERT INTO units (name, image_name, created_at, updated_at) VALUES ($1, $2, NOW(), NOW()) RETURNING *',
        [name, image_name]
    );
    return rows[0];
};

exports.updateUnit = async (id, data) => {
    const { name, image_name } = data;
    const { rows } = await pool.query(
        'UPDATE units SET name = $1, image_name = $2, updated_at = NOW() WHERE id = $3 RETURNING *',
        [name, image_name, id]
    );
    return rows[0];
};

exports.deleteUnit = async (id) => {
    await pool.query('DELETE FROM units WHERE id = $1', [id]);
};
