import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) => {
    
    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)

// usuario e senha banco de dados mongoDB
// user: reinaldoapi
// password: j152O1SiWD2Q7uZ1