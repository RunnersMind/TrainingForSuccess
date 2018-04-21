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


      db.User.update( req.body,{
        where: { 
          [db.Sequelize.Op.and]: [
            { id : req.params.id }
          ]
        }
      }).then( user => {
        res.json(user);
      }, error => {
        console.log('update_user_'+ error);
        res.status(422).json(err);
      });


      // db.User.update({
      //   displayName: "Test"
      // }, {
      //   where: {
      //     id: req.params.id
      //   }
      // }).then( user => {
      //   console.log("Updated!!!!!!!!!!!!!!!!!!!!!!!!");
      //   res.json(user);
      // }, error => {
      //   console.log('update_user_'+ error);
      //   res.status(422).json(err);
      // });

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
  },

  subscribeUserToProgram : function(req, res) {
   
    if (req.isAuthenticated()) {

      let user_prog = {
        userId : req.user.id,
        programId : req.body.program_id
      };
      db.UserProgram.create(
        user_prog
      ).then(up_created => {
          console.log('user-program: '+ up_created);
          res.status(200).json(up_created);
      }, err => {
          console.log('db.User.subscribeUserToProgram')
          console.log(err);
          res.status(422).json(err);
      }); 
    }
    else {
      res.status(403).json({});
    }
  },

  approveForProgram : function(req, res) {

    if (req.isAuthenticated()) {

      db.UserProgram.update( {
        approved : true
      },
      {
        where: { 
          [db.Sequelize.Op.and]: [
            { programId : req.body.program_id },
            { userId : req.body.user_id }
          ]
        }
      }).then( result => {
        console.log(result.get({ plain: true }));
        res.json(result);
      }, error => {
        console.log('update_user_program_'+ error);
        res.status(422).json(error);
      });

    }
    else res.status(403).json({});     
  },

  declineForProgram : function(req, res) {
    if( req.isAuthenticated() )
    db.UserProgram.destroy({
      where: {
        [db.Sequelize.Op.and]: [
          { programId : req.body.program_id },
          { userId : req.body.user_id }
        ]
      }
    }).then(result=> res.status(200).send(),
      error => res.status(422).send()
    );

  }

};
