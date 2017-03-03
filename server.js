var express = require("express"),
    app = express(),
    mongojs = require("mongojs"),
    db = mongojs("registerlist", ["registerlist", "contactlist"]),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser");
mongoose.connect('mongodb://localhost/joinCIApp');
	var path=require('path');

app.use(express.static(__dirname + "/public"));

var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
app.set('views',path.join(__dirname, '/public/views'));
app.set('view engine', 'html'); 


var User = mongoose.model('User', {
    username: String,
    designation: String,
    password: String

});
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
    function(username, password, done) {
    	console.log(username)
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (user.password != password) {
                return done(null, false);
            }
            return done(null, user);

        });
    }
));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
// app.get("/register",function(request,response) {



// 	db.registerlist.find(function(err,data) {
// 		console.log(data);
// 		response.json(data);
// 	});
// });
// app.post("/cilayout" , function(req , res) {
// 	console.log(req.body);
// 	db.registerlist.insert(req.body, function(err , data) {
// 		res.json(data);
// 	})
// })



app.get('/cilayout', function(req, res) {
    res.render('cilayout.html')
});
app.get('/register', function(req, res) {
    // res.sendFile('public/views/cilayout.html',
    // {root:__dirname});
    res.render('cilayout.html');
});

app.post("/register", function(req, res) {
    // console.log(req.body);
    // db.registerlist.insert(req.body, function(err , data) {
    // 	console.log(data);
    // 	res.json(data);
    // 	})
    var newUser = new User({
        username: req.body.name,
        designation: req.body.designation,
        password: req.body.password
    })
    console.log(newUser);
	newUser.save(function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
        }
    })
    res.redirect("/cilayout.html");

})

app.post('/',
    passport.authenticate('local', {
        successRedirect: '/mainpage',
        failureRedirect: '/'
    }));

app.get('/mainpage', function(req, res) {
    // res.sendFile('public/views/mainpage.html',{root:__dirname},
    res.render('mainpage.html',{
        user: req.user
    })
})

// app.post('/', function(req, res) {
//     console.log(req.body);
//     console.log("data is posted")
//     db.contactlist.insert(req.body, function(err, docs) {
//         res.json(docs);
//     });
// });
app.listen(3000, function() {
    console.log("Server running on port 3000");
})