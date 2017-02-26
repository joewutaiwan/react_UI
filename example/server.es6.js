import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';

const app = express();

app.engine('handlebars', hbs.create().engine);
app.set('view engine', 'handlebars');

app.use('/images', express.static(path.join(__dirname, './images')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/stylesheet', express.static(path.join(__dirname, './stylesheet')));

app.use('/', (req, res) => {
  res.render('../example/views/index', {
    devTools: req.query.devTools
  });
});

app.listen(9001, function onListen() {
  console.log('Listening at localhost:9001');
});
