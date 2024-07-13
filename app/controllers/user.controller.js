const db = require("../models");
const User=db.users;
     
exports.create = (req, res) => {
    const user = new User({
      name:req.body.name,
      email: req.body.email,
      password: req.body.password
    });
  
    user.save()
      .then(data => res.send(data))
      .catch(err => {
        res.status(500).send({
          msg: err.message || "Error while creating user"
        });
      });
  };
  

      

exports.findAll=(req,res)=>{
    User.find()
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                msg:
                err.msg || "error while reteriving user"
            });
        });
};


   
   exports.findOne =(req,res) => {
    const id=req.params.id;
    User.findById(id).then(
        data=>{
            if(!data){
                res.status(404).send({msg:"user not found"})
            }
            else{
                res.send(data);

            }
        }
    ).catch(err=>{
        res.status(500)
        .send({msg:"Error retrieving user with id ="+id})
    });
   };

  
     exports.updateUser=(req,res)=>{
        if(!req.body){
            return res.status(400).send({
                msg:"user to update can not be empty !"
            });

        }
        const id=req.params.id;
        User.findByIdAndUpdate({id},req.body,{useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(400).send({
                    msg:`cannot update user with id =${id}.!`
                });
            }else{
                res.send({msg:"User updated successfully"});
            }
        })
        .catch(err =>{
            res.status(500).send({
                msg:"error updating user with id "+id
            });
        });
     };

     exports.deleteUser=(req,res)=>{
        const id=req.params.id;
        User.findByIdAndDelete({_id:id},{useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(400).send({
                    msg:`cannot delete user with id =${id}.!`
                })
            }else{
                res.send({msg:"User Delete successfully"});
            }
        })
        .catch(err =>{
            res.status(500).send({
                msg:"error deleting user with id "+id
            });
        })
     }