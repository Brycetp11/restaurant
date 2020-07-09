// Dependencies
const express = require("express");
const path = require("path");

// Sets up express app
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing ???
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Customer Data
const reservations = [
    {
        name: "maria",
        phone: 5454333455,
        email: "alkjflkj@ljkklj",
        id: 3434
    },
    {
        name: "Bryce",
        phone: 5454333455,
        email: "alkjflkj@ljkklj",
        id: 356434
    }
]

const waitlist = [
    {
        name: "maria",
        phone: 5454333455,
        email: "alkjflkj@ljkklj",
        id: 3434
    },
    {
        name: "Bryce",
        phone: 5454333455,
        email: "alkjflkj@ljkklj",
        id: 356434
    }
]

//* Routes

// sends user to homepage
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "main.html"))
})
// sends user to view tables page
app.get('/view', (req, res)=>{
    res.sendFile(path.join(__dirname, "view.html"))
})

// sends user to make reservations page
app.get('/add', (req, res)=>{
    res.sendFile(path.join(__dirname, "add.html"))
})

// displays reservations
app.get('/api/reservations', (req, res)=>{
    res.send(reservations)
})

// displays waitlist
app.get('/api/waitlist', (req, res)=>{
    res.send(waitlist)
})

// create new reservation
app.post("/api/reservations",function(req, res){
    let newReservation = req.body;
    if(reservations.length <=5){
        reservations.push(newReservation);
    } 
    else {
        waitlist.push(newReservation)
    }
    res.json(newReservation)
})






// Starts server
app.listen(PORT, function(){
    console.log("app is listening on port " + PORT);
});