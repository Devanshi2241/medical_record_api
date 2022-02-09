const mongoose = require("mongoose");


const User = require("./userModel.js");
const Record = require("./recordModel.js");


const create_record = async (req, res) => {
 
  const id = req.params.userId;
  User.findById(id).exec()
    .then(users => {

      if (!users) {
        res.json({
          message: "SignUp for creating medical record"
        })
      }
      else {

        const record = new Record({
          _id: new mongoose.Types.ObjectId(),
          nameOfDisease: req.body.nameOfDisease,
          to: req.body.to,
          from: req.body.from,
          Notes: req.body.Notes,

        })
        record.save().then(result => {
          res.status(201).json({
            message: "Record added successfully:)",
            nameOfDisease: result.nameOfDisease,
            to: result.to,
            from: result.from,
            Notes: result.Notes,
          });
        })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
      }
    });
}

const get_record_range = async (req, res, next) => {

  Record.find({
    from: { $gte: req.body.from },
    to: { $lte: req.body.to }
  })

    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        Records: docs.map(doc => {

          return {
            DiseaseName: doc.nameOfDisease,
            From: doc.from,
            To: doc.to,
            Notes: doc.Notes
          };
        })
      };

      res.status(200).json(response);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


const get_record_name = async (req, res, next) => {

  Record.find({
    nameOfDisease: req.body.nameOfDisease
  })

    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        Records: docs.map(doc => {

          return {
            DiseaseName: doc.nameOfDisease,
            From: doc.from,
            To: doc.to,
            Notes: doc.Notes
          };
        })
      };

      res.status(200).json(response);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};





module.exports = { create_record, get_record_range, get_record_name }