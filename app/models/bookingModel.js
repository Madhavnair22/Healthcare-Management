module.exports= (mongoose) =>{
var bookingSchema = mongoose.Schema({
  
  name: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type:String, required: true },
  gender: { type: String, required: true },
  appointment_date: { type: String, required: true },
  symptoms: { type: String, required: true },
  doctor: { type: String, required: true },
  status:{type: String, required: true }
});


const Booking = mongoose.model('booking',bookingSchema)
return Booking;
}