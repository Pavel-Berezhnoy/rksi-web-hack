require('dotenv').config();
require('./dal/index')(); //init db connection
const config = require('./config');
const express = require('express');
const cors = require('cors');
const useRouter = require('./controllers/index')
const passport = require('passport');



const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize())
useRouter(app);


app.listen(config.app.port, async() => {
    console.log(`Server started on the ${config.app.port} port`);
})