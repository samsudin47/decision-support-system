const Criteria = require("./model");

// Controller untuk membuat kriteria baru
const createCriteria = async (req, res) => {
  try {
    const { kode, kriteriaId, bobot, type } = req.body;
    const criteria = await Criteria.create({ kode, kriteriaId, bobot, type });
    res.status(201).json(criteria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All kriteria
const getAllKriteria = async (req, res) => {
  try {
    const criterias = await Criteria.findAll();
    res.status(200).json(criterias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Kriteria By Id
const getKriteriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const criteria = await Criteria.findByPk(id);
    if (criteria) {
      res.status(200).json(criteria);
    } else {
      res.status(404).json({ message: "Criteria tidak tersedia" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update criteria by id
const updateCriteria = async (req, res) => {
  try {
    const { id } = req.params;
    const { kode, kriteriaId, bobot, type } = req.body;

    const existingCriteria = await Criteria.findOne({
      where: { kode },
    });

    if (existingCriteria && existingCriteria.id !== parseInt(id)) {
      return res
        .status(400)
        .json({ message: "Kode sudah digunakan oleh kriteria lain" });
    }

    const criteria = await Criteria.findByPk(id);

    if (criteria) {
      criteria.kode = kode;
      criteria.kriteriaId = kriteriaId;
      criteria.bobot = bobot;
      criteria.type = type;
      await criteria.save();
      res.status(200).json(criteria);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCriteria = async (req, res) => {
  try {
    const { id } = req.params;
    const criteria = await Criteria.findByPk(id);

    if (criteria) {
      await criteria.destroy();
      res.status(200).json({ message: "Berhasil menghapus criteria" });
    } else {
      res.status(200).json({ message: "Criteria tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCriteria,
  getAllKriteria,
  getKriteriaById,
  updateCriteria,
  deleteCriteria,
};
