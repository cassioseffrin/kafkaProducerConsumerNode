import express from 'express';
const servidor = express();
servidor.get('/teste', (req,res) =>{
    return res.json({salvo:'seu registro foi salvo'});
}); 
servidor.listen(80);
