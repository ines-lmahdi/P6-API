const Thing = require("../models/Thing");
const ficheUser = require("../models/User");

exports.likeFicheUser = (req, res, next) => {
    Thing.findOne({
        _id: req.params.id
      }).then(
        (thing) => {
            thing.likes += 1 ;
            thing.save();
            res.status(204).send();
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );
}