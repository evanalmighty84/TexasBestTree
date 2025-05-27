const express = require('express');
const router  = express.Router();

const { createEmail } = require('./controller/createEmail');

// Use lowercase “contactus” so it matches your curl:

router.post('/contactus', createEmail);

module.exports = router;
