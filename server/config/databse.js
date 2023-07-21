import mysql from 'mysql2';

const databaseConfig = {
    host: 'sql.freedb.tech',
    port: "3306",
    user: 'freedb_jaewoong',
    password: 'jtq74n9SkMRBg@a',
    database: 'freedb_jaewoong'
};

const database = mysql.createConnection(databaseConfig);
database.connect();

export default database;