-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `antrian`;
CREATE TABLE `antrian` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tanggal` date NOT NULL,
  `jam` time NOT NULL,
  `keterangan` text COLLATE latin1_general_ci NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `antrian` (`id`, `tanggal`, `jam`, `keterangan`, `status`) VALUES
(14243,	'2021-05-04',	'06:31:58',	'[img]addon/cam/upload/20210503233158.jpeg[/img]',	'sa');

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `barang`;
CREATE TABLE `barang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kategori` varchar(50) NOT NULL,
  `kode` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `satuan` varchar(50) CHARACTER SET latin1 NOT NULL,
  `banyak` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `keterangan` text CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

INSERT INTO `barang` (`id`, `kategori`, `kode`, `nama`, `satuan`, `banyak`, `harga`, `keterangan`, `status`) VALUES
(1,	'sea',	'1',	'satu',	'pc',	100,	100,	'1',	'1'),
(2,	'sea',	'2',	'duas',	'pc',	200,	200,	'1',	'1');

DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(254) CHARACTER SET latin1 NOT NULL,
  `isi` text CHARACTER SET latin1 NOT NULL,
  `posisi` varchar(50) CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `blog` (`id`, `judul`, `isi`, `posisi`, `status`) VALUES
(1,	'artikel 1',	'[img]files/man.svg[/img]',	'side',	'1'),
(2,	'artike 2',	'[img]files/laptop.svg[/img]',	'slide',	'1'),
(3,	'artikel 3',	'[img]files/startup.svg[/img]',	'slide',	'1'),
(6,	'artikel 6',	'[b] ss[/b][br][more][img]system/ktupad.svg[/img][br]',	'body',	'1'),
(7,	'artikel 7',	'[b] ss[/b][br][img]system/ktupad.svg[/img][br][img]system/ktupad.svg[/img]',	'body',	'1'),
(8,	'artikel 8',	'[b] ss[/b][br][img]system/ktupad.svg[/img][br]',	'body',	'1');

DROP TABLE IF EXISTS `dev_app`;
CREATE TABLE `dev_app` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `warna` varchar(50) CHARACTER SET latin1 NOT NULL,
  `model` varchar(50) CHARACTER SET latin1 NOT NULL,
  `host` varchar(50) CHARACTER SET latin1 NOT NULL,
  `home` varchar(50) CHARACTER SET latin1 NOT NULL,
  `isi` text CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_app` (`id`, `induk`, `nama`, `warna`, `model`, `host`, `home`, `isi`, `status`) VALUES
(14,	'1',	'ktupad v3.5',	'Green2',	'system/database.php',	'https://ktupad.id/lite/',	'blog/blog',	'',	'1');

DROP TABLE IF EXISTS `dev_bar`;
CREATE TABLE `dev_bar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `urut` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `url` varchar(254) CHARACTER SET latin1 NOT NULL,
  `ikon` varchar(254) CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_bar` (`id`, `induk`, `urut`, `nama`, `url`, `ikon`, `status`) VALUES
(1,	'kasirDetail',	'1',	'param',	'k.kasirDetail.app.qrScan()',	'camera',	'1'),
(2,	'kasirDetail',	'2',	'barang',	'k.kasirDetail.app.qrScan2()',	'target',	'1'),
(3,	'kasirDetail',	'3',	'tass',	'k.kasirDetail.app.cetak()',	'printer',	'1'),
(4,	'kasirDetail',	'4',	'Kasir',	'k.kasirDetail.app.baru()',	'plus',	'1');

DROP TABLE IF EXISTS `dev_column`;
CREATE TABLE `dev_column` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test` varchar(15) COLLATE latin1_general_ci DEFAULT NULL,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `tipe` varchar(50) CHARACTER SET latin1 NOT NULL,
  `length` int(11) NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_column` (`id`, `test`, `induk`, `nama`, `tipe`, `length`, `status`) VALUES
