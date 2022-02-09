const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt =  require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const checkAuth = require("./check-auth.js");

const User = require("./userModel.js");



//creating token
const createToken = (email,id) =>{
  const tokens = jwt.sign(
    {
      email ,
      id
    },
    process.env.JWT_KEY,
    {
      expiresIn: "1h"
    }
  );

  return tokens;
}

//signup
const signup = async (req, res, next) => {
  await User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Email already exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
          
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {

                const token = createToken(  result.email, result._id)
                res.cookie('nToken', token, { maxAge: 90000, httpOnly: true });

                res.status(201).json({
                  message: "User created Successfully",
                  id: result._id,
                  firstname: result.firstname,
                  lastname: result.lastname,
                  email: result.email,
                  token:token
                });


              })
              .catch(err => {
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    })
}


//login
const login = async (req, res) => {

  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "User not exist"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          const token = createToken(  user[0].email, user[0]._id)
      
          res.cookie('nToken', token, { maxAge: 1800000, httpOnly: true });
        
          return res.status(200).json({
            message: "Auth successful",
            token: token,

          });
        }
        res.status(401).json({
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

}


//logout
const logout = async (req, res) => {
  try {
   

  res.clearCookie('nToken')
  res.json({
		success: 'Successfully logged out!',
	})
  } 
  catch(error){   
    res.status(500).send(error);
  }
}





module.exports = { signup, login, logout };