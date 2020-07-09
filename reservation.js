

/*Make Reservations */
$("reservation-btn").on("click", function(event) {
  event.preventDefault();
  var newReservation = {
    name: $("#name-input").val().trim(),
    phone: $("#phone-input").val().trim(),
    email: $("#email-input").val().trim(),
    uniqueID: $("#id-input").val().trim()
  };

  $.post("/api/reservations", newReservations)
    .then(function(data) {
      console.log("add.html", data);
      alert("Reservation Made");
    });
});
