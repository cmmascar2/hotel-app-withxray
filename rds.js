var mysql = require('mysql');


var rdsUrl = '<rds-endpoint>';
var password =  '<pw>';
var user = 'admin';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
