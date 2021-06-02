-- Adminer 4.7.0 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `akuntansi_akun`;
CREATE TABLE `akuntansi_akun` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `kelompok` varchar(11) COLLATE latin1_general_ci NOT NULL,
  `nomor` varchar(11) COLLATE latin1_general_ci NOT NULL,
  `nama` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `akuntansi_akun` (`id`, `uid`, `kelompok`, `nomor`, `nama`, `status`) VALUES
(1,	0,	'Aktiva',	'111',	'Kas',	''),
(2,	0,	'Aktiva',	'121',	'Piutang Usaha',	''),
(3,	0,	'Aktiva',	'131',	'Perlengkapan Kantor ',	''),
(4,	0,	'Aktiva',	'141',	'Peralatan',	''),
(5,	0,	'Passiva',	'201',	'Utang USaha',	''),
(6,	0,	'Ekuitas',	'301',	'Modal, Tn Baraja',	''),
(7,	0,	'Ekuitas',	'302',	'Private, Tn Baraja',	''),
(8,	0,	'Pendapatan',	'401',	'Pendapatan Jasa',	''),
(9,	0,	'Beban',	'511',	'Biaya Gaji',	''),
(10,	0,	'Beban',	'512',	'Biaya Air, Telp & Listrik',	''),
(11,	0,	'Beban',	'513',	'Biaya Sewa Kantor',	''),
(12,	0,	'Beban',	'514',	'Biaya Pemakaian Perlengkapan',	''),
(13,	0,	'Beban',	'515',	'Biaya lain lain',	'');

DROP TABLE IF EXISTS `akuntansi_jurnal`;
CREATE TABLE `akuntansi_jurnal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `ref` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `tanggal` date NOT NULL,
  `nomor` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `nama` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `keterangan` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `debit` int(11) NOT NULL,
  `kredit` int(11) NOT NULL,
  `status` varchar(25) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `akuntansi_jurnal` (`id`, `uid`, `ref`, `tanggal`, `nomor`, `nama`, `keterangan`, `debit`, `kredit`, `status`) VALUES
(1,	0,	'',	'2012-02-06',	'111',	'Kas',	'Setoran Modal Awal',	10000000,	0,	''),
(2,	0,	'',	'2012-02-06',	'301',	'Modal, Tn Baraja',	'Setoran Modal Awal',	0,	10000000,	''),
(3,	0,	'',	'2012-02-06',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	1500000,	0,	''),
(4,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	1500000,	''),
(5,	0,	'',	'2012-02-06',	'141',	'Peralatan',	'Pembelian Secara Tunai, Peralatan',	3000000,	0,	''),
(6,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pembelian Secara Tunai, Peralatan',	0,	3000000,	''),
(7,	0,	'',	'2012-02-06',	'131',	'Perlengkapan Kantor ',	'Pembelian Kredit, Perlengkapan Kantor',	750000,	0,	''),
(8,	0,	'',	'2012-02-06',	'201',	'Utang USaha',	'Pembelian Kredit, Perlengkapan Kantor',	0,	750000,	''),
(9,	0,	'',	'2012-02-06',	'513',	'Biaya Sewa Kantor',	'Pembayaran Sewa, Kantor',	1000000,	0,	''),
(10,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pembayaran Sewa, Kantor',	0,	1000000,	''),
(11,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pendapatan Jasa Tunai',	6000000,	0,	''),
(12,	0,	'',	'2012-02-06',	'401',	'Pendapatan Jasa',	'Pendapatan Jasa Tunai',	0,	6000000,	''),
(13,	0,	'',	'2012-02-06',	'201',	'Utang USaha',	'Pembayaran Hutang',	750000,	0,	''),
(14,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pembayaran Hutang',	0,	750000,	''),
(15,	0,	'',	'2012-02-06',	'512',	'Biaya Air, Telp & Listrik',	'Pembayaran Air,Telp dan Listrik',	750000,	0,	''),
(16,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pembayaran Air,Telp dan Listrik',	0,	750000,	''),
(17,	0,	'',	'2012-02-06',	'121',	'Piutang Usaha',	'Pendapatan Jasa Kredit',	3500000,	0,	''),
(18,	0,	'',	'2012-02-06',	'401',	'Pendapatan Jasa',	'Pendapatan Jasa Kredit',	0,	3500000,	''),
(19,	0,	'',	'2012-02-06',	'515',	'Biaya lain lain',	'Pembayaran Konsumsi rapat',	150000,	0,	''),
(20,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pembayaran Konsumsi rapat',	0,	150000,	''),
(21,	0,	'',	'2012-02-06',	'511',	'Biaya Gaji',	'Pembayaran Gaji',	800000,	0,	''),
(22,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pembayaran Gaji',	0,	800000,	''),
(23,	0,	'',	'2012-02-06',	'302',	'Private, Tn Baraja',	'Pengambilan Uang Pribadi',	750000,	0,	''),
(24,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pengambilan Uang Pribadi',	0,	750000,	''),
(25,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pelunasan Piutang Usaha',	3500000,	0,	''),
(26,	0,	'',	'2012-02-06',	'121',	'Piutang Usaha',	'Pelunasan Piutang Usaha',	0,	3500000,	''),
(27,	0,	'',	'2012-02-06',	'514',	'Biaya Pemakaian Perlengka',	'Pemakaian Perlengkapan',	250000,	0,	''),
(28,	0,	'',	'2012-02-06',	'131',	'Perlengkapan Kantor ',	'Pemakaian Perlengkapan',	0,	250000,	''),
(29,	0,	'',	'2012-02-06',	'141',	'Peralatan',	'Pembelian Secara Kredit, Peralatan',	1500000,	0,	''),
(30,	0,	'',	'2012-02-06',	'201',	'Utang USaha',	'Pembelian Secara Kredit, Peralatan',	0,	1500000,	''),
(31,	0,	'',	'2012-02-06',	'141',	'Peralatan',	'Pembelian Secara Tunai, Peralatan',	3000000,	0,	''),
(32,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pembelian Secara Tunai, Peralatan',	0,	3000000,	''),
(33,	0,	'',	'2012-02-06',	'111',	'Kas',	'Pendapatan Jasa Tunai',	4000000,	0,	''),
(34,	0,	'',	'2012-02-06',	'401',	'Pendapatan Jasa',	'Pendapatan Jasa Tunai',	0,	4000000,	''),
(50,	0,	'0028/SB-KEU/III/2012',	'2012-03-01',	'401',	'Pendapatan Jasa',	'Pendapatan Jasa Tunai',	0,	200000,	''),
(49,	0,	'0028/SB-KEU/III/2012',	'2012-03-01',	'111',	'Kas',	'Pendapatan Jasa Tunai',	200000,	0,	''),
(51,	0,	'0019/CL1-KEU/II/2013',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'',	1,	0,	''),
(52,	0,	'0019/CL1-KEU/II/2013',	'2013-02-14',	'111',	'Kas',	'',	0,	1,	''),
(53,	0,	'0025/CL1-KEU/II/2013',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	1000,	0,	''),
(54,	0,	'0025/CL1-KEU/II/2013',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	1000,	''),
(55,	0,	'0029/CL1-KEU/II/2013',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	140000,	0,	''),
(56,	0,	'0029/CL1-KEU/II/2013',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	140000,	''),
(57,	0,	'0029/CL1-KEU/II/2013',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	140000,	0,	''),
(58,	0,	'0029/CL1-KEU/II/2013',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	140000,	''),
(59,	0,	'',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	10,	0,	''),
(60,	0,	'',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	10,	''),
(61,	0,	'',	'2013-02-14',	'141',	'Peralatan',	'Pembelian Secara Tunai, Peralatan',	10,	0,	''),
(62,	0,	'',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Peralatan',	0,	10,	''),
(63,	0,	'',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	2,	0,	''),
(64,	0,	'',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	2,	''),
(65,	0,	'',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	11,	0,	''),
(66,	0,	'',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	11,	''),
(67,	0,	'',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	20,	0,	''),
(68,	0,	'',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	20,	''),
(69,	0,	'',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	42,	0,	''),
(70,	0,	'',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	42,	''),
(71,	0,	'',	'2013-02-14',	'131',	'Perlengkapan Kantor ',	'Pembelian Secara Tunai, Perlengkapan Kantor',	44,	0,	''),
(72,	0,	'',	'2013-02-14',	'111',	'Kas',	'Pembelian Secara Tunai, Perlengkapan Kantor',	0,	44,	''),
(73,	0,	'',	'2013-03-19',	'111',	'Kas',	'Setoran Modal Awal',	0,	0,	''),
(74,	0,	'',	'2013-03-19',	'301',	'Modal, Tn Baraja',	'Setoran Modal Awal',	0,	0,	'');

DROP TABLE IF EXISTS `akuntansi_persamaan`;
CREATE TABLE `akuntansi_persamaan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `kelompok` varchar(254) COLLATE latin1_general_ci NOT NULL,
  `keterangan` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `debit` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `kredit` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `akuntansi_persamaan` (`id`, `uid`, `kelompok`, `keterangan`, `debit`, `kredit`, `status`) VALUES
