const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/client', express.static('client'));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})