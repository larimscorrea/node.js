import express from 'express'

const app = express()

//Criar rota raiz/padrão
app.get('/', (req, res) => {
    res.send('curso de nodejs')
})

export default app 