const mysql = require('mysql');
const {promisify} = require('util');

const { database } = require('./keys');

const pool = mysql.createPool (database);

pool.getConnection((err, connection) => {
    if (err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('se perdio coneccion con la base datos');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('se rechaso la coneccion con la base de datos');
        }
    }
    if(connection) connection.release();
    console.log('DB conecto con exito');
    return;
});
//convierte en promesas lo que antes eran coolbacks, 
pool.query = promisify(pool.query); 

module.exports = pool;