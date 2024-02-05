const express = require('express');
const app = express();
const port = 3000;
const data = require("./budgetData.json");
app.use('/', express.static('public'));
const budget = {
    myBudget: [
    {
        title: 'Travel',
        budget: 20
    },
    {
        title: 'Gas',
        budget: 15
    },
    {
        title: 'Mobile Bill',
        budget: 15
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Groceries',
        budget: 80
    },
    {
        title: 'Internet',
        budget: 20
    },
    {
        title: 'Other',
        budget: 50
    },
]};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.get('/budget', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});