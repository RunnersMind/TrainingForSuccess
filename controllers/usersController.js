const db = require("../models");

const ATTR_user = ['id', 'firstName', 'lastName', 'displayName',
                      'userType', 'city','state'];

module.exports = {

  findAll: function(req,res){
    db.User.findAll({
      attributes: ATTR_user
    }).then( users => {
      res.json(users);
    }, error => {
      res.status(422).json(error);
    });
  },

  findById: function(req, res) {
    console.log("Are we getting here?");
    db.User.findById( req.user.id )
    .then( user => {
      res.json(user);
    }, error => {
      console.log('findById_'+ error);
      res.status(422).json(error);
    });
  }

};
