const {CreateUser,GetUsers} = require('../controllers/User');
const router = require('express').Router();


router.post('/',CreateUser);

router.get('/',GetUsers);

module.exports = router;