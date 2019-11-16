// main
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const seq = require('./util/database');
const searchRouter = require('./routes/search')
const crawlRouter = require('./routes/crawling');
const errorRouter = require('./routes/error');

const server = express();

// require setups for express and body-parser
server.set('view engine', 'ejs');
server.set('views', 'views');
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: false}));

// user route
server.use(searchRouter);

// crawl/scrap route
server.use(crawlRouter);

// 404 error
server.use(errorRouter);

seq.sync().then(()=>{
    server.listen(3000);
}).catch(err=>{
    console.log(err);
});