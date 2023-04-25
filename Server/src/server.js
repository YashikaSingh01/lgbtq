import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json()) //Parses the json object which we have included with our req body and adds a body property to req

app.get('/hello', (req, res) => {
    res.send('HellO')
});

app.post('/hello', (req, res) => {
    res.send(`Hello ${req.body.name}`)
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000!')
});