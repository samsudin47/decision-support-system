const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../users/model");

// form registrasi
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email sudah terdaftar" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User berhasil terdaftar" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registrasi" });
  }
};

// form login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Perlu isi email dan kata sandi" });
  }

  try {
    // Cek user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User tidak tersedia" });
    }

    // Cek password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Salah password" });
    }

    // Create user dan send token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      message: "Login berhasil",
      token,
      username: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Kesalahan saat masuk" });
  }
};
