const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (require, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});
router.get('/:id', (require, res) => {
  Category.findOne({
    where: {
      id: require.params.id,
    },
    include: [Product],
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
});
router.post('/', (require, res) => {
  Category.create(require.body)
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
});
router.put('/:id', (req, res) => {
  Category.update(require.body, {
    where: {
      id: require.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(500).json(err));
});
router.delete('/:id', (require, res) => {
  Category.destroy({
    where: {
      id: require.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;


