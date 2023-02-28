const lectures = require('./json/lectures.json');
const enrollments = require('./json/lecturesEnrolled.json');
const lecturesWithEnrollments = require('./json/lecturesWithEnrollment.json');
const express = require('express'),
    path = require("path"),
    app = express(),
    puerto = 3000,
    cors = require("cors");

app.use(express.json(), cors());

const materias = lectures;

app.get('/', (req, res) => {
    res.send('API is working');
});

app.get('/lectures', (req, res) => {
    res.send(materias);
});

app.get('/lectures/parallels', (req, res) => {
    let parallels = lectures.map(item => {
        return {
            paralelos: item.paralelos
        }
    })
    res.send(parallels);
})

app.get('/lectures/enrollment', (req, res) => {
    res.send(enrollments);
})

app.get('/lectures/lecturesWithEnrollment', (req, res) => {
    res.send(lecturesWithEnrollments);
})


app.listen(puerto, () => console.log(`Listening port ${puerto}...`));