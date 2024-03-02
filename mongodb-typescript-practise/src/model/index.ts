import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    userName: {type: String, required: true},
    password: {type: String, min:6, max:12},
    purchasedCourse:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]
    
});

const CourseSchema = new mongoose.Schema({
    price: {type: Number, required:true},
    title:{type:String, required:true}
})


export const User = mongoose.model('User', UserSchema);
export const Course = mongoose.model('Course', CourseSchema);