(1,	0,	'Ekuitas',	'Setoran Modal Awal',	'111',	'301',	'tampil'),
(2,	0,	'Aktiva',	'Pembelian Secara Tunai, Perlengkapan Kantor',	'131',	'111',	'tampil'),
(3,	0,	'Aktiva',	'Pembelian Secara Tunai, Peralatan',	'141',	'111',	'tampil'),
(4,	0,	'Passiva',	'Pembelian Kredit, Perlengkapan Kantor',	'131',	'201',	'tampil'),
(5,	0,	'Beban',	'Pembayaran Sewa, Kantor',	'513',	'111',	'tampil'),
(6,	0,	'Pendapatan',	'Pendapatan Jasa Tunai',	'111',	'401',	'tampil'),
(7,	0,	'Passiva',	'Pembayaran Hutang',	'201',	'111',	'tampil'),
(8,	0,	'Beban',	'Pembayaran Air,Telp dan Listrik',	'512',	'111',	'tampil'),
(9,	0,	'Aktiva',	'Pendapatan Jasa Kredit',	'121',	'401',	'tampil'),
(10,	0,	'Beban',	'Pembayaran Konsumsi rapat',	'515',	'111',	'tampil'),
(11,	0,	'Beban',	'Pembayaran Gaji',	'511',	'111',	'tampil'),
(12,	0,	'Ekuitas',	'Pengambilan Uang Pribadi',	'302',	'111',	'tampil'),
(13,	0,	'Aktiva',	'Pelunasan Piutang Usaha',	'111',	'121',	'tampil'),
(14,	0,	'Beban',	'Pemakaian Perlengkapan',	'514',	'131',	'tampil'),
(15,	0,	'Passiva',	'Pembelian Secara Kredit, Peralatan',	'141',	'201',	'tampil');

