import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';

const FinancialStatementsRoute = require('./FinancialStatementsRoute.js')
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.engine('handlebars', hbs.create().engine);
app.set('view engine', 'handlebars');

app.use('/images', express.static(path.join(__dirname, './images')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/stylesheet', express.static(path.join(__dirname, './stylesheet')));

app.use('/financialstatements', FinancialStatementsRoute);

/*
app.post('/financialstatements', function(req, res, next) {

	var findCallback = function (err, docs) {
		if (docs.length === 0) {
			next(new errors.NotFound());
		} else {
			console.log(docs.length);
			console.log('[pass] findDocuments');
			res.json(docs)
		}
		
	}
	var f_filter = {
		"company": req.body.company,
		"year": req.body.year,
		"type": parseInt(req.body.type, 10),
		"season": req.body.season
	};
	console.log(f_filter);
	DataBase.findDocuments(f_filter, findCallback);

});

app.get('/test', function(req, res) {
    console.log(req.query.name);
    console.log(req.query.tel);
});
*/

app.use('/', (req, res) => {
  res.render('../example/views/index', {
    devTools: req.query.devTools
  });
});

app.listen(9001, function onListen() {
  console.log('Listening at localhost:9001');
});


