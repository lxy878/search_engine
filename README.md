# Search Engine

## Purpose:

The Curiosity on the interaction among client-side, server-side and database.

After I completed the college courses "database" and "internet", I started wondering how websites work through client-side, server-side and database. So, I brought an online course "Make a Google search engine: Javascript PHP and Mysql" on Udemy. I was built a google-like search engine by following the course videos. However, I was unsatisfied with using PHP as a server, so I concerned to switch other server-side programming languages. After several comparisons among modern languages like Ruby, I eventually chose Nodejs as server-side. So, I brought anther course "Nodejs: The complete guide" on Udemy and I learned using **npm** packages to build a server. After the course, I attempted to restructure the website by replacing PHP with Nodejs. Now, this website project works successfully like the original one, but it was running on a Nodejs server.

## Process:

Tje webiste works two features, which one is searching a item from persitence database and another is continuously crowling information from websites.

Programming Language include:  HTML, CSS, JavaScript and Nodejs: express, ejs, sequelize and cheerio

- incorporate the ejs template with html as client-side by implementing **ejs** package on npm
- build server routes to handle diverse communications, like searching or crawling, by implementing express
- establish the connection of the server and the MySQL database with **sequelize** package.
- crawl the data from the given url and recursively visit urls found from the visiting page.
- store the found data into the database by implementing **sequelize**.


## Test:

Note: This website is only tested on the local host and it requires mysql run in the system.

**for users:** localhost:port

<img src='https://github.com/lxy878/search_engine/blob/master/showcase_img/mainPage.png' width='400' height='300' alt='main page' />
<img src='https://github.com/lxy878/search_engine/blob/master/showcase_img/resultPage.png' width='400' height='250' alt='result page' />

**for crawling:** localhost:port/scrap

<img src='https://github.com/lxy878/search_engine/blob/master/showcase_img/cralwer.png' width='400' height='200' alt='cralwer page' />