(1,	NULL,	'dev_table',	'id',	'int',	11,	'1'),
(2,	NULL,	'1',	'pos_transaksi',	'',	0,	'1'),
(3,	NULL,	'1',	'stok_tass',	'',	0,	'1'),
(4,	NULL,	'1',	'web_blog',	'',	0,	'1'),
(5,	NULL,	'1',	'stok_barang',	'',	0,	'1'),
(6,	NULL,	'dev_table',	'nama',	'varchar',	50,	'1'),
(7,	NULL,	'dev_table',	'isi',	'text',	50,	'1'),
(8,	NULL,	'test',	'id',	'int',	11,	''),
(9,	NULL,	'test',	'nama',	'varchar',	50,	'');

DROP TABLE IF EXISTS `dev_form`;
CREATE TABLE `dev_form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `isi` text CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_form` (`id`, `induk`, `nama`, `isi`, `status`) VALUES
(1,	'kasir',	'textarea',	'status',	''),
(8,	'kasir',	'editor',	'keterangan',	''),
(9,	'blog',	'editor',	'isi',	''),
(10,	'hadir',	'editor',	'keterangan',	'1'),
(14,	'form',	'dropdown',	'{\"id\":\"nama\",\"arr\":[\"textarea\",\"dropdown\",\"droprow\",\"date\",\"editor\",\"gps\",\"jam\",\"tanggal\"]}',	'1'),
(12,	'method',	'textarea',	'isi',	'1'),
(13,	'method',	'dropdown',	'{\"id\":\"nama\",\"arr\":[\"home\",\"add\",\"read\",\"view2\",\"getdata\",\"bar\",\"cetak\",\"qrprint\"]}',	'1'),
(15,	'form',	'textarea',	'isi',	'1'),
(17,	'modul',	'droprow',	'{\"id\":\"tb\",\"tb\":\"dev_table\",\"fld\":\"nama\"}',	'0'),
(22,	'method',	'droprow',	'{\"id\":\"induk\",\"tb\":\"dev_modul\",\"fld\":\"nama\"}',	'1'),
(21,	'form',	'droprow',	'{\"id\":\"induk\",\"tb\":\"dev_modul\",\"fld\":\"nama\"}',	'1'),
(23,	'blog',	'editor',	'isi',	'1'),
(24,	'hadir',	'gps',	'gps',	'1'),
(27,	'hadir',	'jam',	'jam',	'1'),
(29,	'hadir',	'tanggal',	'tanggal',	'1'),
(30,	'kuis',	'editor',	'pertanyaan',	'1'),
(31,	'kuis',	'editor',	'jawaban',	'1'),
(32,	'blog',	'dropdown',	'{\"id\":\"posisi\",\"arr\":[\"slide\",\"side\",\"body\"]}',	'1');

DROP TABLE IF EXISTS `dev_getdata`;
CREATE TABLE `dev_getdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `tb` varchar(50) CHARACTER SET latin1 NOT NULL,
  `mn` varchar(50) CHARACTER SET latin1 NOT NULL,
  `mod` varchar(50) CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_getdata` (`id`, `induk`, `nama`, `tb`, `mn`, `mod`, `status`) VALUES
(3,	'kasirDetail',	'kasirItems',	'stok_tass',	'body',	'tass',	'1'),
(8,	'kasirDetail',	'kasirDetail',	'pos_transaksi',	'header',	'kasir',	'1');

DROP TABLE IF EXISTS `dev_menu`;
CREATE TABLE `dev_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `urut` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `url` varchar(254) CHARACTER SET latin1 NOT NULL,
  `ikon` varchar(254) CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_menu` (`id`, `induk`, `urut`, `nama`, `url`, `ikon`, `status`) VALUES
(12,	'10',	'12',	'Barang',	'barang/view',	'bag',	'1'),
(13,	'10',	'13',	'Tas',	'tas/view',	'bag',	'0'),
(14,	'10',	'14',	'Kasir',	'kasir/view',	'cart',	'1'),
(15,	'10',	'15',	'Hadir',	'hadir/view',	'camera',	'1'),
(16,	'10',	'16',	'Blog',	'blog/view',	'share',	'1'),
(55,	'10',	'14',	'Kuis',	'kuis/view',	'exam',	'1'),
(56,	'10',	'12',	'Parkir',	'parkir/view',	'lokasi',	'1'),
(57,	'10',	'12',	'Antrian',	'antrian/view',	'label',	'1'),
(58,	'10',	'12',	'users',	'users/view',	'kontak',	'1'),
(9,	'1',	'9',	'icons',	'dev/icons',	'image',	'1'),
(10,	'0',	'10',	'App',	'app/home',	'param',	'1'),
(11,	'1',	'11',	'param',	'param/view',	'param',	'1'),
(8,	'1',	'8',	'color',	'dev/color',	'bucket',	'1'),
(5,	'1',	'5',	'menu',	'menu/view',	'menu',	'1'),
(6,	'1',	'6',	'form',	'form/view',	'exam',	'1'),
(7,	'1',	'7',	'Method',	'method/view',	'code',	'1'),
(2,	'1',	'2',	'setting',	'app/view',	'param',	'1'),
(3,	'1',	'3',	'table',	'table/view5',	'cloud',	'1'),
(4,	'1',	'4',	'Modul',	'modul/view',	'label',	'1'),
(1,	'0',	'1',	'Dev',	'dev/home',	'param',	'1');

