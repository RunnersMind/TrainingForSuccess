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
    //req.params.id will come when we pass a variable directly into the call (coming from /user/2)
    //req.user.id will be present when the user is logged in (usually but you should check)

      db.User.findById (req.params.id)
      .then (user => {
        res.json(user);
      }, error => {
        console.log('findbyId_' + error);
        res.status(404).json(error);
      });


  }, //closes the findById function


  updateUser: function(req, res){
    console.log("UPDATING USER FUNCTION FOR USER ID: " + req.params.id);
    // console.log(req.params.id);
    //double check that the user is logged in (the edit link is also checking this)
    // if (req.isAuthenticated()) {

      db.User.update({
        displayName: "Test"
      }, {
        where: {
          id: req.params.id
        }
      }).then( user => {
        console.log("Updated!!!!!!!!!!!!!!!!!!!!!!!!");
        res.json(user);
      }, error => {
        console.log('update_user_'+ error);
        res.status(422).json(err);
      });

    // }
    // else res.redirect('/');     
  },


  findInfoById : function(req, res) {
    db.User.findById( req.params.id, {
      attributes: ['id', 'email', 'displayName', 'photo', 'phone', 'userType', 'city', 'state']
    })
    .then( user => {
      res.json(user);
    }, error => {
      res.status(422).json({});
    });
  }

};