DROP TABLE IF EXISTS `akuntansi_posting`;
CREATE TABLE `akuntansi_posting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `kode` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `tanggal` date NOT NULL,
  `keterangan` varchar(254) COLLATE latin1_general_ci NOT NULL,
  `persamaan` int(10) NOT NULL,
  `debit` int(10) NOT NULL,
  `kredit` int(10) NOT NULL,
  `jumlah` int(12) NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `akuntansi_posting` (`id`, `uid`, `kode`, `tanggal`, `keterangan`, `persamaan`, `debit`, `kredit`, `jumlah`, `status`) VALUES
(1,	0,	'',	'2012-02-06',	'Setoran Modal Awal',	1,	111,	301,	10000000,	'Selesai'),
(2,	0,	'',	'2012-02-06',	'Pembelian Secara Tunai, Perlengkapan Kantor',	2,	131,	111,	1500000,	'Selesai'),
(3,	0,	'',	'2012-02-06',	'Pembelian Secara Tunai, Peralatan',	3,	141,	111,	3000000,	'Selesai'),
(4,	0,	'',	'2012-02-06',	'Pembelian Kredit, Perlengkapan Kantor',	4,	131,	201,	750000,	'Selesai'),
(5,	0,	'',	'2012-02-06',	'Pembayaran Sewa, Kantor',	5,	513,	111,	1000000,	'Selesai'),
(6,	0,	'',	'2012-02-06',	'Pendapatan Jasa Tunai',	6,	111,	401,	6000000,	'Selesai'),
(7,	0,	'',	'2012-02-06',	'Pembayaran Hutang',	7,	201,	111,	750000,	'Selesai'),
(8,	0,	'',	'2012-02-06',	'Pembayaran Air,Telp dan Listrik',	8,	512,	111,	750000,	'Selesai'),
(9,	0,	'',	'2012-02-06',	'Pendapatan Jasa Kredit',	9,	121,	401,	3500000,	'Selesai'),
(10,	0,	'',	'2012-02-06',	'Pembayaran Konsumsi rapat',	10,	515,	111,	150000,	'Selesai'),
(11,	0,	'',	'2012-02-06',	'Pembayaran Gaji',	11,	511,	111,	800000,	'Selesai'),
(12,	0,	'',	'2012-02-06',	'Pengambilan Uang Pribadi',	12,	302,	111,	750000,	'Selesai'),
(13,	0,	'',	'2012-02-06',	'Pelunasan Piutang Usaha',	13,	111,	121,	3500000,	'Selesai'),
(14,	0,	'',	'2012-02-06',	'Pemakaian Perlengkapan',	14,	514,	131,	250000,	'Selesai'),
(15,	0,	'',	'2012-02-06',	'Pembelian Secara Kredit, Peralatan',	15,	141,	201,	1500000,	'Selesai'),
(16,	0,	'',	'2012-02-06',	'Pembelian Secara Tunai, Peralatan',	3,	141,	111,	3000000,	'Selesai'),
(17,	0,	'',	'2012-02-06',	'Pendapatan Jasa Tunai',	6,	111,	401,	4000000,	'Selesai');

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `inventory_barang`;
CREATE TABLE `inventory_barang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `kode` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `satuan` varchar(50) CHARACTER SET latin1 NOT NULL,
  `banyak` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `batas` int(11) NOT NULL,
  `kadaluarsa` varchar(25) NOT NULL,
  `lokasi` varchar(50) CHARACTER SET latin1 NOT NULL,
  `citra` varchar(254) CHARACTER SET latin1 NOT NULL,
  `keterangan` text CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

INSERT INTO `inventory_barang` (`id`, `uid`, `kategori`, `kode`, `nama`, `satuan`, `banyak`, `harga`, `batas`, `kadaluarsa`, `lokasi`, `citra`, `keterangan`, `status`) VALUES
(1,	1,	'sea',	'1',	'satu',	'pc',	114,	100,	100,	'2020-01-01',	'toko',	'flange.jpg',	'1',	'1'),
(2,	1,	'sea',	'2',	'dua',	'pc',	116,	200,	100,	'2020-01-01',	'toko',	'flange.jpg',	'1',	'1');

