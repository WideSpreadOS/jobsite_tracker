const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')

const Job = require('./models/Job')

require('dotenv').config()


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

mongoose.set('strictQuery', false);

const mongoDB = process.env.MONGO_CONNECTION

main().catch(err => console.log(err));
async function main() {
    console.log('INSIDE mongoDB: \n', mongoDB)
    await mongoose.connect(mongoDB);
}

const user = {
    firstName: 'Tim',
    lastName: 'Cook',
}
app.get('/', async (req, res) => {
    const jobs = await Job.find()
    console.log(jobs)
    res.render('pages/index', {pageTitle: `O'Connell Inc.`, zoneNameData: 'home', jobs })
})
app.get('/jobs', async (req, res) => {
    const jobs = await Job.find()
    console.log(jobs)
    res.render('jobs', {pageTitle: 'Jobs Home', jobs, zoneNameData: 'jobs'})
})

app.post('/jobs/create-new', async (req, res) => {
    const jobData = req.body
    const newJob = new Job(jobData)
    newJob.save()
    res.redirect(`/jobs`)
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
    console.log(`Server started on http://localhost:${PORT}`)
})