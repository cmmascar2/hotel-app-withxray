var mysql = require('mysql');


var rdsUrl = 'hotel-app-database.cluster-ciq70fzmcyor.us-east-1.rds.amazonaws.com';
var password =  'hotelapp123';
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
