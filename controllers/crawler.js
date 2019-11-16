const crawler = require('../models/crawler');

// scrap web
exports.getScrap = (req, res, next) => {
    res.render('scraping', {title: 'Web Scraping'});
}

exports.postScrap = (req, res, next) => {
    const url = req.body.searchTerm; 
    crawler.crawler(url);
    res.redirect('/scrap');
}
