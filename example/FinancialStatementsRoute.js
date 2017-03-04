var express = require('express')
var router = express.Router()
var DataBase = require('../database/data_base.js');
var errors = require('throw.js');
var bodyParser = require('body-parser')

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  //res.send('Birds home page')
  res.json('usage: /financialstatements/type/1/company/2330/year/103/season/02')
})
// define the about route
router.get('type/:type_number/company/:company_id/year/:year_number/season/:season_number/', function (req, res) {
	var findCallback = function (err, docs) {
		if (docs.length === 0) {
			next(new errors.NotFound(req.params));
		} else {
			res.json(docs)
		}
	}
	var f_filter = {
		"company": req.params.company_id,
		"year": req.params.year_number,
		"type": parseInt(req.params.type_number, 10),
		"season": req.params.season_number
	};
	DataBase.findDocuments(f_filter, findCallback);
	
})

router.get('/type/:type_number/company/:company_id/year/:year_number', function (req, res) {
	var findCallback = function (err, docs) {
		if (docs.length === 0) {
			next(new errors.NotFound(req.params));
		} else {
			res.json(docs)
		}
	}
	var f_filter = {
		"company": req.params.company_id,
		"year": req.params.year_number,
		"type": parseInt(req.params.type_number, 10)
	};
	DataBase.findDocuments(f_filter, findCallback);
	
})

var setFilterAndQuery = function (req, res, next, callback) {
	var f_filter = {};

	if (!req.body.company) {
		next(new errors.BadRequest('req.body.company is ' + req.body.company));
		return;
	} else {
		f_filter["company"] = req.body.company;
	}
	if (!req.body.type) {
		next(new errors.BadRequest('req.body.type is ' + req.body.type));
		return;
	} else {
		f_filter["type"] = parseInt(req.body.type, 10);
	}

	if (req.body.year) {
		f_filter["year"] = req.body.year;
	}
	if (req.body.season) {
		f_filter["season"] = req.body.season;
	} 

	DataBase.findDocuments(f_filter, callback);
}

router.post('/', function(req, res, next) {

	var callback = function (err, docs) {
		if (docs.length === 0) {
			next(new errors.NotFound(req.body));
		} else {
			res.json(docs)
		}
	}
	setFilterAndQuery(req, res, next, callback);
});

router.post('/eps', function(req, res, next) {

	var callback = function (err, docs) {
		var eps_array = [];
		if (docs.length === 0) {
			next(new errors.NotFound(req.body));
		} else {
			for (var i = 0; i < docs.length; i++) {
				var eps = docs[i]["基本每股盈餘"].value;
				var new_item = {
					"company": docs[i].company,
					"year": docs[i].year,
					"season": docs[i].season,
					"EPS": eps
				}
				eps_array.push(new_item);
			}
		}
		res.json(eps_array);
	}
	if (parseInt(req.body.type, 10) !== 1) {
		next(new errors.BadRequest('req.body.type should be 1.'));
		return;
	} 
	setFilterAndQuery(req, res, next, callback);

});

//collect all error handles
router.use((err, req, res, next) => {

	/*
    logger.error(err);

    if (req.app.get('env') !== 'development' &&
        req.app.get('env') !== 'test') {

        delete err.stack;
    }
	*/

    res.status(err.statusCode || 500).json(err);
});

module.exports = router