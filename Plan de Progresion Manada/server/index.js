require('./passportConfig')
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const passport=require('passport');
const {mongose} = require('./database');
// Settings

app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
app.use(bodyParser.json());
app.use(passport.initialize());



// Routes
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/employees2', require('./routes/employee.routes2'));

app.use('/api', require('./routes/index.router'));
app.use('/api', require('./routes/index.router'));
app.use('/api', require('./routes/index.router'));
app.use('/api/solicitarinsignias', require('./routes/solicitarInsignia.routes'));

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});