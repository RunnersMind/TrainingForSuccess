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

  //get programs, given user subscribed for
  findByUser: function(req, res) {
    var user_id;
    if( req.params.id ){
      user_id = req.params.id;
    } else if( req.user ){
      user_id = req.user.id;
    } else {
      res.redirect('/');
    }
    
    db.UserProgram.findAll({
      where: [{ userId: user_id  }]
    })
    .then( data => {
      let promises = [];
      let programs = [];
      data.forEach(function(user_prog){
        promises.push( 
          db.Program.findById( user_prog.programId )
            .then( program => {
              programs.push({
                program  : program,
                approved : user_prog.approved
              });
            },
            err=> res.status(422).json({}) ));
      });
      Promise.all( promises ).then( ()=>{
        res.json({programs});
      });
    }, error => {
      res.status(422).json({});
    });

  },

  //get programs created by given coach
  findByCoach: function(req, res) {
    var user_id;
    if( req.params.id ){
      user_id = req.params.id;
    } else if( req.user ){
      user_id = req.user.id;
    } else {
      res.redirect('/');
    }
    console.log("Getting programs created by user(coach) " + user_id);

    db.Program.findAll({
      attributes: ATTR_program,
      where: { [Op.and]: [
        { deleteFlag: 0 }, 
        { coachId: user_id }
      ]}
    }).then( coach_programs => {
      if( req.isAuthenticated() ){
        db.UserProgram.findAll({
            attributes: ['approved', 'programId'],
            where: {  userId: req.user.id }
          }).then( subscr =>{
            if(req.user.id == user_id){
              res.json({
                subscribed : subscr,
                rights: 'canEdit',
                programs: coach_programs
              });
            }
            else{
              res.json({
                subscribed : subscr,
                rights: 'canView',
                programs: coach_programs
              });
            }
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
    db.Program.findById( req.params.id, { 
      include: [ 
        { model: db.TrainingPlan }, 
        { 
          model: db.User, 
          attributes: ['id', 'email', 'displayName', 'photo', 'phone', 'userType', 'city', 'state']
        },
        // { needs association Program => UserProgram
        //   model: db.UserProgram,
        //   as: 'program_user',
        //   through: { attributes: ['approved', 'userId', 'programId']}
        // }
      ] 
    })
    .then( program => {
      // let user = program.users;
      db.UserProgram.findAll( {
        where: { programId: program.id }, 
        include: db.User
      }).then( users => {

        let user_id = program.coachId;
        if( req.user && req.user.id == user_id ){
          res.json({
            rights: 'canEdit',
            program: program,
            users : users
          });
        }
        else {
          res.json({
            rights: 'canView',
            program: program,
            users : users
          });
        }
        // res.json(program);
      }, error => {
        let user_id = program.coachId;
        if( req.user && req.user.id == user_id ){
          res.json({
            rights: 'canEdit',
            program: program
          });
        }
        else {
          res.json({
            rights: 'canView',
            program: program
          });
        }
        // console.log('findById_'+ error);
        // res.status(422).json(error);
      });
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
        res.status(422).json(error);
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
