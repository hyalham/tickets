import express from 'express'
import { PrismaClient } from '@prisma/client' 

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

// Reçoit les données de la fonction submitForm de App.vue
app.get('/api/ticket', async (req, res) => {
   const ticketList = await prisma.Ticket.findMany({})
   console.log('ticketList', ticketList)
   res.send(ticketList)
})

// Envoi les données vers
app.post('/api/ticket', async (req, res) => {
   const ticket = await prisma.Ticket.create({
      data: req.body
   })
   console.log('created', ticket)
   res.send(ticket)
})

app.listen(3000, function () {
  console.log('Server listening on port 3000')
})



// créer la route GET /api/ticket qui renvoie la liste de tous les tickets
// créer la route POST /api/ticket qui créé un nouveau ticket
// utiliser la route POST /ticket lors de la validation du formulaire