DROP TABLE IF EXISTS `inventory_distribusi`;
CREATE TABLE `inventory_distribusi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `tanggal` varchar(50) NOT NULL,
  `jam` varchar(50) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `kegiatan` varchar(50) NOT NULL,
  `total` int(11) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `inventory_distribusi` (`id`, `uid`, `kode`, `tanggal`, `jam`, `jumlah`, `kegiatan`, `total`, `keterangan`, `status`) VALUES
(48,	0,	'IN-12',	'2019-11-14',	'07:16:33am',	0,	'IN',	0,	'',	''),
(49,	0,	'IN-13',	'2019-11-14',	'07:16:38am',	0,	'IN',	0,	'',	''),
(50,	0,	'IN-14',	'2019-11-14',	'07:16:39am',	0,	'IN',	0,	'',	''),
(51,	0,	'IN-15',	'2019-11-14',	'07:16:39am',	0,	'IN',	0,	'',	''),
(52,	0,	'IN-16',	'2019-11-14',	'07:16:40am',	0,	'IN',	0,	'',	''),
(53,	0,	'IN-17',	'2019-11-14',	'07:16:40am',	0,	'IN',	0,	'',	''),
(54,	0,	'IN-18',	'2019-11-14',	'07:16:40am',	0,	'IN',	0,	'',	''),
(55,	0,	'IN-19',	'2019-11-14',	'07:20:19am',	0,	'IN',	0,	'',	''),
(56,	0,	'IN-20',	'2019-11-14',	'07:25:25am',	0,	'IN',	0,	'',	''),
(57,	0,	'OU-7',	'2019-11-14',	'07:25:30am',	0,	'OU',	0,	'',	''),
(58,	0,	'IN-21',	'2019-11-14',	'07:25:33am',	0,	'IN',	0,	'',	''),
(59,	0,	'OU-8',	'2019-11-14',	'07:25:35am',	1,	'OU',	0,	'',	''),
(60,	0,	'OU-9',	'2019-11-14',	'07:50:10am',	0,	'OU',	0,	'',	''),
(61,	0,	'OU-10',	'2019-11-14',	'07:50:36am',	5,	'OU',	0,	'',	''),
(62,	0,	'OU-11',	'2019-11-14',	'07:52:58am',	6,	'OU',	0,	'',	''),
(63,	0,	'OU-12',	'2019-11-14',	'07:53:37am',	5,	'OU',	0,	'',	''),
(64,	0,	'IN-22',	'2019-11-14',	'08:05:32am',	0,	'IN',	0,	'',	''),
(65,	0,	'OU-13',	'2019-11-14',	'08:05:47am',	0,	'OU',	0,	'',	''),
(66,	0,	'IN-23',	'2019-11-14',	'09:45:17am',	0,	'IN',	0,	'',	''),
(67,	0,	'OU-14',	'2019-11-14',	'09:45:19am',	0,	'OU',	0,	'',	''),
(68,	0,	'IN-24',	'2019-11-14',	'09:45:38am',	0,	'IN',	0,	'',	''),
(69,	0,	'OU-15',	'2019-11-14',	'09:54:33am',	13,	'OU',	0,	'',	''),
(70,	0,	'OU-16',	'2019-11-14',	'11:28:25am',	11,	'OU',	0,	'',	''),
(71,	0,	'OU-17',	'2019-11-14',	'11:31:15am',	24,	'OU',	0,	'',	''),
(72,	0,	'IN-25',	'2019-11-14',	'12:06:01pm',	0,	'IN',	0,	'',	''),
(73,	0,	'IN-26',	'2019-11-14',	'12:07:01pm',	0,	'IN',	0,	'',	''),
(74,	0,	'OU-18',	'2019-11-14',	'12:14:22pm',	0,	'OU',	0,	'',	''),
(75,	0,	'OU-19',	'2019-11-14',	'12:14:36pm',	1,	'OU',	0,	'',	''),
(76,	0,	'IN-27',	'2019-11-14',	'12:15:33pm',	0,	'IN',	0,	'',	''),
(77,	0,	'OU-20',	'2019-11-14',	'12:17:27pm',	1,	'OU',	0,	'',	''),
(78,	0,	'OU-21',	'2019-11-14',	'12:20:11pm',	12,	'OU',	0,	'',	'');

DROP TABLE IF EXISTS `inventory_distribusis`;
CREATE TABLE `inventory_distribusis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` varchar(11) NOT NULL,
  `tanggal` varchar(25) NOT NULL,
  `jam` varchar(25) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `banyak` varchar(50) CHARACTER SET latin1 NOT NULL,
  `harga` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `keterangan` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `inventory_distribusis` (`id`, `uid`, `induk`, `tanggal`, `jam`, `kode`, `nama`, `banyak`, `harga`, `jumlah`, `keterangan`) VALUES
(41,	0,	'IN-532',	'',	'',	'1',	'satu',	'2',	0,	0,	0),
(42,	0,	'IN-532',	'',	'',	'2',	'dua',	'1',	0,	0,	0),
(43,	0,	'IN-531',	'',	'',	'1',	'satu',	'1',	0,	0,	0),
(44,	0,	'IN-530',	'',	'',	'2',	'dua',	'1',	0,	0,	0),
(45,	0,	'IN-509',	'',	'',	'2',	'dua',	'1',	0,	0,	0),
(46,	0,	'OU-250',	'',	'',	'1',	'satu',	'3',	0,	0,	0),
(47,	0,	'IN-507',	'',	'',	'1',	'satu',	'1',	0,	0,	0),
(48,	0,	'OU-258',	'',	'',	'1',	'satu',	'2',	0,	0,	0),
(49,	0,	'OU-258',	'',	'',	'2',	'dua',	'1',	0,	0,	0),
(50,	0,	'OU-259',	'',	'',	'1',	'satu',	'1',	0,	0,	0),
(51,	0,	'OU-259',	'',	'',	'2',	'dua',	'1',	0,	0,	0),
(52,	0,	'IN-534',	'',	'',	'1',	'satu',	'2',	0,	0,	0),
(53,	0,	'IN-534',	'',	'',	'2',	'dua',	'1',	0,	0,	0),
(64,	0,	'OU-260',	'',	'',	'1',	'satuspo',	'1',	0,	0,	0),
(64017,	0,	'OU-8',	'',	'',	'1',	'satu',	'1',	0,	0,	0),
(65,	0,	'OU-260',	'',	'',	'2',	'dua',	'1',	0,	0,	0),
(64000,	0,	'OU-260',	'',	'',	'1',	'satuspo',	'1',	0,	0,	0),
(64007,	0,	'1',	'',	'',	'1',	'satu',	'1',	0,	0,	0),
(64006,	0,	'1',	'',	'',	'2',	'dua',	'1',	0,	0,	0),
(64005,	0,	'1',	'',	'',	'2',	'dua',	'1',	0,	0,	0),
(64008,	0,	'1',	'',	'',	'1',	'satu',	'1',	0,	0,	0),
(64016,	0,	'BL-28',	'',	'',	'2',	'dua',	'2',	0,	0,	0),
(64015,	0,	'BL-28',	'',	'',	'1',	'satu',	'3',	0,	0,	0),
(64014,	0,	'IN-535',	'',	'',	'2',	'dua',	'10',	0,	0,	0),
(64013,	0,	'IN-535',	'',	'',	'1',	'satu',	'6',	0,	0,	0),
(64018,	0,	'OU-10',	'',	'',	'1',	'satu',	'3',	0,	0,	0),
(64019,	0,	'OU-10',	'',	'',	'2',	'dua',	'2',	0,	0,	0),
(64020,	0,	'OU-11',	'',	'',	'1',	'satu',	'1',	0,	0,	0),
(64021,	0,	'OU-11',	'',	'',	'2',	'dua',	'5',	0,	0,	0),
(64022,	0,	'OU-12',	'',	'',	'1',	'satu',	'3',	0,	0,	0),
(64023,	0,	'OU-12',	'',	'',	'2',	'dua',	'2',	0,	0,	0),
(64024,	0,	'OU-16',	'',	'',	'1',	'satu',	'6',	0,	0,	0),
(64025,	0,	'OU-16',	'',	'',	'2',	'dua',	'5',	0,	0,	0),
(64026,	0,	'OU-15',	'',	'',	'1',	'satu',	'10',	0,	0,	0),
(64027,	0,	'OU-15',	'',	'',	'2',	'dua',	'3',	0,	0,	0),
(64028,	0,	'OU-17',	'',	'',	'1',	'satu',	'14',	0,	0,	0),
(64029,	0,	'OU-17',	'',	'',	'2',	'dua',	'10',	0,	0,	0),
(64030,	0,	'OU-21',	'',	'',	'1',	'satu',	'7',	0,	0,	0),
(64031,	0,	'OU-21',	'',	'',	'2',	'dua',	'5',	0,	0,	0),
(64032,	0,	'OU-20',	'',	'',	'1',	'satu',	'1',	0,	0,	0),
(64033,	0,	'OU-19',	'',	'',	'1',	'satu',	'1',	0,	0,	0);

DROP TABLE IF EXISTS `inventory_lokasi`;
CREATE TABLE `inventory_lokasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `keterangan` text NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `inventory_lokasi` (`id`, `uid`, `kode`, `nama`, `keterangan`, `status`) VALUES
(1,	0,	'1',	'toko',	'',	'');

