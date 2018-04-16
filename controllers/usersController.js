const db = require("../models");

const ATTR_user = ['id', 'description','email','firstName', 'lastName', 'displayName',
                      'userType','photo','tShirtSize','phone','address1','address2', 'city','state','country','zipcode','birthDate','gender','emergencyFName','emergencyLName','emergencyPhone'];

module.exports = {

  // findAll: function(req,res){
  //   db.User.findAll({
  //     attributes: ATTR_user
  //   }).then( users => {
  //     res.json(users);
  //   }, error => {
  //     res.status(422).json(error);
  //   });
  // },


  findById: function(req, res) {
    
    if (req.isAuthenticated()) {
            db.User.findById( req.user.id )
            .then( user => {
                res.json(user);
              }, error => {
              console.log('findById_'+ error);
              res.status(422).json(error);
            });
          
    } //closes if statement
    
    //send user away from the profile page if they're not logged in
    else {
      //note: this isn't working right now, but only needs to happen if user hits /user path directly....so come back to it
      res.redirect('/search');
    }

  } //closes the findById function



};
