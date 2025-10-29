import express, { response } from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.send('OK! Deu certo!')
})

app.listen(3000)