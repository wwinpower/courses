const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    title    : String,
    dateStart: Number
});

module.exports = mongoose.model('Course', CourseSchema);