DROP TABLE IF EXISTS `inventory_lokasis`;
CREATE TABLE `inventory_lokasis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` varchar(50) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `satuan` varchar(50) NOT NULL,
  `banyak` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `inventory_lokasis` (`id`, `uid`, `induk`, `kode`, `nama`, `satuan`, `banyak`, `harga`, `jumlah`, `status`) VALUES
(3,	0,	'1',	'2',	'dua',	'',	1,	0,	0,	'');

DROP TABLE IF EXISTS `master_akses`;
CREATE TABLE `master_akses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `lihat` text NOT NULL,
  `tambah` text NOT NULL,
  `edit` text NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `master_akses` (`id`, `uid`, `induk`, `nama`, `lihat`, `tambah`, `edit`, `status`) VALUES
(1,	0,	'1',	'sa',	'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31',	'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31',	'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31',	'1'),
(2,	0,	'1',	'demo',	'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31',	'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31',	'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31',	'1');

DROP TABLE IF EXISTS `master_bahasa`;
CREATE TABLE `master_bahasa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `kode` text NOT NULL,
  `ina` text NOT NULL,
  `eng` text NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `master_bahasa` (`id`, `uid`, `induk`, `kategori`, `kode`, `ina`, `eng`, `status`) VALUES
(1,	0,	0,	'',	'',	'',	'',	''),
(2,	0,	0,	'',	'',	'',	'',	''),
(3,	0,	0,	'',	'',	'',	'',	''),
(4,	0,	0,	'',	'',	'',	'',	''),
(5,	0,	0,	'',	'',	'',	'',	''),
(6,	0,	0,	'',	'',	'',	'',	''),
(7,	0,	0,	'',	'',	'',	'',	''),
(8,	0,	0,	'',	'nama',	'',	'',	''),
(9,	0,	0,	'',	'',	'',	'',	'');

DROP TABLE IF EXISTS `master_citra`;
CREATE TABLE `master_citra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` int(11) NOT NULL,
  `url` varchar(254) NOT NULL,
  `deskripsi` varchar(254) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `master_citra` (`id`, `uid`, `induk`, `url`, `deskripsi`, `status`) VALUES
(4,	0,	0,	'empat',	'',	'1'),
(5,	0,	0,	'wow.jpg2',	'',	'1'),
(6,	0,	0,	'url',	'deskripsi',	'status'),
(7,	0,	0,	'url',	'deskripsi',	'status'),
(8,	0,	0,	'url',	'deskripsi',	'status'),
(9,	0,	0,	'url',	'deskripsi',	'status'),
(10,	0,	0,	'WhatsApp Image 2019-02-24 at 9.00.44 AM.jpeg',	'deskripsi',	'status');

