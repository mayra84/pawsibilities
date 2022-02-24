const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const logger = require('morgan');
const db = require('./models')

const indexRouter = require('./routes/index');
const apiUsersRouter = require('./routes/api/users');

const app = express();

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
   

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/api/v1/users', apiUsersRouter);

module.exports = app;
