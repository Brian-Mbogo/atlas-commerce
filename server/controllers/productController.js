// Product controller provides the first API surface for catalog browsing.
const Product = require('../models/Product')
const asyncHandler = require('../utils/asyncHandler')

const getProducts = asyncHandler(async (req, res) => {
  const { category, search, sort = 'createdAt' } = req.query

  const filters = {}

  if (category) {
    filters.category = category
  }

  if (search) {
    // Text search is simple for now and can later move to indexed or AI-powered search.
    filters.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
    ]
  }

  const products = await Product.find(filters).sort(sort)

  res.json({
    count: products.length,
    products,
  })
})

const getProductBySlug = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug }).populate(
    'category reviews',
  )

  if (!product) {
    return res.status(404).json({ message: 'Product not found.' })
  }

  res.json(product)
})

module.exports = {
  getProducts,
  getProductBySlug,
}
