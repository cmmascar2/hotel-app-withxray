var express = require('express');
var router = express.Router();
var rds=require('../rds');

/* Add a new room */
router.post('/', function(req, res, next) {
  if (req.query.id && req.query.floor && req.query.hasView) {
    console.log('New room request received. id: %s, floor: %s, hasView: %s', req.query.id, req.query.floor, req.query.hasView);
    rds.pool.getConnection(function(err, con){
      con.release();
      if (err) throw err;

      con.query(`INSERT INTO hotel.rooms (id, floor, hasView) VALUES ('${req.query.id}', '${req.query.floor}', '${req.query.hasView}')`, function(err, result, fields) {
          if (err) res.send(err);
          if (result) res.send({roomId: req.query.id, floor: req.query.floor, hasView: req.query.hasView});
          if (fields) console.log(fields);
      });
    });
  } else {
    // console.log('Missing room id, floor or has view parameters');
    // res.send('Missing room id, floor or has view parameters');
    throw new Error('Missing room id, floor or has view parameters');
  }
});

router.get('/', function(req, res, next) {
    res.render('add', { title: 'Add new room' });
});

module.exports = router;
