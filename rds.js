var mysql = require('mysql');


var rdsUrl = 'aa1luiox7vpon2l.ciprr7xmanvd.us-east-1.rds.amazonaws.com';
var password = 'iluvVtoN';
var user = 'root';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
