module.exports = (app) => {
    const course = require('../controllers/course.controller.js');

    app.post('/course', course.create);

    app.get('/courses', course.findAll);

    app.post('/course/delete', course.delete);
}
