import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/public/index.html')
})

app.post('/submit', (req, res) => {
  console.log(req.body, req.query)
  res.send(`
  <h1>Your band name is :</h1>
  <h2>${req.body.street}${req.body.pet}✌️</h2>
  `)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
