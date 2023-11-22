import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render(process.cwd() + '/views/index.ejs')
})

app.post("/submit", (req, res) => {
  const fName = req.body.fName
  const lName = req.body.lName

  if (!fName) {
    res.render(process.cwd() + '/views/index.ejs', {
      response: 'Enter your first name'
    })
  } else if (!lName) {
    res.render(process.cwd() + '/views/index.ejs', {
      response: 'Enter your last name'
    })
  } else {
    const num = fName.length + lName.length;
    res.render(process.cwd() + '/views/index.ejs', {
      response: `There are ${num} letters in your name.`
    })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
