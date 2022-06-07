import { Knex } from 'knex';
import { resolve } from 'path';


const config: Knex.Config = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3305,
        user: 'root',
        password: '',
        database: 'veiculos'
    },
    pool: { min: 2, max: 10 },
    debug: false,
    migrations: {
        tableName: 'knex_migrations',
        directory: resolve(__dirname, './migrations'),
    },
    seeds: {
        directory: resolve(__dirname, './seeds'),
    },
};
export default { config };