DROP TABLE IF EXISTS `master_dashboard`;
CREATE TABLE `master_dashboard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` varchar(50) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `pencapaian` int(11) NOT NULL,
  `target` int(11) NOT NULL,
  `keterangan` text NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `master_dashboard` (`id`, `uid`, `induk`, `kategori`, `nama`, `pencapaian`, `target`, `keterangan`, `status`) VALUES
(1,	0,	'1',	'reg',	'pendapatan',	100,	200,	'',	'1'),
(4,	0,	'1',	'1',	'1',	11,	111,	'1',	'1');

DROP TABLE IF EXISTS `master_izin`;
CREATE TABLE `master_izin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `isi` text NOT NULL,
  `status` varchar(25) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `master_izin` (`id`, `uid`, `induk`, `kategori`, `nama`, `isi`, `status`) VALUES
(18,	0,	0,	'in',	'admin',	'ok',	'1');

DROP TABLE IF EXISTS `master_log`;
CREATE TABLE `master_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) NOT NULL,
  `tabel` varchar(50) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `tanggal` text NOT NULL,
  `aksi` text NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `master_log` (`id`, `induk`, `tabel`, `uid`, `tanggal`, `aksi`, `status`) VALUES
(6,	'14',	'master_pesan',	'admin',	'',	'',	''),
(7,	'23',	'master_setting',	'admin',	'',	'',	''),
(8,	'0',	'master_akses',	'sa',	'',	'',	'');

DROP TABLE IF EXISTS `master_menu`;
CREATE TABLE `master_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` varchar(50) NOT NULL,
  `urut` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `url` varchar(254) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `master_menu` (`id`, `uid`, `induk`, `urut`, `nama`, `url`, `status`) VALUES
(1,	0,	'0',	'1',	'Master',	'modules/master/home/controller.js?home/view',	'1'),
(2,	0,	'1',	'2',	'Akses',	'modules/master/akses/controller.js?akses/view',	'1'),
(3,	0,	'1',	'3',	'Bahasa',	'modules/master/bahasa/controller.js?bahasa/view',	'1'),
(4,	0,	'1',	'4',	'Citra',	'modules/master/citra/controller.js?citra/view',	'1'),
(5,	0,	'1',	'5',	'Dashboard',	'modules/master/dashboard/controller.js?dashboard/view',	'1'),
(6,	0,	'1',	'6',	'Izin',	'modules/master/izin/controller.js?izin/view',	'1'),
(7,	0,	'1',	'7',	'Log',	'modules/master/log/controller.js?log/view',	'1'),
(8,	0,	'1',	'8',	'Menu',	'modules/master/menu/controller.js?menu/view',	'1'),
(9,	0,	'1',	'9',	'Param',	'modules/master/param/controller.js?param/view',	'1'),
(10,	0,	'1',	'10',	'Pesan',	'modules/master/pesan/controller.js?pesan/view',	'1'),
(11,	0,	'1',	'11',	'Report',	'modules/master/report/controller.js?report/view',	'1'),
(12,	0,	'1',	'12',	'Setting',	'modules/master/setting/controller.js?setting/view',	'1'),
(13,	0,	'1',	'13',	'Users',	'modules/master/users/controller.js?users/view',	'1'),
(14,	0,	'0',	'14',	'Inventory',	'modules/inventory/home/controller.js?home/view',	'1'),
(15,	0,	'14',	'15',	'Barang',	'modules/inventory/barang/controller.js?barang/view',	'1'),
(16,	0,	'14',	'16',	'Distribusi',	'modules/inventory/distribusi/controller.js?distribusi/view',	'1'),
(17,	0,	'14',	'17',	'Distribusis',	'modules/inventory/distribusis/controller.js?distribusis/view',	'1'),
(18,	0,	'14',	'18',	'Lokasi',	'modules/inventory/lokasi/controller.js?lokasi/view',	'1'),
(19,	0,	'14',	'19',	'Lokasis',	'modules/inventory/lokasis/controller.js?lokasis/view',	'1'),
(20,	0,	'0',	'20',	'POS',	'modules/pos/home/controller.js?home/view',	'1'),
(21,	0,	'20',	'21',	'Kontak',	'modules/pos/kontak/controller.js?kontak/view',	'1'),
(22,	0,	'20',	'22',	'Kontaks',	'modules/pos/kontaks/controller.js?kontaks/view',	'1'),
(23,	0,	'20',	'23',	'Promo',	'modules/pos/promo/controller.js?promo/view',	'1'),
(24,	0,	'20',	'24',	'Promos',	'modules/pos/promos/controller.js?promos/view',	'1'),
(25,	0,	'20',	'25',	'Transaksi',	'modules/pos/transaksi/controller.js?transaksi/view',	'1'),
(26,	0,	'20',	'26',	'Transaksis',	'modules/pos/transaksis/controller.js?transaksis/view',	'1'),
(27,	0,	'0',	'27',	'Akuntansi',	'modules/akuntansi/home/controller.js?home/view',	'1'),
(28,	0,	'27',	'28',	'Akun',	'modules/akuntansi/akun/controller.js?akun/view',	'1'),
(29,	0,	'27',	'29',	'Jurnal',	'modules/akuntansi/jurnal/controller.js?jurnal/view',	'1'),
(30,	0,	'27',	'30',	'Persamaan',	'modules/akuntansi/persamaan/controller.js?persamaan/view',	'1'),
(31,	0,	'27',	'31',	'Posting',	'modules/akuntansi/posting/controller.js?posting/view',	'1');

