const PenilaianAlternatif = require("./model");
const Alternative = require("../alternatives/model");
const Criteria = require("../criteria/model");

// Create new PenilaianAlternatif
const createPenilaianAlternatif = async (req, res) => {
  try {
    const { periode, alternativeId, kriteriaId, nilai } = req.body;

    // Membuat penilaian alternatif baru
    const penilaianAlternatif = await PenilaianAlternatif.create({
      periode,
      alternativeId,
      kriteriaId,
      nilai,
    });

    const penilaianWithRelations = await PenilaianAlternatif.findByPk(
      penilaianAlternatif.id,
      {
        include: [
          { model: Alternative, as: "alternative", attributes: ["name"] },
          { model: Criteria, as: "criteria", attributes: ["kriteriaId"] },
        ],
      }
    );

    res.status(201).json(penilaianWithRelations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all PenilaianAlternatif
const getAllPenilaianAlternatif = async (req, res) => {
  try {
    const penilaianAlternatif = await PenilaianAlternatif.findAll({
      include: [
        { model: Alternative, as: "alternative", attributes: ["name"] }, // Relasi dengan model Alternative
        { model: Criteria, as: "criteria", attributes: ["kriteriaId"] }, // Relasi dengan model Criteria
      ],
    });

    res.status(200).json(penilaianAlternatif);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get PenilaianAlternatif by ID
const getPenilaianAlternatifById = async (req, res) => {
  try {
    const { id } = req.params;
    const penilaianAlternatif = await PenilaianAlternatif.findByPk(id, {
      include: [
        { model: Alternative, as: "alternative", attributes: ["name"] },
        { model: Criteria, as: "criteria", attributes: ["kriteriaId"] },
      ],
    });

    if (penilaianAlternatif) {
      res.status(200).json(penilaianAlternatif);
    } else {
      res.status(404).json({ message: "Penilaian Alternatif tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update PenilaianAlternatif
const updatePenilaianAlternatif = async (req, res) => {
  try {
    const { id } = req.params;
    const { periode, alternativeId, kriteriaId, nilai } = req.body;

    const penilaianAlternatif = await PenilaianAlternatif.findByPk(id);

    if (penilaianAlternatif) {
      penilaianAlternatif.periode = periode;
      penilaianAlternatif.alternativeId = alternativeId;
      penilaianAlternatif.kriteriaId = kriteriaId;
      penilaianAlternatif.nilai = nilai;

      await penilaianAlternatif.save();
      res.status(200).json(penilaianAlternatif);
    } else {
      res.status(404).json({ message: "Penilaian Alternatif tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete PenilaianAlternatif
const deletePenilaianAlternatif = async (req, res) => {
  try {
    const { id } = req.params;
    const penilaianAlternatif = await PenilaianAlternatif.findByPk(id);

    if (penilaianAlternatif) {
      await penilaianAlternatif.destroy();
      res
        .status(200)
        .json({ message: "Berhasil menghapus Penilaian Alternatif" });
    } else {
      res.status(404).json({ message: "Penilaian Alternatif tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPenilaianAlternatif,
  getAllPenilaianAlternatif,
  getPenilaianAlternatifById,
  updatePenilaianAlternatif,
  deletePenilaianAlternatif,
};
