//To see how the final website should work, run 'node solution.js'.
//Make sure you have installed all the dependencies with 'npm i'.
//The password is ILoveProgramming
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html')
})

app.post('/check', (req, res) => {
    if (req.body.password == 'ILoveProgramming') {
        res.sendFile(process.cwd() + '/public/secret.html')
    } else {
        res.sendFile(process.cwd() + '/public/index.html')
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})