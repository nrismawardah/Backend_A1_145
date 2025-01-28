-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Jan 2025 pada 16.01
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pam_akhir`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `anggota`
--

CREATE TABLE `anggota` (
  `id_anggota` varchar(20) NOT NULL,
  `id_tim` varchar(20) NOT NULL,
  `nama_anggota` varchar(255) NOT NULL,
  `peran` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `anggota`
--

INSERT INTO `anggota` (`id_anggota`, `id_tim`, `nama_anggota`, `peran`) VALUES
('ANG1', 'TIM1', 'Clarke Griffin', 'Ketua'),
('ANG2', 'TIM1', 'Bellamy Blake', 'Anggota'),
('ANG3', 'TIM2', 'Octavia Blake', 'Ketua'),
('ANG4', 'TIM2', 'Lincoln', 'Anggota'),
('ANG5', 'TIM3', 'Raven Reyes', 'Ketua'),
('ANG6', 'TIM3', 'Monty Green', 'Anggota');

-- --------------------------------------------------------

--
-- Struktur dari tabel `proyek`
--

CREATE TABLE `proyek` (
  `id_proyek` varchar(10) NOT NULL,
  `nama_proyek` varchar(255) NOT NULL,
  `deskripsi_proyek` varchar(255) NOT NULL,
  `tanggal_mulai` varchar(50) NOT NULL,
  `tanggal_berakhir` varchar(50) NOT NULL,
  `status_proyek` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `proyek`
--

INSERT INTO `proyek` (`id_proyek`, `nama_proyek`, `deskripsi_proyek`, `tanggal_mulai`, `tanggal_berakhir`, `status_proyek`) VALUES
('PRY1', 'Website Revamp', 'Pengembangan ulang website perusahaan', '1 Januari 2025', '30 Maret 2025', 'Sedang berlangsung'),
('PRY2', 'Mobile App Launch', 'Peluncuran aplikasi mobile untuk pelanggan', '1 Februari 2025', '15 Mei 2025', 'Belum mulai'),
('PRY3', 'Data Migration', 'Migrasi data dari sistem lama ke baru', '1 Desember 2024', '31 Januari 2025', 'Selesai');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tim`
--

CREATE TABLE `tim` (
  `id_tim` varchar(20) NOT NULL,
  `nama_tim` varchar(255) NOT NULL,
  `deskripsi_tim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tim`
--

INSERT INTO `tim` (`id_tim`, `nama_tim`, `deskripsi_tim`) VALUES
('TIM1', 'UI/UX Team', 'Tim yang bertugas untuk desain antarmuka'),
('TIM2', 'Development Team', 'Tim yang bertugas pada pengembangan'),
('TIM3', 'Migration Team', 'Tim yang bertanggung jawab atas migrasi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tugas`
--

CREATE TABLE `tugas` (
  `id_tugas` varchar(20) NOT NULL,
  `id_proyek` varchar(20) NOT NULL,
  `id_tim` varchar(20) NOT NULL,
  `nama_tugas` varchar(255) NOT NULL,
  `deskripsi_tugas` varchar(255) NOT NULL,
  `prioritas` varchar(20) NOT NULL,
  `status_tugas` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tugas`
--

INSERT INTO `tugas` (`id_tugas`, `id_proyek`, `id_tim`, `nama_tugas`, `deskripsi_tugas`, `prioritas`, `status_tugas`) VALUES
('TGS1', 'PRY1', 'TIM1', 'Desain UI/UX', 'Membuat desain antarmuka untuk website', 'Tinggi', 'Sedang berlangsung'),
('TGS2', 'PRY2', 'TIM2', 'Integrasi API', 'Mengintegrasikan API ke aplikasi mobile', 'Sedang', 'Belum mulai'),
('TGS3', 'PRY3', 'TIM3', 'Backup Data', 'Melakukan backup data sebelum migrasi', 'Tinggi', 'Selesai');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `anggota`
--
ALTER TABLE `anggota`
  ADD PRIMARY KEY (`id_anggota`);

--
-- Indeks untuk tabel `proyek`
--
ALTER TABLE `proyek`
  ADD PRIMARY KEY (`id_proyek`);

--
-- Indeks untuk tabel `tim`
--
ALTER TABLE `tim`
  ADD PRIMARY KEY (`id_tim`);

--
-- Indeks untuk tabel `tugas`
--
ALTER TABLE `tugas`
  ADD PRIMARY KEY (`id_tugas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
