const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://oddporson:tizilpX3@cluster0-vrlqz.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
const cors = require('cors');
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use('/api',require('./routes/index'))

const port = process.env.PORT | 80



app.listen(port)
