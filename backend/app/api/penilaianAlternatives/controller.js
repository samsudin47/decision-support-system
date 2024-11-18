const PenilaianAlternatif = require("./model");
const Alternative = require("../alternatives/model");

const createPenilaianAlternatif = async (req, res) => {
  try {
    const { periode, alternativeId, kriteria, nilai } = req.body;
    const penilaianAlternatif = await PenilaianAlternatif.create({
      periode,
      alternativeId,
      kriteria,
      nilai,
    });
    res.status(201).json(penilaianAlternatif);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPenilaianAlternatif = async (req, res) => {
  try {
    const penilaianAlternatif = await Alternative.findAll();
    res.status(200).json(penilaianAlternatif);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPenilaianAlternatifById = async (req, res) => {
  try {
    const { id } = req.params;
    const penilaianAlternatif = await PenilaianAlternatif.findByPk(id);

    if (penilaianAlternatif) {
      res.status(200).json(penilaianAlternatif);
    } else {
      res.status(404).json({ message: error.message });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePenilaianAlternatif = async (req, res) => {
  try {
    const { id } = req.params;
    const { periode, alternativeId, kriteria, nilai } = req.body;

    const penilaianAlternatif = await PenilaianAlternatif.findByPk(id);

    if (penilaianAlternatif) {
      penilaianAlternatif.periode = periode;
      penilaianAlternatif.alternativeId = alternativeId;
      penilaianAlternatif.kriteria = kriteria;
      penilaianAlternatif.nilai = nilai;
      await penilaianAlternatif.save();
      res.status(200).json(penilaianAlternatif);
    } else {
      res.status.json({ message: "Data penilaian alternatif tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePenilaianAlternatif = async (req, res) => {
  try {
    const { id } = req.params;
    const penilaianAlternatif = await PenilaianAlternatif.findByPk(id);

    if (penilaianAlternatif) {
      await penilaianAlternatif.destroy();
      res.status(200).json({ message: "Berhasil menghapus data" });
    } else {
      res.status(404).json({ message: "Data tidak ditemukan" });
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
