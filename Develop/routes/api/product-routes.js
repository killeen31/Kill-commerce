const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', async (require, res) => {
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (require, res) => {
  try {
    const product = await Product.findByPk(require.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    !product
      ? res.status(400).json({ message: "No product found with this id!" })
      : res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', (require, res) => {
  Product.create(require.body)
    .then((product) => {
      if (require.body.tagIds.length) {
        const productTagIdArr = require.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      res.status(400).json(err);
    });
});
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  // Product.create(require.body)
  //   .then((product) => {
  //     // if there's product tags, we need to create pairings to bulk create in the ProductTag model
  //     if (require.body.tagIds.length) {
  //       const productTagIdArr = require.body.tagIds.map((tag_id) => {
  //         return {
  //           product_id: product.id,
  //           tag_id,
  //         };
  //       });
  //       return ProductTag.bulkCreate(productTagIdArr);
  //     }
  //     // if no product tags, just respond
  //     res.status(200).json(product);
  //   })
  //   .then((productTagIds) => res.status(200).json(productTagIds))
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(400).json(err);
  //   });
router.put('/:id', (require, res) => {
  Product.update(require.body, {
    where: {
      id: require.params.id,
    },
  })
    .then((product) => {
      return ProductTag.findAll({ where: { product_id: require.params.id } });
    })
    .then((productTags) => {
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = require.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: require.params.id,
            tag_id,
          };
        });
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !require.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete('/:id', (require, res) => {
});

module.exports = router;
