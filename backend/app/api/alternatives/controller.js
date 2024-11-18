const Alternative = require("./model"); // Impor model Alternative

// Controller untuk membuat alternatif baru
const createAlternative = async (req, res) => {
  try {
    const { kode, name } = req.body; // Mendapatkan data dari body request
    const alternative = await Alternative.create({ kode, name }); // Membuat alternatif baru
    res.status(201).json(alternative); // Mengirimkan respons dengan status 201 dan data alternatif
  } catch (error) {
    res.status(500).json({ message: error.message }); // Mengirimkan error jika ada masalah
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
    const { id } = req.params; // Mendapatkan ID dari URL params
    const { kode, name } = req.body; // Mendapatkan data baru dari body request

    // Memeriksa apakah ada alternatif lain yang memiliki kode yang sama
    const existingAlternative = await Alternative.findOne({
      where: { kode },
    });

    // Jika ada alternatif dengan kode yang sama, pastikan bukan yang sama dengan ID yang sedang diupdate
    if (existingAlternative && existingAlternative.id !== parseInt(id)) {
      return res
        .status(400)
        .json({ message: "Kode sudah digunakan oleh alternatif lain" });
    }

    const alternative = await Alternative.findByPk(id); // Mencari alternatif berdasarkan ID

    if (alternative) {
      // Jika alternatif ditemukan, perbarui dengan data baru
      alternative.kode = kode;
      alternative.name = name;
      await alternative.save(); // Menyimpan perubahan ke database
      res.status(200).json(alternative); // Mengirimkan respons dengan status 200 dan data alternatif yang telah diperbarui
    } else {
      res.status(404).json({ message: "Alternative tidak ditemukan" }); // Jika tidak ditemukan, mengirimkan pesan error
    }
  } catch (error) {
    res.status(500).json({ message: error.message }); // Mengirimkan error jika ada masalah
  }
};

// Controller untuk menghapus alternatif berdasarkan ID
const deleteAlternative = async (req, res) => {
  try {
    const { id } = req.params; // Mendapatkan ID dari URL params
    const alternative = await Alternative.findByPk(id); // Mencari alternatif berdasarkan ID

    if (alternative) {
      await alternative.destroy(); // Menghapus data alternatif
      res.status(200).json({ message: "Berhasil menghapus alternatif" }); // Mengirimkan respons sukses setelah penghapusan
    } else {
      res.status(404).json({ message: "Alternative tidak ditemukan" }); // Jika tidak ditemukan, mengirimkan pesan error
    }
  } catch (error) {
    res.status(500).json({ message: error.message }); // Mengirimkan error jika ada masalah
  }
};

module.exports = {
  createAlternative,
  getAllAlternative,
  getAlternativeById,
  updateAlternative,
  deleteAlternative,
};
