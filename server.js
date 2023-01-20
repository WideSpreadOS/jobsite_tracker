const express = require('express')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')


let PORT = process.env.PORT || 5000


const app = express()

// Middleware
app.use(bodyParser.json());

// Static
app.use(express.static('public'));

// EJS
app.set(expressLayouts)
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.render('landing')
})

app.get('/jobs', (req, res) => {
    res.render('jobs', {pageTitle: 'Jobs Home'})
})
app.get('/clients', (req, res) => {
    res.render('clients', {pageTitle: 'Clients Home'})
})
app.get('/suppliers', (req, res) => {
    res.render('suppliers', {pageTitle: 'Suppliers Home'})
})
app.get('/maintenance', (req, res) => {
    res.render('maintenance', {pageTitle: 'Maintenance Home'})
})
app.get('/tools', (req, res) => {
    res.render('tools', {pageTitle: 'Tools Home'})
})
app.get('/resources', (req, res) => {
    res.render('resources', {pageTitle: 'Resources Home'})
})

app.listen(PORT, () => {
    console.log('Server started on http://localhost:3000')
})