var cradle = require('cradle'),
    Realm = require('./Realm.js'),
    User = require('./User.js'),
    db = new (cradle.Connection)('localhost', 5984, {
        cache: true,
        raw: false
    }).database('everything');
/*
* Check if db exists, creat it if it doesn't
*/

db.exists(function (err, exists) {
    "use strict";
    if (err) {
        console.log('error', err);
    } else if (exists) {
    } else {
        console.log('database does not exists.');
        db.create();
    }
});

/*
 * GET home page.
 */

exports.index = function (req, res) {
    "use strict";
    res.render('index', { title: 'Express' });
};


/*
 * GET lobby page.
 */

exports.lobby = function (req, res) {
    "use strict";
    if (req.session.username === undefined) {
        res.redirect('/login?from=' + req.path);
    } else {
        console.log(req.session.username);
        res.render('lobby', { title: 'Express' });
        }
};

/*
 * GET game page.
 */

exports.game = function (req, res) {
    "use strict";
    if (req.session.username === undefined) {
        res.redirect('/login?from=' + req.path);
    } else {
        var realm = new Realm("testgame1");
        res.render('game', { title: 'Express' });
        }
};

/*
*Function to create a new game
*/


exports.creategame = function (req, res) {
    "use strict";
    console.log("attempting to create new game");
    console.log("Session: " + req.session);
    console.log("Session.username " + req.session.username);
    var realm = new Realm(req.body.name);
    var user = new User();
    user.username = req.session.username;
    console.log(user);
    realm.addUser(user);
    realm.owner = user;
    db.save({type: 'Game',
         game: realm}, function () {console.log("saved " + req.body.name);
                                    res.send(200); });
};


exports.getgame = function (req, res) {
    "use strict";
    console.log("attempting to get existing game " + req.params.gameid);
    var gamedata = db.view('games/all', {key: req.params.gameid}, function (err, doc) {
        if (err){
            console.log(err);
        } else{
            res.json(doc[0].value);
            }
    });
};

exports.getallgames = function (req, res) {
    "use strict";
    var gamedata = db.view('games/all', function (err, doc) {
        if (err){
            console.log(err);
        } else{
            var games = {};
            for (var element in doc) {
                games[doc[element].key] = doc[element].value;
            }
            res.json(games);
            }
    });
};

exports.joingame = function (req, res) {
    "use strict";
    db.view('games/all', {key: req.body.gameid}, function (err, doc) {
        if (err){
            console.log(err);
        } else{
//           var thisgame = new Realm(JSON.parse(doc[0].value));
           console.log(typeof doc[0].value);
        }
        }); 
};

exports.playgame = function (req, res) {
    "use strict";
    res.render('play', { title: 'play' });

};
exports.getlogin = function (req, res) {
    "use strict";
    res.render('login', { title: 'Express' });
};

exports.postlogin = function (req, res) {
    "use strict";
    console.log(req.body);
    req.session.username = req.body.username;
    res.send(200);
};
