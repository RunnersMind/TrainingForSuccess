const db = require('../models');
const Op = db.Sequilize.Op;

const ATTR_program = ['id', 'programName', 'programDescription', 'coachId',
                      'displayName', 'zipCode', 'State'];

module.exports = {
    findByCoachName: function(req,res){
        console.log('we are at the searchcontroller');
        db.User.findAll({
            attributes: ATTR_program,
            include: [{
                model:Program
            }]
            where:{ [Op.and]: [
                 {userType: 'Coach'},
                 {displayName: [Op.like]: '%' + req.params.text + '%'}
            ]})
        .then(Coaches => {
            console.log(Coaches);
            res.json(Coaches);
        }, error => {
            res.status(422).json(error);
        })

    // findByProgram: function(req,res){
    //     db.users.findAll({
    //         attributes: ATTR_program,
    //         include: [{
    //             model:Program
    //         }]
    //         where: {zipCode: req.param.zipCode}
    //     })
    //     }.then(Coaches => {
    //         res.json(users);
    //     }, error => {
    //         res.status(422).json(error);
    //     });
    // },

    //     findByZipCode:

    //     findByState:
}