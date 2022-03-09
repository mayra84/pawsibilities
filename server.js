require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const logger = require('morgan');
const db = require('./models')

const indexRouter = require('./routes/index');
const apiUsersRouter = require('./routes/api/users');
const apiDogsRouter = require('./routes/api/dogs');

const apiHealthRouter = require('./routes/api/health')
const upload = require('./upload')


const app = express();


// Define POST route


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const store = new SequelizeStore({db: db.sequelize})

//session middleware
app.use(
    session({
      secret: 'pancakes',
      resave: false,
      saveUninitialized: false,
      store: store,
    })
   );
   store.sync();
   

app.use(express.static(path.join(__dirname, 'client/build')));

// app.use('/', indexRouter);
app.use('/api/v1/users', apiUsersRouter);
app.use('/api/v1/dogs', apiDogsRouter)

app.use('/api/v1/health', apiHealthRouter)

app.use('*', (req, res) => {
  res.send(path.join(__dirname, 'client/build/index.html'))
})

module.exports = app;
