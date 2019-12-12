var connection = require('./../config');
module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today,
        "number":req.body.number
    }
    connection.query('INSERT INTO user2 SET ?',users, function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:''+error+''
            })
        }else{


            res.json({
                status:true,
                data:results,
                message:'user registered sucessfully'
            })
        }
    });
}