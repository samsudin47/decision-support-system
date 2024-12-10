const Alternative = require("./model"); // Impor model Alternative

// Controller untuk membuat alternatif baru
const createAlternative = async (req, res) => {
  try {
    const { kode, name } = req.body;
    const alternative = await Alternative.create({ kode, name });
    res.status(201).json(alternative);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mendapatkan semua alternatif
const getAllAlternative = async (req, res) => {
  try {
    const alternatives = await Alternative.findAll(); // Mengambil semua alternatif dari database
    res.status(200).json(alternatives); // Mengirimkan respons dengan status 200 dan data alternatif
  } catch (error) {
    res.status(500).json({ message: error.message }); // Mengirimkan error jika ada masalah
  }
};

// Controller untuk mendapatkan alternatif berdasarkan ID
const getAlternativeById = async (req, res) => {
  try {
    const { id } = req.params; // Mendapatkan ID dari URL params
    const alternative = await Alternative.findByPk(id); // Mencari alternatif berdasarkan ID

    if (alternative) {
      res.status(200).json(alternative); // Jika alternatif ditemukan, mengirimkan data alternatif
    } else {
      res.status(404).json({ message: "Alternatif tidak tersedia" }); // Jika tidak ditemukan, mengirimkan pesan error
    }
  } catch (error) {
    res.status(500).json({ message: error.message }); // Mengirimkan error jika ada masalah
  }
};

// Controller untuk mengupdate alternatif berdasarkan ID
const updateAlternative = async (req, res) => {
  try {
    const { id } = req.params;
    const { kode, name } = req.body;
    const existingAlternative = await Alternative.findOne({
      where: { kode },
    });
    if (existingAlternative && existingAlternative.id !== parseInt(id)) {
      return res
        .status(400)
        .json({ message: "Kode sudah digunakan oleh alternatif lain" });
    }
    const alternative = await Alternative.findByPk(id);
    if (alternative) {
      alternative.kode = kode;
      alternative.name = name;
      await alternative.save();
      res.status(200).json(alternative);
    } else {
      res.status(404).json({ message: "Alternative tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menghapus alternatif berdasarkan ID
const deleteAlternative = async (req, res) => {
  try {
    const { id } = req.params;
    const alternative = await Alternative.findByPk(id);
    if (alternative) {
      await alternative.destroy();
      res.status(200).json({ message: "Berhasil menghapus alternatif" });
    } else {
      res.status(404).json({ message: "Alternative tidak ditemukan" });
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
