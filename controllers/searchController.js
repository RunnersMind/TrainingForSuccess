const db = require('../models');
const Op = db.Sequelize.Op;

const ATTR_user = ['id','description','email','firstName', 'lastName', 'displayName',
                      'userType','phone','address1','address2', 'city','state','country','zipcode','birthDate','gender'];

module.exports = {
    findByCoachName: function(req,res){
        db.User.findAll({
            attributes: ATTR_user,
            include: [{
                model:db.Program,
            }],
            where:{ [Op.and]: [
                {userType: 'Coach'},
                {displayName: {[Op.like]:'%' + req.params.text + '%'}}
            ]}
        })
        .then(Coaches => {
            console.log(Coaches);
            res.json(Coaches);
        }, error => {
            res.status(422).json(error);
        });
    },

    findByProgram: function(req,res){
        console.log("we are at the program controller");
        db.User.findAll({
            attributes: ATTR_user,
            include: [{
                model:db.Program,
                where:{[Op.and]: [
                    { programDescription: {[Op.like]:"%" + req.params.text + "%"}},
                    { programStartDate: {[Op.gt]: new Date()}},
                    { deleteFlag: false}
                ]},
            }],
            where:{ userType: 'Coach'}             
        })
        .then(Programs => {
            console.log(Programs);
            res.json(Programs);
        }, error => {
            res.status(422).json(error);
        });
    },
    
    findByState: function(req,res){
        db.User.findAll({
            attributes: ATTR_user,
            include: [{
                model:db.Program
            }],
            where:{[Op.and]: [
                {userType: 'Coach'},
                {state: req.params.text}
            ]}
        })
        .then(States => {
            console.log(States);
            res.json(States);
        }, error => {
            res.status(422).json(error);
        });
    },
    
    findByZipCode: function(req,res){
        db.User.findAll({
            attributes: ATTR_user,
            include: [{
                model:db.Program
            }],
            where:{ [Op.and]: [
                {userType: 'Coach'},
                {zipCode: req.params.text}
            ]}
        })
        .then(ZipCode => {
            console.log(ZipCode);
            res.json(ZipCode);
        }, error => {
            res.status(422).json(error);
        });
    }
};