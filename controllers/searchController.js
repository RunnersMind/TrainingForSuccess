const db = require('../models');
const Op = db.Sequilize.Op;

const ATTR_search = ['id', 'displayName', 'description',
                     'email', 'city', 'state', 'zipcode',
                     'userType'];

module.exports = {
    findCoaches: function(req,res){
        db.users.findAll({
            attributes: ATTR_search
            where: {userType: 'Coach'}}
            }
        }).then( Couches => {
            res.json(users);
        }, error => {
            res.status(422).json(error);
        });
    }
}