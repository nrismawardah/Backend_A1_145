const timService = require('../services/timService');

exports.getAllTim = async (req, res) => {
  try {
    const tim = await timService.getAllTim();
    res.json({
      status: true,
      message: "Success",
      data: tim
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat memuat tim'
    });
  }
};

exports.getTimById = async (req, res) => {
    const { id_tim } = req.params;
    try {
      const tim = await timService.getTimById(id_tim);
      if (!tim) {
        return res.status(404).json({
          status: false,
          message: 'Tim dengan id tersebut tidak ditemukan'
        });
      }
      res.json({
        status: true,
        message: "Success",
        data: tim
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Kesalahan saat memuat tim'
      });
    }
  };

exports.createTim = async (req, res) => {
  const { id_tim, nama_tim, deskripsi_tim } = req.body;
  try {
    const newTim = await timService.createTim({ id_tim, nama_tim, deskripsi_tim });
    res.status(201).json({
      status: true,
      message: "Success",
      data: newTim
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat membuat tim'
    });
  }
};

exports.updateTim = async (req, res) => {
  const { id_tim } = req.params;
  const { nama_tim, deskripsi_tim } = req.body;
  try {
    const updatedTim = await timService.updateTim(id_tim, { nama_tim, deskripsi_tim });
    res.json({
      status: true,
      message: "Success",
      data: updatedTim
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat memperbarui tim'
    });
  }
};

exports.deleteTim = async (req, res) => {
  const { id_tim } = req.params;
  try {
    await timService.deleteTim(id_tim);
    res.status(200).json({
      status: true,
      message: "Tim dengan id tersebut berhasil dihapus"
    });
  } catch (error) {
    res.status(500).json({ message: 'Kesalahan saat menghapus tim' });
  }
};
