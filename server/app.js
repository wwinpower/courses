const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const keys = require('./key');
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());
app.use(helmet());
app.use(bodyParser.json())
app.use(morgan('dev'));

require('./app/routes/course.routes.js')(app);


const PORT = process.env.PORT || 3000;

async function start() {

    await mongoose.connect(`${keys.MONGO_URL}`, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Успешно подключился к базе данных");

        app.listen(PORT, () => {
            console.log("Сервер прослушивает порт 3000");
        });

    }).catch(err => {
        console.log('Не удалось подключиться к базе данных.', err);
        process.exit();
    });

}

start();
