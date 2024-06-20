import express from 'express';

import cors from 'cors'
import bodyParser from 'body-parser';


import skuRoutes from './app/routes/user.js'



const app = express();



app.use(cors('*'));
app.use(bodyParser.json());




app.use("/api", skuRoutes);




app.get('*', (req, res) => {
    res.send({
        message: 'Hunn smart'
    })
})


app.listen(5000, () => console.log(`Server is running port on:5000`))