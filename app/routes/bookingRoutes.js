module.exports = app => {
    const bookings = require('../controllers/bookingController.js');
    const router = require('express').Router();
  
    
    router.post('/', bookings.createBooking);
  
  
    router.get('/', bookings.getAllBookings);

    router.delete('/:id', bookings.deleteBookingById);

    router.put('/:id', bookings.putBookingById); 

  
    app.use('/api/bookings', router);
  };
  