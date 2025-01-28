const proyekService = require('../services/proyekService');

exports.getAllProyek = async (req, res) => {
    try {
      const proyek = await proyekService.getAllProyek();
      res.json({
        status: true,
        message: "Success",
        data: proyek
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Kesalahan saat memuat proyek'
      });
    }
  };

  exports.getProyekById = async (req, res) => {
    const { id_proyek } = req.params;
    console.log("Menerima ID Proyek:", id_proyek); // Debugging log
    try {
      const proyek = await proyekService.getProyekById(id_proyek);
      if (!proyek) {
        return res.status(404).json({
          status: false,
          message: 'Proyek dengan id tersebut tidak ditemukan'
        });
      } 
      res.json({
        status: true,
        message: "Success",
        data: proyek
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Kesalahan saat memuat proyek'
      });
    }
};


  exports.createProyek = async (req, res) => {
    const { id_proyek, nama_proyek, deskripsi_proyek, tanggal_mulai, tanggal_berakhir, status_proyek } = req.body;
    try {
      const newProyek = await proyekService.createProyek({ id_proyek, nama_proyek, deskripsi_proyek, tanggal_mulai, tanggal_berakhir, status_proyek });
      res.status(201).json({
        status: true,
        message: "Success",
        data: newProyek
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Kesalahan saat membuat proyek' });
    }
  };

  exports.updateProyek = async (req, res) => {
    const { id_proyek } = req.params;
    const { nama_proyek, deskripsi_proyek, tanggal_mulai, tanggal_berakhir, status_proyek } = req.body;
    try {
      const updatedProyek = await proyekService.updateProyek(id_proyek, { nama_proyek, deskripsi_proyek, tanggal_mulai, tanggal_berakhir, status_proyek });
      if (!updatedProyek) {
        return res.status(404).json({
          status: false,
          message: 'Proyek dengan id tersebut tidak ditemukan'
        });
      }
      res.json({
        status: true,
        message: "Success",
        data: updatedProyek
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Kesalahan saat memperbarui proyek'
      });
    }
  };
  
  exports.deleteProyek = async (req, res) => {
    const { id_proyek } = req.params;
    try {
      const result = await proyekService.deleteProyek(id_proyek);
      if (!result) {
        return res.status(404).json({
          status: false,
          message: 'Proyek dengan id tersebut tidak ditemukan'
        });
      }
      res.status(200).json({
        status: true,
        message: "Proyek dengan id tersebut berhasil dihapus"
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: 'Kesalahan saat menghapus proyek' });
    }
  };