let express = require('express');
const bodyParser = require("body-parser");


let app = express();
var items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var today = new Date();
var curentday = today.getDay();
var day = "";
app.get('/', (req, res) => {
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    var day = today.toLocaleString('en-US', options);
    res.render('index', {
        kindOfDay: day,
        NewItems: items,
    });
});

app.post('/', (req, res) => {
    item = req.body.newItem;
    items.push(item);

    res.redirect('/')
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));