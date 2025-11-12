import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors()) // Em ambiente empresarial precisa configurar os acessos.

app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.get('/users', async (req, res) => {

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where:{
                email: req.query.email,
                name: req.query.name,
                age: req.query.age ? Number(req.query.age) : undefined
            }
        })
    } else {
        users = await prisma.user.findMany()
    }
    
    res.status(200).json(users)
})

app.put('/users/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: 'Usuário deletado com sucesso!'})
})

app.listen(3000)

// usuario e senha banco de dados mongoDB
// user: reinaldoapi
// password: j152O1SiWD2Q7uZ1