exports.up = (pgm) => {
    pgm.createTable('units', {
        id: 'id',
        name: { type: 'varchar(100)', notNull: true },
        image_name: { type: 'varchar(255)', notNull: true },
        created_at: { type: 'timestamp', default: pgm.func('now()') },
        updated_at: { type: 'timestamp', default: pgm.func('now()') },
    })
}

exports.down = (pgm) => {
    pgm.dropTable('units')
}