DROP TABLE IF EXISTS `dev_method`;
CREATE TABLE `dev_method` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `isi` text CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_method` (`id`, `induk`, `nama`, `isi`, `status`) VALUES
(1,	'kasirDetail',	'read',	'read1',	'1'),
(15,	'kasir',	'read',	'{\"method\":\"view2\",\"induk\":\"kode\"}',	'1'),
(14,	'kasirDetail',	'cetak',	'prints/kasir.html	',	'1'),
(19,	'hadir',	'add',	'scan',	'1'),
(17,	'kasirDetail',	'add',	'view2',	'1'),
(20,	'kasir',	'bar',	'{\"bar\":[{\"url\":\"k.kasir.app.scan()\",\"ikon\":\"camera\"},\n{\"url\":\"k.kasir.app.qrScan2()\",\"ikon\":\"target\"},\n{\"url\":\"k.kasir.app.cetak()\",\"ikon\":\"printer\"}\n]\n}',	'1'),
(21,	'kasir',	'getdata',	'{\"data\":[{\"nama\":\"kasir\",\"tb\":\"pos_transaksi\",\"mod\":\"kasir\",\"mn\":\"header\"},\n  {\"nama\":\"tass\",\"tb\":\"stok_tass\",\"mod\":\"tass\",\"mn\":\"body\"}\n]}',	'1'),
(22,	'kasir',	'cetak',	'prints/kasir.html',	'1'),
(26,	'table',	'bar',	'{\"bar\":[{\"url\":\"k.kasir.app.scan()\",\"ikon\":\"camera\"},{\"url\":\"k.kasir.app.qrScan2()\",\"ikon\":\"target\"},{\"url\":\"k.kasir.app.cetak()\",\"ikon\":\"printer\"}]}',	'1'),
(27,	'table',	'getdata',	'{\"data\":[{\"nama\":\"tables\",\"tb\":\"dev_table\",\"mod\":\"tables\",\"mn\":\"header\"},  {\"nama\":\"column\",\"tb\":\"dev_column\",\"mod\":\"column\",\"mn\":\"body\"}]}',	'1'),
(38,	'app',	'home',	'10',	'1'),
(37,	'dev',	'home',	'1',	'1'),
(36,	'tables',	'read',	'{\"method\":\"tableread\",\"induk\":\"Tables_in_dev\",\"isColumn\":\"2\"}',	'1'),
(33,	'column',	'read',	'{\"method\":\"tableread\",\"induk\":\"Field\",\"isColumn\":\"1\"}',	'1'),
(34,	'table',	'read',	'{\"method\":\"view2\",\"induk\":\"Tables_in_dev\",\"isColumn\":\"0\"}',	'1'),
(39,	'barang',	'bar',	'{\"bar\":[{\"url\":\"k.barang.app.qrscan()\",\"ikon\":\"camera\"},{\"url\":\"k.barang.app.qrprint()\",\"ikon\":\"printer\"}]}',	'1'),
(41,	'hadir',	'read',	'{\"method\":\"map\",\"induk\":\"gps\"}',	'1'),
(40,	'barang',	'qrprint',	'prints/qrprint.html',	'1');

DROP TABLE IF EXISTS `dev_modul`;
CREATE TABLE `dev_modul` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `tb` varchar(50) CHARACTER SET latin1 NOT NULL,
  `mn` varchar(50) CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_modul` (`id`, `induk`, `nama`, `tb`, `mn`, `status`) VALUES
