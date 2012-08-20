
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    Realm = require('./routes/Realm.js');
  

var app = module.exports = express.createServer();


// Configuration
app.configure(function () {
    "use strict";
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.cookieParser());
    app.use(express.session({ secret: "keyboard cat"}));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    "use strict";
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    "use strict";
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/login', routes.getlogin);
app.post('/login', routes.postlogin);
app.get('/lobby', routes.lobby);
app.post('/game/new', routes.creategame);
app.post('/game/join', routes.joingame);
app.get('/game/all', routes.getallgames);
app.get('/game/:gameid', routes.getgame);
app.get('/play/:gameid', routes.playgame);
//app.get('/game', routes.game);

app.listen(8080, function () {
    "use strict";
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