DROP TABLE IF EXISTS `master_param`;
CREATE TABLE `master_param` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `isi` text NOT NULL,
  `status` varchar(25) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `master_param` (`id`, `uid`, `induk`, `kategori`, `nama`, `isi`, `status`) VALUES
(18,	0,	0,	'inventory',	'no_masuk',	'527',	'1'),
(19,	0,	0,	'inventory',	'no_keluar',	'256',	'1'),
(20,	0,	0,	'pos',	'no_jual',	'25',	'1'),
(23,	0,	0,	'pos',	'no_beli',	'26',	'1'),
(24,	0,	0,	'santri',	'tahunan',	'1',	'1'),
(25,	0,	0,	'santri',	'kodeunik',	'328',	'1'),
(26,	0,	0,	'santri',	'kadaluarsa',	'25',	'1'),
(27,	0,	0,	'santri',	'formatbayar',	'INV-PREFIX/YY/MM/DD',	'1'),
(28,	0,	0,	'santri',	'no_bayar',	'345',	'1'),
(29,	0,	0,	'inventory',	'kodeunik',	'41',	'1'),
(30,	0,	0,	'santri',	'norek',	'Transfer ke rekening VA Nomor 995-1000-3510-10000 atas nama DPK KAF.DPK.CMG PBP',	'1');

DROP TABLE IF EXISTS `master_pesan`;
CREATE TABLE `master_pesan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `dari` varchar(50) NOT NULL,
  `untuk` varchar(50) NOT NULL,
  `pesan` text NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `master_pesan` (`id`, `uid`, `induk`, `tanggal`, `dari`, `untuk`, `pesan`, `status`) VALUES
(15,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(16,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(17,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(18,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(19,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(20,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(21,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(22,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(23,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(24,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(25,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(26,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(27,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(28,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(29,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(30,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(31,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(32,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(33,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(34,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	''),
(35,	0,	0,	'2019-01-01',	'1',	'2',	'hii',	'');

DROP TABLE IF EXISTS `master_report`;
CREATE TABLE `master_report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `isi` text NOT NULL,
  `status` varchar(25) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `master_report` (`id`, `induk`, `kategori`, `nama`, `isi`, `status`) VALUES
(1,	0,	'santri',	'report biaya',	'SELECT IFNULL(nama, \'Total\') as nama, SUM(jumlah) AS jumlah  FROM santri_biaya  GROUP BY nama WITH ROLLUP',	'1');

DROP TABLE IF EXISTS `master_setting`;
CREATE TABLE `master_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `isi` text NOT NULL,
  `status` varchar(25) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `master_setting` (`id`, `uid`, `induk`, `kategori`, `nama`, `isi`, `status`) VALUES
(23,	0,	0,	'asd',	'asd',	'sad',	'asd'),
(21,	0,	1,	'admin',	'camid',	'0',	'1'),
(22,	0,	1,	'admin',	'scanmode',	'desktop',	'1');

DROP TABLE IF EXISTS `master_users`;
CREATE TABLE `master_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `sandi` varchar(50) NOT NULL,
  `akses` varchar(3) NOT NULL,
  `status` varchar(50) NOT NULL,
  `token` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
/*!50100 PARTITION BY KEY ()
PARTITIONS 1 */;

INSERT INTO `master_users` (`id`, `uid`, `induk`, `nama`, `sandi`, `akses`, `status`, `token`) VALUES
(1,	0,	1,	'demo',	'demo',	'2',	'0',	'1038e561f1dd2af442ab41efca605e67'),
(2,	0,	1,	'sa',	'sa',	'1',	'0',	'283811ab04231eead2457b1fdca33d85');

DROP TABLE IF EXISTS `pos_kontak`;
CREATE TABLE `pos_kontak` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `telpon` varchar(50) NOT NULL,
  `npwp` varchar(50) NOT NULL,
  `promo` varchar(50) NOT NULL,
  `keterangan` text NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `pos_kontak` (`id`, `uid`, `kategori`, `kode`, `nama`, `alamat`, `telpon`, `npwp`, `promo`, `keterangan`, `status`) VALUES
(1,	0,	'',	'1',	'supplier',	'',	'',	'',	'',	'',	''),
(2,	0,	'',	'2',	'supplier',	'',	'',	'',	'',	'',	''),
(3,	0,	'',	'3',	'supplier',	'',	'',	'',	'',	'',	''),
(4,	0,	'',	'4',	'supplier',	'',	'',	'',	'',	'',	''),
(5,	0,	'',	'5',	'supplier',	'',	'',	'',	'',	'',	''),
(6,	0,	'',	'6',	'supplier',	'',	'',	'',	'',	'',	''),
(7,	0,	'',	'7',	'supplier',	'',	'',	'',	'',	'',	''),
(8,	0,	'',	'8',	'supplier',	'',	'',	'',	'',	'',	'');

DROP TABLE IF EXISTS `pos_kontaks`;
CREATE TABLE `pos_kontaks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` varchar(11) NOT NULL,
  `kode` varchar(11) NOT NULL,
  `tanggal` varchar(25) NOT NULL,
  `jam` varchar(25) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `keterangan` varchar(50) CHARACTER SET latin1 NOT NULL,
  `banyak` varchar(50) CHARACTER SET latin1 NOT NULL,
  `ref` varchar(50) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `pos_kontaks` (`id`, `uid`, `induk`, `kode`, `tanggal`, `jam`, `nama`, `keterangan`, `banyak`, `ref`) VALUES
