const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000;

// middle ware CORS for local host API data fetching in another server
const app = express();
app.use(cors());
// use this for convert stringify data to json
app.use(express.json());

app.get('/', (req, res) => {
    res.send("npm install -g nodemon")
});

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('Hitting The Post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
});

// Dynamic API 
const users = [
    { id: 0, name: 'Shabana0', email: 'shabana12@yahoo.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'shabana12@yahoo.com', phone: '01788888888' },
    { id: 2, name: 'Srabonty', email: 'shabana12@yahoo.com', phone: '01788888888' },
    { id: 3, name: 'Shucorita', email: 'shabana12@yahoo.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'shabana12@yahoo.com', phone: '01788888888' },
    { id: 5, name: 'Shusmita', email: 'shabana12@yahoo.com', phone: '01788888888' }
]
// local host slash user data response
app.get('/users', (req, res) => {
    // req.query work as data search object.
    // http://localhost:4000/users?search=mita
    const search = req.query.search;
    // searchable data send filtering data with toLowerCase().includes(search) data
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});

// API Users Slash Unique Id Data Request specially called params then Respond Id & given data
// Dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

// many slash, single slash give data & send response for take data
app.get('/fruits', (req, res) => {
    res.send(['Mangoes,', 'Banana', 'Olive'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Yummy Yummy Tok Mark Fazli")
})

app.listen(port, () => {
    console.log('Listening T Port', port)
});