(1,	'99',	'param',	'dev_param',	'param',	'1'),
(2,	'1',	'barang',	'barang',	'barang',	'1'),
(3,	'1',	'tas',	'tas',	'tas',	'1'),
(8,	'1',	'kasir',	'kasir',	'kasir',	'1'),
(9,	'1',	'kasirDetail',	'tas',	'kasir',	'1'),
(10,	'99',	'modul',	'dev_modul',	'modul',	'1'),
(11,	'99',	'app',	'dev_app',	'app',	'1'),
(12,	'99',	'menu',	'dev_menu',	'menu',	'1'),
(13,	'99',	'method',	'dev_method',	'method',	'1'),
(14,	'1',	'blog',	'blog',	'blog',	'1'),
(15,	'99',	'form',	'dev_form',	'form',	'1'),
(16,	'1',	'hadir',	'hadir',	'hadir',	'1'),
(17,	'99',	'table',	'dev_table',	'table',	'1'),
(18,	'99',	'column',	'dev_column',	'table',	'1'),
(19,	'99',	'tables',	'dev_table',	'table',	'1'),
(20,	'99',	'dev',	'dev_column',	'dev',	'1'),
(21,	'99',	'app',	'dev_column',	'app',	'1'),
(22,	'1',	'antrian',	'antrian',	'antrian',	'1'),
(23,	'1',	'parkir',	'parkir',	'parkir',	'1'),
(24,	'1',	'kuis',	'kuis',	'kuis',	'1'),
(25,	'1',	'users',	'users',	'users',	'1');

DROP TABLE IF EXISTS `dev_param`;
CREATE TABLE `dev_param` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `isi` text CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_param` (`id`, `induk`, `nama`, `isi`, `status`) VALUES
(1,	'1',	'periode',	'2021-01-01 s/d 2021-12-31',	''),
(2,	'1',	'limit',	'100',	''),
(3,	'1',	'IN',	'43',	'1'),
(4,	'1',	'OU',	'72',	'1'),
(5,	'1',	'PO',	'140',	'1'),
(6,	'1',	'BL',	'14',	'1'),
(7,	'1',	'JL',	'28',	'1');

DROP TABLE IF EXISTS `dev_table`;
CREATE TABLE `dev_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `keterangan` text CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_table` (`id`, `induk`, `nama`, `keterangan`, `status`) VALUES
(1,	'1',	'absen_hadir',	'',	'1'),
(6,	'1',	'dev_column',	'',	'1'),
(2,	'1',	'pos_transaksi',	'',	'1'),
(3,	'1',	'stok_tass',	'',	'1'),
(4,	'1',	'web_blog',	'',	'1'),
(5,	'1',	'stok_barang',	'',	'1');

DROP TABLE IF EXISTS `hadir`;
CREATE TABLE `hadir` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tanggal` date NOT NULL,
  `jam` time NOT NULL,
  `gps` varchar(254) COLLATE latin1_general_ci NOT NULL,
  `keterangan` text COLLATE latin1_general_ci NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `hadir` (`id`, `tanggal`, `jam`, `gps`, `keterangan`, `status`) VALUES
(14243,	'2021-05-04',	'06:31:58',	'-6.3289325, 106.84745610000002',	'[img]addon/cam/upload/20210503233158.jpeg[/img]',	'sa'),
(14251,	'2021-05-19',	'00:09:17',	'-6.328833299999999, 106.8474579',	'[img]cam/upload/20210518170917.jpeg[/img]',	'1');

DROP TABLE IF EXISTS `kasir`;
CREATE TABLE `kasir` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(50) NOT NULL,
  `tanggal` varchar(50) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `kasir` (`id`, `kode`, `tanggal`, `jumlah`, `total`, `keterangan`, `status`) VALUES
(100,	'JL-25',	'2021-05-08',	56,	7400,	'',	''),
(101,	'JL-26',	'2021-05-09',	39,	5700,	'',	''),
(102,	'JL-27',	'2021-05-12',	74,	9600,	'',	'');

