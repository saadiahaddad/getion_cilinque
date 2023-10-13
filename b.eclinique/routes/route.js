

const express = require('express');
const domaineController = require('../controlers/domaineController');
const specialiteController =require ('../controlers/specialiteController');

const router = express.Router();




router.get('/favicon.ico', (req, res) => {
    res.status(204).end();
  });


// route domaines

router.get('/domaines', domaineController.findAll);
router.get('/domaines/:id',  domaineController.findById);
router.post('/domaines',  domaineController.create);
router.put('/domaines/:id',  domaineController.update);
router.delete('/domaines/:id',  domaineController.delete);

// route specialites

router.get('/specialites',specialiteController.findAll);
router.get('/specialites/:id',  specialiteController.findById);
router.post('/specialites',  specialiteController.create);
router.put('/specialites/:id',  specialiteController.update);
router.delete('/specialites/:id',  specialiteController.delete);



// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes
  
    // Send an error response to the client
    res.status(500).json({
      error: 'Internal Server Error',
    });
  });
  
module.exports = router;