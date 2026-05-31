const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/influencerController');

router.get('/', ctrl.list);
router.post('/', auth, ctrl.create);
router.get('/:id', ctrl.get);
router.put('/:id', auth, ctrl.update);
router.delete('/:id', auth, ctrl.remove);

module.exports = router;
