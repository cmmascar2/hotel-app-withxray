var express = require('express');
var router = express.Router();
var rds=require('../rds');

/* Add a new room */
router.post('/', function (req, res, next) {
  if (req.body.roomNumber && req.body.floorNumber && req.body.hasView) {
    console.log('New room request received. roomNumber: %s, floorNumber: %s, hasView: %s', req.body.roomNumber, req.body.floorNumber, req.body.hasView);
    rds.pool.getConnection(function(err, con){
      con.release();
      if (err) throw err;

      con.query(`INSERT INTO hotel.rooms (id, floor, hasView) VALUES ('${req.body.roomNumber}', '${req.body.floorNumber}', '${req.body.hasView}')`, function(err, result, fields) {
          if (err) res.send(err);
          if (result) res.send({roomId: req.body.roomNumber, floor: req.body.floorNumber, hasView: req.body.hasView});
          if (fields) console.log(fields);
      });
    });
  } else {
    throw new Error('Missing room id, floor or has view parameters');
  }
});

router.get('/', function(req, res, next) {
    res.render('add', { title: 'Add new room', view: 'No' });
});

module.exports = router;
