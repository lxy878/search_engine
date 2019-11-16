const request = require('request');
const cherrio = require('cheerio');

const db = require('./web-detail');

const collectArr = [];
const doneSet = new Set([]);

exports.crawler = (url) => {
    request(url, (err, response, html) => {
        doneSet.add(url);
        if (!err && response.statusCode == 200) {
            const $ = cherrio.load(html);
            // give details of the current url
            var description = '';
            $('meta').each((i, meta) => {
                const name = $(meta).attr('name');
                if (name === 'description') {
                    description = $(meta).attr('content');
                }
            });
            const title = $('title').text();
            addDB(title, description, url);

            // find potential url pieces
            $('a').each((index, a) => {
                const href = $(a).attr('href');
                if(!href){
                    return;
                }
                if (href.includes('#') !== false) {
                    return;
                } else if (href.substr(0, 11) === 'javascript:') {
                    return;
                }

                // restructure href
                const fixedUrl = rebuild(url, href);
                if (!doneSet.has(fixedUrl)) {      // if not exist in done set, add to list and set
                    doneSet.add(fixedUrl);
                    collectArr.push(fixedUrl);
                }

            });
        }
        if (collectArr.length > 0) {
            const next = collectArr.shift();
            this.crawler(next);
        } else {
            console.log('crawl finishd');
        }
    });
}

// insert information of a url
const addDB = (title, description, ur) => {
    if(!title) title='';
    if(!description) description='';
    db.findAll({ where: { url: ur } }).then(urls => {
        if (urls.length<1) {
            db.create({ title: title, description: description, url: ur });
            console.log(title + ' added.');
        } else {
            console.log(title + ' already existed.');
        }
    }).catch(err => console.log(err));
}

// restructure url
const rebuild = (base, href) => {
    const currentUrl = new URL(base);
    var newUrl = href;
    if (href.substr(0, 2) == '\/\/') {   // "//www.example.com"
        newUrl = currentUrl.protocol + href;
    } else if (href.substr(0, 1) == '/') { // "/path/index.html"
        newUrl = currentUrl.protocol + '//' + currentUrl.host + href;
    } else if (href.substr(0, 2) == './') {   // "./path/index.html"
        newUrl = currentUrl.protocol + '//' + currentUrl.host + currentUrl.pathname + href.substr(1);;
    } else if (href.substr(0, 3) == '../') {  // "../path/index.html"
        newUrl = currentUrl.protocol + '//' + currentUrl.host + '/' + href;
    } else if (href.substr(0, 5) != 'https' && href.substr(0, 4) != 'http') { // "path/index.html"
        newUrl = currentUrl.protocol + '//' + currentUrl.host + '/' + href;
    }
    return newUrl;
}