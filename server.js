const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

//Create a port
const app = express();
const PORT = process.env.PORT || 3001;


// parse incoming string or array data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => 
    console.log(`API server now on port ${PORT}!`));


