//Controller for the Employee(user) 
const User = require('../models/user');

//render home page
module.exports.home = function (req, res) {
    return res.render("home", {
      title: "Placements Cell | Home",
    });
  };
  

//controller for the signup page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/home');
    }
    return res.render('user_sign_up',{title:'Placements | SignUp'});
}

//controller for the signin page
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/home');
    }
    return res.render('user_sign_in',{title:'Placements | SignIn'});
}

//Controller for get the sign up data
module.exports.createUser = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return;}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return;}
               
                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
}


//Controller for Sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

//Controller for logout the session
module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}

