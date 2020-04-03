const router = require('express').Router();
const routerUser = require('./routerUser');
const routerMuisc = require('./routerMusic');

router.use(routerUser);
router.use('/', routerMuisc);

module.exports = router;

