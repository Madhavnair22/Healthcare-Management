const db = require('../models');
const Booking = db.bookings;


exports.createBooking = (req, res) => {
  const booking = new Booking({
    name: req.body.name,
    phone: req.body.phone,
    dob:req.body.dob,
    gender:req.body.gender,
    appointment_date:req.body.appointment_date,
    symptoms: req.body.symptoms,
    doctor: req.body.doctor,
    status:req.body.status
  });

  

  booking.save()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        msg: err.message || "Error while creating booking"
      });
    });
};


exports.getAllBookings = (req, res) => {
  Booking.find()
    .then(bookings => res.json(bookings))
    .catch(err => {
      res.status(500).send({
        msg: err.message || "Error while fetching bookings"
      });
    });
};


exports.deleteBookingById = (req, res) => {
  const id = req.params.id;

  Booking.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          msg: `Cannot delete booking with id=${id}. Booking not found.`
        });
      } else {
        res.send({
          msg: "Booking was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        msg: err.message || "Error while deleting booking"
      });
    });
};

exports.putBookingById = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  Booking.findByIdAndUpdate(id, { status }, { new: true })
  .then(data => {
    if (!data) {
      res.status(404).send({
        msg: `Cannot update booking with id=${id}. Booking not found.`
      });
    } else {
      res.send({
        msg: "Booking status updated successfully!",
        data
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      msg: err.message || "Error while updating booking status"
    });
  });
};


