const db = require('../models');
const Op = db.Sequilize.Op;

const ATTR_program = ['id', 'programName', 'programDescription', 'coachId',
                      'displayName', 'zipCode', 'State'];

module.exports = {
    findCoachesPrograms: function(req,res){
        db.users.findAll({
            attributes: ATTR_program,
            include: [{
                model:Program
            }]
            where:{ [Op.and]: [
                 {userType: 'Coach'},
                 [Op.like]: {[Op.any]: [req.params.displayName]}
            ]})
        }.then(Couches => {
            res.json(users);
        }, error => {
            res.status(422).json(error);
        })

    findProgramsByZipCode: function(req,res){
        db.users.findAll({
            attributes: ATTR_program,
            include: [{
                model:Program
            }]
            where: {zipCode: req.param.zipCode}
        })
        }.then(Coaches => {
            res.json(users);
        }, error => {
            res.status(422).json(error);
        })

    findProgramsByState:



    findProgramsByDescription:
}
