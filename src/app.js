const express = require('express')

const app = express()

app.use(express.json())

app.use("/hey", (request, response) => {
    response.status(200).json({msg: 'ok'})
})

app.use("/novarota", (req, res) => {
    res.status(200).json({mensagem: "eu vim do pc"})
})

app.listen(3001, () => console.log("estou rodando"))