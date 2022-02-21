const express = require('express')
const bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.urlencoded({ extended: true }))
app.get('', (req, res) => {
    res.sendFile(__dirname + "/index1.html")
})
// app.post('/add', (req, res) => {
//     const n1 = Number(req.body.num1)
//     const n2 = Number(req.body.num2)
//     const output = n1 + n2
//     res.send('Value is :' + output)

// })
// app.post('/mul', (req, res) => {
//     const n1 = Number(req.body.num1)
//     const n2 = Number(req.body.num2)
//     const output = n1 * n2
//     res.send('Value is :' + output)
// })
// app.post('/sub', (req, res) => {
//     const n1 = Number(req.body.num1)
//     const n2 = Number(req.body.num2)
//     const output = n1 - n2
//     res.send('Value is :' + output)
// })
// app.post('/div', (req, res) => {
//     const n1 = Number(req.body.num1)
//     const n2 = Number(req.body.num2)
//     const output = n1 / n2
//     res.send('Value is :' + output)
// })
// app.post('/mod', (req, res) => {
//     const n1 = Number(req.body.num1)
//     const n2 = Number(req.body.num2)
//     const output = n1 % n2
//     res.send('Value is :' + output)
// })
app.listen('3000', (res) => {
    console.log("Connected to port 3000")
})