const port = 3000

const express = require('express')
const app = express()

const { MongoClient } = require('mongodb')

app.get('/', (req, res) => {
    res.json('Hello to my app!')
})

app.listen(port, ()=> {
    console.log("Server started on port number " + port);
})