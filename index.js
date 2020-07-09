// Dependencies
const express = require("express");

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

//* Routes

// sends user to homepage
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "main.html"))
})
// sends user to view tables page
app.get('/tables', (req, res)=>{
    res.sendFile(path.join(__dirname, "tables.html"))
})

// sends user to make reservations page
app.get('/reserve', (req, res)=>{
    res.sendFile(path.join(__dirname, "reserve.html"))
})

// displays reservations
app.get('/api/reservations', (req, res)=>{
    res.send(customers)
})

// displays waitlist
app.get('/api/waitlist', (req, res)=>{
    res.send(customers)
})

// create new reservation
app.post("/api/reservations",function(req, res){
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    reservations.push(newReservation);
    res.json(newReservation)
})






// Starts server
app.listen(PORT, function(){
    console.log("app is listening on port " + PORT);
});