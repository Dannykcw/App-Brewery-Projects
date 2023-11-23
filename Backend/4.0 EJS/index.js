import express from 'express'

const app = express()
const port = 3000
const dayNum = new Date().getDay()
let day;
let action;

const determineAction = (req, res, next) => {
    if(dayNum != 0 || dayNum != 6) {
         day = "weekday"
         action = 'work hard'
    } else {
         day = "weekend"
         action = 'have fun'
    }
    next()
}

app.use(determineAction)

app.get('/', (req, res) => {
    res.render(process.cwd() + '/views/index.ejs', {
        day: day,
        action: action
        })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})