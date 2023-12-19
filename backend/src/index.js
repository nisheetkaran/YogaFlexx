const express = require('express');
const cors = require('cors');
const { ServerConfig } = require('./config');
const { PORT } = require('./config/server-config');
const app = express();
const apiRoutes = require('./routes');
const {c} = require('./database')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
});

c.connect(function(err){

    if(!err) {
        console.log("Database is connected ... ");    
    } else {
        console.log("Error connecting database ... ");    
    }
    });
    