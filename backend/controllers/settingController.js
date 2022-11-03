import Setting from "../models/settingModel.js";

const createSetting = async (req, res) => {
  try {
    const setting = await Setting.create(req.body);
    res.status(201).json({
      succeded: true,
      setting,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
const updateSetting = async (req, res) => {
  try {
    const setting = await Setting.findOne({ _id: req.params.id });

    setting.avatar = req.body.avatar;
    setting.name = req.body.name;
    setting.job = req.body.job;
    setting.socialMedia = req.body.socialMedia;
    setting.save();

    res.status(200).json({
      succeded: true,
      setting,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });

    console.log(error);
  }
};
const getASetting = async (req, res) => {
  try {
    const setting = await Setting.findById({ _id: req.params.id });
    res.status(200).json({
      succeded: true,
      setting,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};


export { createSetting, getASetting, updateSetting };
