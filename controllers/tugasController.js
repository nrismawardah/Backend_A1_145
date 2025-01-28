const tugasService = require('../services/tugasService');

exports.getAllTugas = async (req, res) => {
  try {
    const tugas = await tugasService.getAllTugas();
    res.json({
      status: true,
      message: "Success",
      data: tugas
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat memuat tugas'
    });
  }
};

exports.getTugasById = async (req, res) => {
  const { id_tugas } = req.params;
  console.log("Menerima ID Tugas:", id_tugas);
  try {
    const tugas = await tugasService.getTugasById(id_tugas);
    if (!tugas) {
      return res.status(404).json({ 
        status: false,
        message: 'Tugas dengan id tersebut tidak ditemukan'
      });
    }
    res.json({
      status: true,
      message: "Success",
      data: tugas
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat memuat tugas'
    });
  }
};

exports.getTugasByProyek = async (req, res) => {
  const { id_proyek } = req.params;
  try {
    const tugas = await tugasService.getTugasByProyek(id_proyek);
    res.json({
      status: true,
      message: "Success",
      data: tugas
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat memuat tugas'
    });
  }
};

exports.getTugasByTim = async (req, res) => {
  const { id_tim } = req.params;
  try {
    const tugas = await tugasService.getTugasByTim(id_tim);
    res.json({
      status: true,
      message: "Success",
      data: tugas
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat memuat tugas'
    });
  }
};

exports.createTugas = async (req, res) => {
  const { id_tugas, id_proyek, id_tim, nama_tugas, deskripsi_tugas, prioritas, status_tugas } = req.body;
  try {
    const newTugas = await tugasService.createTugas({ id_tugas, id_proyek, id_tim, nama_tugas, deskripsi_tugas, prioritas, status_tugas });
    res.status(201).json({
      status: true,
      message: "Success",
      data: newTugas
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan saat memuat tugas'
    });
  }
};

exports.updateTugas = async (req, res) => {
  const { id_tugas } = req.params;
  const { nama_tugas, deskripsi_tugas, prioritas, status_tugas } = req.body;
  try {
    const updatedTugas = await tugasService.updateTugas(id_tugas, { nama_tugas, deskripsi_tugas, prioritas, status_tugas });
    res.json({
      status: true,
      message: "Success",
      data: updatedTugas
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan dalam memperbarui tugas'
    });
  }
};

exports.deleteTugas = async (req, res) => {
  const { id_tugas } = req.params;
  try {
    await tugasService.deleteTugas(id_tugas);
    res.status(200).json({
      status: true,
      message: "Tugas dengan id tersebut berhasil dihapus"
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Kesalahan dalam menghapus tugas'
    });
  }
};
