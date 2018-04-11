const db = require("../models");
const Op = db.Sequelize.Op;

const ATTR_program = ['id', 'programName', 'programDescription', 'coachId',
                      'programStartDate', 'programEndDate'];

module.exports = {

  findAll: function(req,res){
    // res.json({msg: 'HELLO'});
    db.Program.findAll({
      attributes: ATTR_program
    }).then( programs => {
      res.json(programs);
    }, error => {
      res.status(422).json(error);
    });
  },

  findByCoach: function(req, res) {
    var user_id;
    if( req.params.id ){
      user_id = req.params.id;
    } else if( req.user ){
      user_id = req.user.id;
    } else {
      res.redirect('/');
    }

    db.Program.findAll({
      attributes: ATTR_program,
      where: { [Op.and]: [
        { deleteFlag: 0 }, 
        { coachId: user_id }
      ]}
    }).then( coach_programs => {

      if( req.user && req.user.id == user_id ){
        res.json({
          rights: 'canEdit',
          programs: coach_programs
        });
      }
      else {
        res.json({
          rights: 'canView',
          programs: coach_programs
        });
      }
    }, error => {
      console.log('findByCoach_'+ error);
      res.status(422).json(error);
    });   
  },

  findById: function(req, res) {
    db.Program.findById( req.params.id, { include: [ db.TrainingPlan ] })
    .then( program => {
      res.json(program);
    }, error => {
      console.log('findById_'+ error);
      res.status(422).json(error);
    });
  },

  create: function(req, res) {
    console.log('\n\nnew program request!!! user:'+req.user.id+'\n\n');
    if (req.isAuthenticated()) {
      console.log(req.body);
      let new_program = req.body;
      new_program.coachId = 1;//req.user.id;

      db.Program.create( new_program )
        .then( program => {
          console.log(program.get({ plain: true }));
          res.json(program);
        }, error => {
          console.log('create_program_'+ error);
          res.status(422).json(err);
      });
    }
    else res.redirect('/'); 
  },

  update: function(req, res){
    if (req.isAuthenticated()) {

      db.Program.update( req.body,{
        where: { 
          [db.Sequelize.Op.and]: [
            { id : req.body.id },
            { coachId : req.user.id }
          ]
        }
      }).then( program => {
        console.log(program.get({ plain: true }));
        res.json(program);
      }, error => {
        console.log('update_program_'+ error);
        res.status(422).json(err);
      });

    }
    else res.redirect('/');     
  },

  remove: function(req, res) {
    if (req.isAuthenticated()) {

      db.Program.update( {
        deleteFlag : 1
      },{
        where: { 
          [Op.and]: [
            { id : req.body.id },
            { coachId : req.user.id }
          ]
        }
      }).then( program => {
        console.log(program.get({ plain: true }));
        res.json(program);
      }, error => {
        console.log('delete_program_'+ error);
        res.status(422).json(err);
      });

    }
    else res.redirect('/');     
    // if( req.isAuthenticated() )
    // db.Program.destroy({
    //   where: {
    //     [db.Sequelize.Op.and]: [
    //       { id : req.params.id },
    //       { coachId : req.user.id }
    //     ]
    //   }
    // }).then(result=> res.status(200).send(),
    //   error => res.status(422).send()
    // );
  }
};
