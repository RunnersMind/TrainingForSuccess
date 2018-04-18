const db = require('../models');
const Op = db.Sequelize.Op;

const ATTR_user = ['id', 'description','email','firstName', 'lastName', 'displayName',
                      'userType','photo','tShirtSize','phone','address1','address2', 'city','state','country','zipcode','birthDate','gender','emergencyFName','emergencyLName','emergencyPhone'];

module.exports = {
    findByCoachName: function(req,res){
        console.log('we are at the searchcontroller');
        // res.json({result: 'Hello'});
        db.User.findAll({
            attributes: ATTR_user,
            include: [{
                model:db.Program
            }],
            where:{ [Op.and]: [
                { userType: 'Coach'},
                // {displayName: req.params.text}
                {displayName: { [Op.like]: ['%' + req.params.text + '%'] }}
            ]}
        })
        .then(Coaches => {
            console.log(Coaches);
            res.json(Coaches);
        }, error => {
            res.status(422).json(error);
        });
    }
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
    
};