const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (require, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (require, res) => {
  try {
    const tagData = await Tag.findByPk(require.params.id, {
      include: [{ model: Product }],
    });
    !tagData
      ? res.status(400).json({ message: 'No tag found with this id!' })
      : res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (require, res) => {
  try {
    const tagData = await Tag.create(require.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (require, res) => {
  try {
    const updated = await Tag.update(require.body, {
      where: {id: require.params.id}
    });
    !updated[0]
      ? res.status(400).json({ message: 'No tag found with this id!' })
      : res.status(200).json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (require, res) => {
    try {
      const deleted = await Tag.destroy({
        where: {id: require.params.id}
      });
      !deleted
        ? res.status(400).json({ message: 'No tag found with this id!' })
        : res.status(200).json(deleted);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
