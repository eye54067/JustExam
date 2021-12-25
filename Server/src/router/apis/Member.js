const router = require('express').Router({ mergeParams: true });
const controller = require('../../controllers/Member.controller');

// owner (teacher) || member (student)
router.get('/', controller.getTaskMenu);

// owner (teacher)
router.put('/:id', controller.update);

// owner (teacher) || self (student)
router.delete('/:id', controller.post);

module.exports = router;