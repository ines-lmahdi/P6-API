const express = require('express');
const router = express.Router();
const Thing = require('../models/Thing');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

const stuffCtrl = require('../controllers/stuff');

const like = require("../controllers/like");

router.post('/', auth, multer, stuffCtrl.createThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.get('/', auth, stuffCtrl.getAllThings);
router.get("/:id/like", auth,like.likeFicheUser);
// voir avec patch ou put. 404 option express

module.exports = router;