const anggotaService = require('../services/anggotaService');

exports.getAllAnggota = async (req, res) => {
  try {
    const anggota = await anggotaService.getAllAnggota();
    res.json({
      status: true,
      message: "Success",
      data: anggota
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat memuat anggota'
    });
  }
};

exports.getAnggotaById = async (req, res) => {
    const { id_anggota } = req.params;
    try {
      const anggota = await anggotaService.getAnggotaById(id_anggota);
      if (!anggota) {
        return res.status(404).json({
          status: false,
          message: 'Anggota dengan id tersebut tidak ditemukan'
        });
      }
      res.json({
        status: true,
        message: "Success",
        data: anggota
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Kesalahan saat memuat anggota'
      });
    }
  };
  
  exports.getAnggotaByTim = async (req, res) => {
    const { id_tim } = req.params;
    try {
      const anggota = await anggotaService.getAnggotaByTeam(id_tim);
      if (anggota.length === 0) {
        return res.status(404).json({
          status: false,
          message: 'Anggota dengan id_tim tersebut tidak ditemukan'
        });
      }
      res.json({
        status: true,
        message: "Success",
        data: anggota
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Kesalahan saat memuat anggota'
      });
    }
  };

exports.createAnggota = async (req, res) => {
  const { id_anggota, id_tim, nama_anggota, peran } = req.body;
  try {
    const newAnggota = await anggotaService.createAnggota({ id_anggota,id_tim, nama_anggota, peran });
    res.status(201).json({
      status: true,
      message: "Success",
      data: newAnggota
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat membuat anggota'
    });
  }
};

exports.updateAnggota = async (req, res) => {
  const { id_anggota } = req.params;
  const { id_tim, nama_anggota, peran } = req.body;
  try {
    const updatedAnggota = await anggotaService.updateAnggota(id_anggota, { id_tim, nama_anggota, peran });
    res.json({
      status: true,
      message: "Success",
      data: updatedAnggota,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat memperbarui anggota',
    });
  }
};

exports.deleteAnggota = async (req, res) => {
  const { id_anggota } = req.params;
  try {
    await anggotaService.deleteAnggota(id_anggota);
    res.status(200).json({
      status: true,
      message: "Anggota dengan id tersebut berhasil dihapus"
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat menghapus anggota' 
    });
  }
};
