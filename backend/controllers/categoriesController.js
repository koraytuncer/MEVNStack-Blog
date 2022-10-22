import Categories from "../models/categoriesModel.js";

const createCategories = async (req, res) => {
  try {
    const category = await Categories.create(req.body);
    console.log(req.body)
    res.status(201).json({
      succeded: true,
      category,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
const updateCategories = async (req, res) => {
  try {
    const category = await Categories.findById({ _id: req.params.id });

    category.title = req.body.title;
    category.color = req.body.color;
    category.save();

    res.status(200).json({
      succeded: true,
      category,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });

    console.log(error)
  }
};
const deleteCategories = async (req, res) => {
  try {
    //await Post.findById({ _id: req.params.id });
    await Categories.findByIdAndRemove(req.params.id);
    res.status(200).json({
      succeded: true,
      message:"Silme İşlemi Başarılı",
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
const getACategories = async (req, res) => {
  try {
    const category = await Categories.findOne({ slug: req.params.slug });
    res.status(200).json({
      succeded: true,
      category,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
const getAllCategories = async (req, res) => {
  try {
    const category = await Categories.find({});
    res.status(200).json({
      succeded: true,
      category,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });

    console.log(error)
  }
};


export { createCategories, getACategories, getAllCategories,updateCategories,deleteCategories };