DROP TABLE IF EXISTS `kuis`;
CREATE TABLE `kuis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `pertanyaan` text CHARACTER SET utf8 NOT NULL,
  `jawaban` text COLLATE latin1_general_ci NOT NULL,
  `kunci` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `keterangan` text COLLATE latin1_general_ci NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `kuis` (`id`, `nama`, `pertanyaan`, `jawaban`, `kunci`, `keterangan`, `status`) VALUES
(2,	'1',	'Kemanusiaan yang adil dan beradab, adalah pancasila, sila ke',	'a|1;b|2;c|3;d|4',	'b',	'',	'1'),
(3,	'1',	'Persatuan Indonesia, adalah pancasila, sila ke',	'a|1;b|2;c|3;d|4',	'c',	'',	'1'),
(4,	'1',	'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam perwakilan, adalah pancasila, sila ke',	'a|1;b|2;c|3;d|4',	'd',	'',	'1'),
(5,	'1',	'[img]files/hujan.jpg[/img][br]Keadilan sosial bagi seluruh rakyat Indonesia, adalah pancasila, sila ke',	'a|1;b|2;c|3;d|5',	'd',	'',	'1');

DROP TABLE IF EXISTS `parkir`;
CREATE TABLE `parkir` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `masuk` datetime NOT NULL,
  `keluar` datetime NOT NULL,
  `keterangan` text COLLATE latin1_general_ci NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `parkir` (`id`, `kode`, `masuk`, `keluar`, `keterangan`, `status`) VALUES
(14243,	'',	'2021-05-04 00:00:00',	'0000-00-00 00:00:00',	'[img]addon/cam/upload/20210503233158.jpeg[/img]',	'sa');

DROP TABLE IF EXISTS `tas`;
CREATE TABLE `tas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(11) NOT NULL,
  `tanggal` varchar(25) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `banyak` varchar(50) CHARACTER SET latin1 NOT NULL,
  `harga` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `keterangan` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `tas` (`id`, `induk`, `tanggal`, `kode`, `nama`, `banyak`, `harga`, `jumlah`, `keterangan`) VALUES
