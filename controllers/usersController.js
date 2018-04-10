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
    
    //check first if you're getting the id passed into the request
    // if (req.params.id ==='undefined') 
      db.User.findById( req.user.id )
      .then( user => {
        res.json(user);
      }, error => {
        console.log('findById_'+ error);
        res.status(422).json(error);
      });
    
  }

};
