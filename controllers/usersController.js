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

    if(req.params.id) {
      db.User.findById (req.params.id)
      .then (user => {
        res.json(user);
      }, error => {
        console.log('findbyId_' + error);
        res.status(404).json(error);
      });
    }

    else {
        console.log("Are we getting to the else statement?");
        //we didn't get a parameter so we're assuming this is the log in path
        //double check the user is logged in and if not, punt them to the homepage


        db.User.findById( req.user.id )
          .then( user => {
              res.json(user);
            }, error => {
            console.log('findById_'+ error);
            res.status(422).json(error);
          });

      //   if (req.isAuthenticated()){
      //     db.User.findById( req.user.id )
      //     .then( user => {
      //         res.json(user);
      //       }, error => {
      //       console.log('findById_'+ error);
      //       res.status(422).json(error);
      //     });
      // }  

      //   //send user away from the profile page if they're not logged in
      //   else {
      //     res.redirect('/search');
      //   }
    }


    //OLD CODE -- THIS WORKS FOR IF THE USER IS LOGGED IN
    // if (req.isAuthenticated()){
    //   db.User.findById( req.user.id )
    //   .then( user => {
    //       res.json(user);
    //     }, error => {
    //     console.log('findById_'+ error);
    //     res.status(422).json(error);
    //   });
    // }  

    // //send user away from the profile page if they're not logged in
    // else {
    //   res.redirect('/search');
    // }

  }, //closes the findById function


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
  // },

  // updateUser: function(req, res){
  //   if (req.isAuthenticated()) {

  //     db.User.update( req.body,{
  //       where: { 
  //         [db.Sequelize.Op.and]: [
  //           { id : req.body.id }          ]
  //       }
  //     }).then( user => {
  //       console.log(user.get({ plain: true }));
  //       res.json(user);
  //     }, error => {
  //       console.log('update_user_'+ error);
  //       res.status(422).json(err);
  //     });

  //   }
  //   else res.redirect('/');     
  // }

};
