import mongoose from 'mongoose';
const studentSchema = mongoose.Schema({
    name: String,
    rollNo: Number,
    address: String,
    mobile: Number,
    email: String,
    date_Added: {
        type: Date,
        default: new Date(),
    }
   });
   var StudentModel= mongoose.model('StudentModel', studentSchema);
   export default StudentModel;