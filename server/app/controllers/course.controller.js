const Course = require('../models/course.model.js');


exports.create = (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            message: "Содержание не может быть пустым"
        });
    }

    const course = new Course({
        title    : req.body.title,
        dateStart: req.body.dateStart
    });

    course.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "При создании данных произошла ошибка."
        });
    });
};

exports.findAll = (req, res) => {
    Course.find()
        .then(courses => {
            res.send(courses);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "При получении данных произошла ошибка."
        });
    });
};


exports.delete = (req, res) => {
    Course.deleteMany({ _id: req.body.data })
        .then(() => {
            Course.find().then(courses => {
                res.send(courses);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "При получении данных произошла ошибка."
                });
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message || "При удалении данных произошла ошибка."
            });
        })
};
