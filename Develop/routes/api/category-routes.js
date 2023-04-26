const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

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
  

























// router.get('/', async (req, res) => {
//   try {
//     const categoryData = await Category.findAll({
//       include: [{ model: Product }],
//     });
//     res.status(500).json(categoryData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
//   // find all categories

//   router.get('/:id', async (req, res) => {
//     try {
//       const categoryData = await Category.findByPk(req.params.id, {
//         include: [{ model: Product }],
//       });
//       res.status(500).json(categoryData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
    // find one category by its `id` value


// router.get('/', (req, res) => {
//   try {
//     const categoryData = await Category.findAll({
//       include: [{ model: Product }],
//     });
//     res.status(500).json(categoryData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
//   // find all categories
//   // be sure to include its associated Products
// });


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

