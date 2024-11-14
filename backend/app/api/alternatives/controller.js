const Alternative = require("./model");

const createAlternative = async (req, res) => {
  try {
    const { kode, name } = req.body;
    const alternative = await Alternative.create({ kode, name });
    res.status(201).json(alternative);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllAlternative = async (req, res) => {
  try {
    const alternatives = await Alternative.findAll();
    res.status(200).json(alternatives);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAlternativeById = async (req, res) => {
  try {
    const { id } = req.params;
    const alternative = await Alternative.findByPk(id);
    if (alternative) {
      res.status(200).json(alternative);
    } else {
      res.status(404).json({ message: "Alternantive tidak tersedia" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAlternative = async (req, res) => {
  try {
    const { id } = req.params;
    const { kode, name } = req.body;
    const alternative = await Alternative.findByPk(id);

    if (alternative) {
      alternative.kode = kode;
      alternative.name = name;
      await alternative.save();
      res.status(200).json(alternative);
    } else {
      res.status(404).json({ message: "Alternative tidak tersedia" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAlternative = async (req, res) => {
  try {
    const { id } = req.params;
    const alternative = await Alternative.findByPk(id);

    if (alternative) {
      await alternative.destroy();
      res.status(200).json({ message: "Berhasil menghapus" });
    } else {
      res.status(404).json({ message: "Alternative tidak tersedia" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAlternative,
  getAllAlternative,
  getAlternativeById,
  updateAlternative,
  deleteAlternative,
};
