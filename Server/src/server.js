import express from 'express'
import bodyParser from 'body-parser'
import { MongoClient } from 'mongodb'

const app = express()
app.use(bodyParser.json()) //Parses the json object which we have included with our req body and adds a body property to req

// app.get('/hello', (req, res) => {
//     res.send('HellO')
// });

// app.post('/hello', (req, res) => {
//     res.send(`Hello ${req.body.name}`)
// })

app.get('/trial', async (req, res) => {
    const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true})
    const db = client.db('lgbtq')

    const listOfUsers = await db.collection('Users').find({}).toArray()
    res.status(200).json(listOfUsers)

    client.close()
})

app.get('/login', async (req, res) => {
    const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true})
    const db = client.db('lgbtq')

    const username = req.body.username
    const password = req.body.password

    const user = await db.collection('Users').findOne({user_id: username})
    
    const actualPassword = user.password

    if(user && password === actualPassword) {
        res.status(200).json('Login Successful!')
    }
    else {
        res.status(404).json(user)
    }

    client.close()
})

app.get('api/blogs/:blogId', async (req, res) => {
    const { blogId } = req.params
    const blog = blogs.find((blog) => blog.id === blogId)
    if(product) {
        res.status(200).json(blog)
    }
    else {
        res.status(404).json('Blog does not exist')
    }
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000!')
});