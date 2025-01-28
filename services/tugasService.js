const db = require('../config/db');

exports.getAllTugas = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Tugas', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

exports.getTugasById = (id_tugas) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Tugas WHERE id_tugas = ?', [id_tugas], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  };
  
  exports.getTugasByProyek = (id_proyek) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Tugas WHERE id_proyek = ?', [id_proyek], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  };
  
  exports.getTugasByTim = (id_tim) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Tugas WHERE id_tim = ?', [id_tim], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  };

exports.createTugas = (tugasData) => {
  const { id_proyek, id_tim, nama_tugas, deskripsi_tugas, prioritas, status_tugas } = tugasData;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO Tugas SET ?', { id_proyek, id_tim, nama_tugas, deskripsi_tugas, prioritas, status_tugas }, (err, result) => {
      if (err) reject(err);
      resolve({ id_tugas: result.insertId, ...tugasData });
    });
  });
};

exports.createTugas = (tugasData) => {
  const { id_tugas, id_proyek, id_tim, nama_tugas, deskripsi_tugas, prioritas, status_tugas} = tugasData;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO Tugas SET ?',
      { id_tugas, id_proyek, id_tim, nama_tugas, deskripsi_tugas, prioritas, status_tugas },
      (err, result) => {
        if (err) reject(err);
        resolve({ id_tugas, id_proyek, id_tim, nama_tugas, deskripsi_tugas, prioritas, status_tugas });
      }
    );
  });
};

exports.updateTugas = (id_tugas, tugasData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE Tugas SET ? WHERE id_tugas = ?', [tugasData, id_tugas], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0 ? { id_tugas, ...tugasData } : null);
    });
  });
};

exports.deleteTugas = (id_tugas) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM Tugas WHERE id_tugas = ?', [id_tugas], (err, result) => {
      if (err) reject(err);
      resolve();
    });
  });
};
