const express = require('express')

const app = express()

app.use(express.json())

app.use("/hey", (request, response) => {
    response.status(200).json({msg: 'ok'})
})

app.listen(3001, () => console.log("estou rodando"))