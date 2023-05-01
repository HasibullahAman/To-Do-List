let express = require('express');
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// console.log(date());

let app = express();
var items = [];
var WorkItem = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


var today = new Date();
var curentday = today.getDay();
var day = "";
app.get('/', (req, res) => {
    // var options = {
    //     weekday: 'long',
    //     day: 'numeric',
    //     month: 'long',
    // };
    // var day = today.toLocaleString('en-US', options);
    let day = date();
    res.render('index', {
        ListTitle: day,
        NewItems: items,
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.post('/', (req, res) => {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        WorkItem.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect('/')
    };
});

app.get('/work', (req, res) => {
    res.render('index', {
        ListTitle: "Work List",
        NewItems: WorkItem,
    })
});

app.post('/work', (req, res) => {
    let item = req.body.newItem;
    WorkItem.push(item);
    res.redirect('/work');
})





app.listen(3000, () => console.log('Example app listening on port 3000!'));