(64152,	'CA-42',	'2021-01-26',	'1',	'satu',	'9',	0,	0,	0),
(64151,	'CA-38',	'2021-01-26',	'2',	'duas',	'5',	0,	0,	0),
(64150,	'CA-38',	'2021-01-26',	'1',	'satu',	'6',	0,	0,	0),
(64149,	'CA-43',	'2021-01-26',	'1',	'satu',	'14',	0,	0,	0),
(64148,	'CA-43',	'2021-01-26',	'2',	'duas',	'15',	0,	0,	0),
(64165,	'OU-62',	'2021-04-18',	'2',	'duas',	'1',	0,	0,	0),
(64145,	'CA-37',	'2021-01-25',	'2',	'duas',	'9',	0,	0,	0),
(64144,	'CA-37',	'2021-01-25',	'1',	'satu',	'7',	0,	0,	0),
(64142,	'CA-36',	'2021-01-07',	'2',	'duas',	'6',	0,	0,	0),
(64143,	'CA-36',	'2021-01-08',	'1',	'satu',	'6',	0,	0,	0),
(64167,	'IN-34',	'2021-04-18',	'2',	'duas',	'1',	0,	0,	0),
(64166,	'IN-34',	'2021-04-18',	'1',	'satu',	'3',	0,	0,	0),
(64164,	'CA-42',	'2021-04-18',	'2',	'duas',	'4',	0,	0,	0),
(64168,	'OU-63',	'2021-04-18',	'2',	'duas',	'7',	0,	0,	0),
(64169,	'OU-63',	'2021-04-18',	'1',	'satu',	'7',	0,	0,	0),
(64170,	'OU-61',	'2021-04-18',	'1',	'satu',	'1',	0,	0,	0),
(64171,	'OU-61',	'2021-04-18',	'2',	'duas',	'1',	0,	0,	0),
(64172,	'OU-60',	'2021-04-18',	'1',	'satu',	'1',	0,	0,	0),
(64173,	'OU-64',	'2021-04-18',	'1',	'satu',	'8',	0,	0,	0),
(64174,	'OU-64',	'2021-04-18',	'2',	'duas',	'8',	0,	0,	0),
(64175,	'IN-35',	'2021-04-18',	'1',	'satu',	'63',	0,	0,	0),
(64176,	'IN-35',	'2021-04-18',	'2',	'duas',	'44',	0,	0,	0),
(64177,	'IN-41',	'2021-05-01',	'1',	'satu',	'1',	0,	0,	0),
(64178,	'IN-41',	'2021-05-01',	'2',	'duas',	'2',	0,	0,	0),
(64179,	'po-1',	'2021-05-01',	'2',	'duas',	'2',	0,	0,	0),
(64180,	'po-2',	'2021-05-01',	'1',	'satu',	'1',	0,	0,	0),
(64181,	'po-1',	'2021-05-01',	'1',	'satu',	'2',	0,	0,	0),
(64182,	'po-3',	'2021-05-01',	'20',	'satu',	'1',	0,	0,	0),
(64183,	'po-3',	'2021-05-01',	'2',	'duas',	'1',	0,	0,	0),
(64184,	'po-4',	'2021-05-01',	'1',	'satu',	'20',	0,	0,	0),
(64185,	'po-4',	'2021-05-01',	'2',	'duas',	'1',	0,	0,	0),
(64186,	'po-8',	'2021-05-02',	'1',	'satu',	'2',	0,	0,	0),
(64187,	'po-8',	'2021-05-02',	'2',	'duas',	'1',	0,	0,	0),
(64188,	'po-9',	'2021-05-02',	'2',	'duas',	'369',	0,	222,	0),
(64189,	'po-11',	'2021-05-02',	'1',	'satu',	'3',	0,	0,	0),
(64208,	'bl-12',	'2021-05-03',	'2',	'duas',	'6',	200,	1200,	0),
(64206,	'bl-12',	'2021-05-03',	'1',	'satu',	'3',	100,	300,	0),
(64192,	'po-11',	'2021-05-03',	'2',	'duas',	'1',	0,	0,	0),
(64207,	'po-13',	'2021-05-03',	'1',	'satu',	'1',	0,	0,	0),
(64209,	'\"JL-11\"',	'2021-05-03',	'1',	'satu',	'1',	100,	100,	0),
(64210,	'JL-15',	'2021-05-03',	'1',	'satu',	'20',	100,	2000,	0),
(64211,	'JL-18',	'2021-05-03',	'1',	'satu',	'107',	100,	10700,	0),
(64212,	'JL-18',	'2021-05-03',	'2',	'duas',	'82',	200,	16400,	0),
(64213,	'JL-17',	'2021-05-07',	'1',	'satu',	'17',	100,	1700,	0),
(64214,	'JL-17',	'2021-05-07',	'2',	'duas',	'11',	200,	2200,	0),
(64215,	'Array',	'2021-05-08',	'2',	'duas',	'3',	200,	600,	0),
(64216,	'Array',	'2021-05-08',	'1',	'satu',	'8',	100,	800,	0),
(64217,	'JL-16',	'2021-05-08',	'2',	'duas',	'3',	200,	600,	0),
(64218,	'',	'2021-05-08',	'2',	'duas',	'9',	200,	1800,	0),
(64219,	'',	'2021-05-08',	'1',	'satu',	'4',	100,	400,	0),
(64220,	'JL-15',	'2021-05-08',	'2',	'duas',	'17',	200,	3400,	0),
(64221,	'JL-16',	'2021-05-08',	'1',	'satu',	'4',	100,	400,	0),
(64222,	'JL-23',	'2021-05-08',	'2',	'duas',	'4',	200,	800,	0),
(64223,	'JL-25',	'2021-05-08',	'1',	'satu',	'38',	100,	3800,	0),
(64224,	'JL-25',	'2021-05-08',	'2',	'duas',	'18',	200,	3600,	0),
(64225,	'JL-26',	'2021-05-09',	'1',	'satu',	'21',	100,	2100,	0),
(64226,	'JL-26',	'2021-05-09',	'2',	'duas',	'18',	200,	3600,	0),
(64227,	'JL-27',	'2021-05-12',	'1',	'satu',	'52',	100,	5200,	0),
(64228,	'JL-27',	'2021-05-12',	'2',	'duas',	'22',	200,	4400,	0);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(15) DEFAULT NULL,
  `pin` varchar(15) DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` (`id`, `email`, `pin`, `status`) VALUES
(1,	'admin',	'123',	'1');

-- 2021-05-20 03:19:16