(982,	0,	'BL-30',	'2',	'',	'',	'dua',	'',	'7',	''),
(981,	0,	'BL-30',	'1',	'',	'',	'satu',	'',	'5',	''),
(983,	0,	'JL-15',	'1',	'',	'',	'satu',	'',	'5',	''),
(984,	0,	'JL-15',	'2',	'',	'',	'dua',	'',	'5',	''),
(985,	0,	'BL-31',	'1',	'',	'',	'satu',	'',	'6',	''),
(986,	0,	'BL-31',	'2',	'',	'',	'dua',	'',	'2',	''),
(987,	0,	'JL-16',	'1',	'',	'',	'satu',	'',	'1',	''),
(988,	0,	'JL-16',	'2',	'',	'',	'dua',	'',	'3',	'');

DROP TABLE IF EXISTS `pos_promo`;
CREATE TABLE `pos_promo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `keterangan` text NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `pos_promo` (`id`, `uid`, `kode`, `nama`, `keterangan`, `status`) VALUES
(1,	0,	'1',	'supplier',	'',	''),
(2,	0,	'2',	'supplier',	'',	''),
(3,	0,	'3',	'supplier',	'',	''),
(4,	0,	'4',	'supplier',	'',	''),
(5,	0,	'5',	'supplier',	'',	''),
(6,	0,	'6',	'supplier',	'',	''),
(7,	0,	'7',	'supplier',	'',	''),
(8,	0,	'8',	'supplier',	'',	'');

DROP TABLE IF EXISTS `pos_promos`;
CREATE TABLE `pos_promos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` varchar(50) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `satuan` varchar(50) NOT NULL,
  `banyak` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `pos_promos` (`id`, `uid`, `induk`, `kode`, `nama`, `satuan`, `banyak`, `harga`, `jumlah`, `status`) VALUES
(1,	0,	'1',	'2',	'dua',	'',	1,	0,	0,	''),
(2,	0,	'1',	'1',	'satu',	'',	1,	0,	0,	'');

DROP TABLE IF EXISTS `pos_transaksi`;
CREATE TABLE `pos_transaksi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `tanggal` varchar(50) NOT NULL,
  `jam` varchar(50) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `kegiatan` varchar(50) NOT NULL,
  `total` int(11) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `pos_transaksi` (`id`, `uid`, `kode`, `tanggal`, `jam`, `jumlah`, `kegiatan`, `total`, `keterangan`, `status`) VALUES
(527,	0,	'BL-30',	'2019-11-14',	'12:32:46am',	12,	'BL',	0,	'',	''),
(528,	0,	'JL-15',	'2019-11-14',	'12:33:35am',	10,	'JL',	0,	'',	''),
(529,	0,	'BL-31',	'2019-11-14',	'05:13:51am',	8,	'BL',	0,	'',	''),
(530,	0,	'BL-32',	'2019-11-14',	'05:14:05am',	0,	'BL',	0,	'',	''),
(531,	0,	'BL-33',	'2019-11-14',	'05:15:18am',	0,	'BL',	0,	'',	''),
(532,	0,	'BL-34',	'2019-11-14',	'05:17:22am',	0,	'BL',	0,	'',	''),
(533,	0,	'BL-35',	'2019-11-14',	'05:17:56am',	0,	'BL',	0,	'',	''),
(534,	0,	'JL-16',	'2019-11-14',	'05:18:00am',	4,	'JL',	0,	'',	''),
(535,	0,	'BL-36',	'2019-11-14',	'05:20:59am',	0,	'BL',	0,	'',	''),
(536,	0,	'JL-17',	'2019-11-14',	'05:21:03am',	0,	'JL',	0,	'',	''),
(537,	0,	'BL-37',	'2019-11-14',	'05:21:05am',	0,	'BL',	0,	'',	''),
(538,	0,	'BL-38',	'2019-11-14',	'05:23:26am',	0,	'BL',	0,	'',	''),
(539,	0,	'BL-39',	'2019-11-14',	'07:18:38am',	0,	'BL',	0,	'',	'');

DROP TABLE IF EXISTS `pos_transaksis`;
CREATE TABLE `pos_transaksis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `induk` varchar(11) NOT NULL,
  `kode` varchar(11) NOT NULL,
  `tanggal` varchar(25) NOT NULL,
  `jam` varchar(25) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `keterangan` varchar(50) CHARACTER SET latin1 NOT NULL,
  `banyak` varchar(50) CHARACTER SET latin1 NOT NULL,
  `ref` varchar(50) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `pos_transaksis` (`id`, `uid`, `induk`, `kode`, `tanggal`, `jam`, `nama`, `keterangan`, `banyak`, `ref`) VALUES
(982,	0,	'BL-30',	'2',	'',	'',	'dua',	'',	'7',	''),
(981,	0,	'BL-30',	'1',	'',	'',	'satu',	'',	'5',	''),
(983,	0,	'JL-15',	'1',	'',	'',	'satu',	'',	'5',	''),
(984,	0,	'JL-15',	'2',	'',	'',	'dua',	'',	'5',	''),
(985,	0,	'BL-31',	'1',	'',	'',	'satu',	'',	'6',	''),
(986,	0,	'BL-31',	'2',	'',	'',	'dua',	'',	'2',	''),
(987,	0,	'JL-16',	'1',	'',	'',	'satu',	'',	'1',	''),
(988,	0,	'JL-16',	'2',	'',	'',	'dua',	'',	'3',	'');

-- 2019-11-18 23:23:50
