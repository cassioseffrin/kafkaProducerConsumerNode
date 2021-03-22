import express from 'express';
const app = express();
app.post('/teste', (req,res) =>{
    return res.json({ok:true});
}); 
app.listen(80);