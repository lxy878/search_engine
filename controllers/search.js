const db = require('../models/web-detail');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.getIndex = (req, res, next) => {
    res.render('index', {title: 'Search Page'});
}

exports.getResults = (req, res, next) => {
    const query = req.query.searchFor;
    const currentPage = req.query.page;
    const maxResults = 20;
    const maxIcons = 10;
    db.findAll({
        where: {
            [Op.or]: [{
                title: {[Op.substring]: query}
            }, {
                description: {[Op.substring]: query}
            }]
        }
    }).then(urls => {
        const totalResults = urls.length;
        const totalPages = Math.ceil(totalResults/maxResults);
        // provide invalid inputs in query
        if((currentPage<1) || (currentPage > totalPages && totalPages !=0)){
            res.redirect('/inputerror');
            return;
        }
        // limit results for each page
        const beginResult = (currentPage-1)*maxResults;
        const numResults = currentPage*maxResults;
        const endResult =  numResults>totalResults? totalResults: numResults;
        
        // limit numbers of pages
        const half = Math.floor(maxIcons/2);
        const startIcon = currentPage > half? currentPage-half: 1;
        var endIcon = startIcon+maxIcons;
        if(endIcon>totalPages){
            endIcon=totalPages;
        }

        res.render('results', {
            title: 'Result Page',
            npage: currentPage,
            startIndex: beginResult,
            endIndex: endResult,
            searchTerm: query,
            results: urls,
            numResults: totalResults,
            startIcon: startIcon,
            endIcon: endIcon
        });
    }).catch(err => console.log(err));
}