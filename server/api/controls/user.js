const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

const User = require('../models/user');

exports.user_signup= (req, res, next) =>{
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if(user.length >= 1){
        return res.status(409).json({
          message:"Mail exists",
          state:false
        });
      }else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if(err){
            return res.status(500).json({
              error:err,
              state:false
            });
          } else {
            const user =new User({
              _id: new mongoose.Types.ObjectId(),
              username:req.body.username,
              email: req.body.email,
              password: hash
          });
          user
          .save()
          .then(result =>{
            res.status(201).json({
              message: 'user created',
              state:true
            });
          })
          .catch(err =>{
            console.log(err);
            res.status(500).json({
              error:err
            });
          });
          }
        });
      }
    })
  }

  exports.user_login= (req,res, next) =>{
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1){
        return res.status(401).json({
          message: 'Email Not Found',
          state:false
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
        if (err) {
          return res.status(401).json({
            message: 'Password is incorrect',
            state:false
          });
        }
        if(result){
        const token= jwt.sign(
          {
           email: user[0].email,
           userId:user[0].email._id
         }, 'secret', {
           expiresIn:"1h"
         }
         );
          return res.status(200).json({
            userId:user[0]._id,
            username:user[0].username,
            message: 'Auth successful',
            token:token,
            state:true
          });
        }
        res.status(401).json({
         message: 'Password is incorrect',
         state:false
       });
      });
    })
    .catch(err => {
     console.log(err);
     res.status(500).json({
       error:err
     });
 });
 }

 exports.user_AllUsers = 
 
  (req, res, next)=>{
  User.find()
  .select("username email _id")
  .exec()
  .then(docs =>{
      // const response= {
      //     // count: docs.length,
      //     users: docs.map(doc => {
      //      return {
      //          name: doc.username,
      //          email: doc.email,
      //          id: doc._id,
      //      }
      //     })
      // };
      res.status(200).json(docs);
  })
  .catch(err => {
      console.log(err);
      res.status(200).json({
          error:err
      });
  });
}

 exports.user_delete = (req, res, next) => {
    User.remove({ _id: req.params.userId})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'User deleted'
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error:err
      });
    });
  }
 
  exports.user_account= (req, res, next) =>{
    User.findOne({ _id: req.params.userId})
      // if(err) return next (err)
      
    .exec()
    .then(user => {
      if (user.length = 1){
        return res.status(200).json({
          username:user.username,
          email:user.email,
          state:true
        });
      }
      
      return res.status(401).json({
        message: 'Email Not Found',
        state:false
      });
    }) 
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error:err
          });
      });
    }
  