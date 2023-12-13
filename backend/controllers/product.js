const Product = require("../models/product");

module.exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();

    res.status(200).json({
      status: "OK",
      product,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports.getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json({
      status: "OK",
      product,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const newProduct = await Product.create({ name, description, price, image });

    res.status(201).json({
      status: "OK",
      newProduct,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image } = req.body;
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, image },
      { new: true }
    );

    res.status(200).json({
      status: "OK",
      updateProduct,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};



module.exports.deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;

      const deleteProduct = await Product.findByIdAndDelete(id);
  
      res.status(200).json({
        status: "OK",
        deleteProduct,
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };