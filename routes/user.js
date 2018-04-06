module.exports = function(app, passport) {

    app.get('/user', function(req, res){
        //default page for each user
        res.json({msg: "Hello World!"});
    });

};




