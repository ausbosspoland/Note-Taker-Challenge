const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// use apiRoutes, heavily inspired by module 11 zookeepr
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`api server on ${PORT} port now!`);
});