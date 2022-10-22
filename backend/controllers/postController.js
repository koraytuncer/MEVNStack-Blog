import Post from "../models/postModel.js";

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      succeded: true,
      post,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
const updatePost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    post.title = req.body.title;
    post.description = req.body.description;
    post.categories = req.body.categories;
    post.author = req.body.author;
    post.save();

    res.status(200).json({
      succeded: true,
      post,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });

    console.log(error);
  }
};
const deletePost = async (req, res) => {
  try {
    //await Post.findById({ _id: req.params.id });
    await Post.findByIdAndRemove(req.params.id);
    res.status(200).json({
      succeded: true,
      message: "Silme İşlemi Başarılı",
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
const getAPost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug}).populate("category")
    res.status(200).json({
      succeded: true,
      post,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
const getAllPost = async (req, res) => {
  try {
    const post = await Post.find({}).populate("category")
    res.status(200).json({
      succeded: true,
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succeded: false,
      error,
    });

    console.log(error);
  }
};

export { createPost, getAPost, getAllPost, updatePost, deletePost };
