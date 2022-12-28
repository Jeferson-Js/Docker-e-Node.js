const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, Docker atualizado!!');
})

app.listen(port, ()=>{
    console.log(`A porta esta rodando na porta ${port}`)
});