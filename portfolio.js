/* Filename: portfolio.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 13th, 2022 */

const express = require('express')
const app = express()
const port = 3000

//Route:
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Starts the server:
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
