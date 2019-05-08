const router = require('express').Router();
const controller = require('./controllers');

router.get('/poems', controller.poems.get);
router.get('/poem/:id', controller.poem.get);
router.post('/poem', controller.poem.post)
router.delete('/poem/:id', controller.poem.delete)
router.put('/poem/:id', controller.poem.update)

module.exports = router;