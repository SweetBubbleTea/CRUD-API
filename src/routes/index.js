const express = require('express');

const router = express.Router();

router.get('/crud-api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Connection success',
    version: '1.0.0',
  });
});

module.exports = router;