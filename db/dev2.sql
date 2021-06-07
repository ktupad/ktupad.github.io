-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `antrian`;
CREATE TABLE `antrian` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(15) DEFAULT NULL,
  `masuk` varchar(15) DEFAULT NULL,
  `keluar` varchar(15) DEFAULT NULL,
  `keterangan` varchar(15) DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `antrian` (`id`, `kode`, `masuk`, `keluar`, `keterangan`, `status`) VALUES
(1,	'2',	'2021-05-26 22:3',	NULL,	NULL,	NULL),
(2,	'3',	'2021-05-26 22:3',	NULL,	NULL,	NULL),
(3,	'4',	'2021-05-26 22:3',	NULL,	NULL,	NULL),
(4,	'5',	'2021-06-01 07:3',	NULL,	NULL,	NULL),
(5,	'6',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(6,	'7',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(7,	'8',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(8,	'9',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(9,	'10',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(10,	'11',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(11,	'12',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(12,	'13',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(13,	'14',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(14,	'15',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(15,	'16',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(16,	'17',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(17,	'18',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(18,	'19',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(19,	'20',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(20,	'21',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(21,	'22',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(22,	'23',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(23,	'24',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(24,	'25',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(25,	'26',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(26,	'27',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(27,	'28',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(28,	'29',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(29,	'30',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(30,	'31',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(31,	'32',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(32,	'33',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(33,	'34',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(34,	'35',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(35,	'36',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(36,	'37',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(37,	'38',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(38,	'39',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(39,	'40',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(40,	'41',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(41,	'42',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(42,	'43',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(43,	'44',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(44,	'45',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(45,	'46',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(46,	'47',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(47,	'48',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(48,	'49',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(49,	'50',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(50,	'51',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(51,	'52',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(52,	'53',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(53,	'54',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(54,	'55',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(55,	'56',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(56,	'57',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(57,	'58',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(58,	'59',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(59,	'60',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(60,	'61',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(61,	'62',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(62,	'63',	'2021-06-01 07:4',	NULL,	NULL,	NULL),
(63,	'64',	'2021-06-01 11:1',	NULL,	NULL,	NULL),
(64,	'65',	'2021-06-01 11:2',	NULL,	NULL,	NULL),
(65,	'66',	'2021-06-01 11:2',	NULL,	NULL,	NULL),
(66,	'67',	'2021-06-01 11:2',	NULL,	NULL,	NULL),
(67,	'68',	'2021-06-01 12:5',	NULL,	NULL,	NULL);

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
(1,	'artikel 1',	'[div=s-12 l-4][span=judul2]Focus pada bisnis anda [/span]\r\nKami yang menegerjakan semua IT anda.\r\n[btn=blog/blogList]Products[/btn][btn=blog/blog/4]contact[/btn]\r\n[/div][div=s-12 l-8][svg=img kanan dark-shadow]ktupad[/svg][/div]\r\n\r\n',	'slide',	'1'),
(2,	'cepat',	'[svg=simg]performance[/svg][span=judul]Cepat[/span]\r\nDownload halaman tidak lebih dari 1 detik.',	'slide',	'1'),
(3,	'Ringan',	'[svg=simg]distribusi[/svg][span=judul]Ringan[/span]\r\nTotal File yang di download tidak lebih dari 1Mb, ini berarti lebih irit bandwidth dan space, dan lebih hemat Quota tentu.\r\n',	'slide',	'1'),
(10,	'Parkir',	'[span=judul2]Sistem Parkir [/span]\r\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan\r\n[btn=parkir/parkir]Demo[/btn]\r\n[svg=img kanan vert-move]parking[/svg]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]userend[/svg][/div]\r\n[div=s-12 l-8][span=judul2]User[/span]\r\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan dan sebagai tanda bukti penggunaan lahan parkir.\r\nmencatat waktu masuk dan keluar kendaraan. tidak dibolehkan masuk tanpa tiket dari apliaksi parkir.\r\npengguna mengambil tiket dari pos masuk dengan menyentuh tombol ambil yag tertera pada layar aplikasi,\r\nsimpan dan serahkan ke petugas parkir saat akan keluar lahan parkir\r\n[btn=parkir/parkir]Demo[/btn]\r\n[/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Administrator [/span]\r\naplikasi pengelolaan penggunaan lahan parkir,\r\nmencatat penggunaan lahan parkir, mancatat waktu, jumlah kendaraan, dan jenis kendaraan dan\r\nmencatat biaya pemakaian lahan parkir.\r\nmencatat kendaraan keluar dengan cara menekan tombol keluar dan memasukan nomor polisi kendaraan sebagai validasi,\r\npada layar aplikasi.\r\n[btn=parkir/view]Demo[/btn]\r\n[/div]\r\n[div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]usermanager[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Manager[/span]\r\nlaporan analisa penggunaan lahan parkir, ketersediaan lahan dan tren penggunaan lahan parkir.\r\ndiharapkan dapat memprediksi peluang yang ada dimasa mendatang.\r\ndengan cara menanalisa grafik aktifitas parkir dalam periode tertentu.\r\n[btn=parkir/chart]Demo[/btn]\r\n[/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Developer [/span]\r\nadalah framework aplikasi parkir berbasis web.\r\nuntuk membangun sistem parkir dengan cepat dan bisa diintegrasikan dengan aplikasi panunjang lainnya.\r\nseperti aplikasi tamu atau aplikasi absensi.\r\ntersedia print qrcode untuk tiket masuk,\r\nmembangun sistem parkir mulai dari pembuatan table, module, method, menu, chart dan printout dapat di laklukan dalam satu framework.\r\n4 tahapan membangun aplikasi parkir.\r\n1. membuat table\r\n2. membuat module\r\n3. membuat menu\r\n4. membuat method chart dan print out\r\n[btn=dev/home]Coba[/btn]\r\n[/div]\r\n[div=s-12 l-4 artikel][svg=img kanan]userdev[/svg][/div][/div1]\r\n',	'app',	'1'),
(6,	'tematik',	'[svg=simg]bucket[/svg][span=judul]Tematik[/span]\r\nTampilan apps dapat disesuaikan dengan suasana hati pengguna.:D',	'slide',	'1'),
(7,	'Kasir',	'[span=judul2]Aplikasi Kasir[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan\n[btn=parkir/parkir]Demo[/btn]\n[svg=img kanan vert-move]cashier[/svg]\n[more]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]userend[/svg][/div]\n[div=s-12 l-8][span=judul2]User[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan dan sebagai tanda bukti penggunaan lahan parkir.\nmencatat waktu masuk dan keluar kendaraan. tidak dibolehkan masuk tanpa tiket dari apliaksi parkir.\npengguna mengambil tiket dari pos masuk dengan menyentuh tombol ambil yag tertera pada layar aplikasi,\nsimpan dan serahkan ke petugas parkir saat akan keluar lahan parkir\n[btn=parkir/parkir]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Administrator [/span]\naplikasi pengelolaan penggunaan lahan parkir,\nmencatat penggunaan lahan parkir, mancatat waktu, jumlah kendaraan, dan jenis kendaraan dan\nmencatat biaya pemakaian lahan parkir.\nmencatat kendaraan keluar dengan cara menekan tombol keluar dan memasukan nomor polisi kendaraan sebagai validasi,\npada layar aplikasi.\n[btn=parkir/view]Demo[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]usermanager[/svg][/div]\n[div=s-12 l-8][span=judul2]Manager[/span]\nlaporan analisa penggunaan lahan parkir, ketersediaan lahan dan tren penggunaan lahan parkir.\ndiharapkan dapat memprediksi peluang yang ada dimasa mendatang.\ndengan cara menanalisa grafik aktifitas parkir dalam periode tertentu.\n[btn=parkir/chart]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Developer [/span]\nadalah framework aplikasi parkir berbasis web.\nuntuk membangun sistem parkir dengan cepat dan bisa diintegrasikan dengan aplikasi panunjang lainnya.\nseperti aplikasi tamu atau aplikasi absensi.\ntersedia print qrcode untuk tiket masuk,\nmembangun sistem parkir mulai dari pembuatan table, module, method, menu, chart dan printout dapat di laklukan dalam satu framework.\n4 tahapan membangun aplikasi parkir.\n1. membuat table\n2. membuat module\n3. membuat menu\n4. membuat method chart dan print out\n[btn=parkir/parkir]Coba[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]userdev[/svg][/div][/div1]\n',	'app',	'1'),
(8,	'Gudang',	'[span=judul2]Sistem Persediaan[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan\n[btn=parkir/parkir]Demo[/btn]\n[svg=img kanan vert-move]shipping[/svg]\n[more]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]userend[/svg][/div]\n[div=s-12 l-8][span=judul2]User[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan dan sebagai tanda bukti penggunaan lahan parkir.\nmencatat waktu masuk dan keluar kendaraan. tidak dibolehkan masuk tanpa tiket dari apliaksi parkir.\npengguna mengambil tiket dari pos masuk dengan menyentuh tombol ambil yag tertera pada layar aplikasi,\nsimpan dan serahkan ke petugas parkir saat akan keluar lahan parkir\n[btn=parkir/parkir]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Administrator [/span]\naplikasi pengelolaan penggunaan lahan parkir,\nmencatat penggunaan lahan parkir, mancatat waktu, jumlah kendaraan, dan jenis kendaraan dan\nmencatat biaya pemakaian lahan parkir.\nmencatat kendaraan keluar dengan cara menekan tombol keluar dan memasukan nomor polisi kendaraan sebagai validasi,\npada layar aplikasi.\n[btn=parkir/view]Demo[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]usermanager[/svg][/div]\n[div=s-12 l-8][span=judul2]Manager[/span]\nlaporan analisa penggunaan lahan parkir, ketersediaan lahan dan tren penggunaan lahan parkir.\ndiharapkan dapat memprediksi peluang yang ada dimasa mendatang.\ndengan cara menanalisa grafik aktifitas parkir dalam periode tertentu.\n[btn=parkir/chart]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Developer [/span]\nadalah framework aplikasi parkir berbasis web.\nuntuk membangun sistem parkir dengan cepat dan bisa diintegrasikan dengan aplikasi panunjang lainnya.\nseperti aplikasi tamu atau aplikasi absensi.\ntersedia print qrcode untuk tiket masuk,\nmembangun sistem parkir mulai dari pembuatan table, module, method, menu, chart dan printout dapat di laklukan dalam satu framework.\n4 tahapan membangun aplikasi parkir.\n1. membuat table\n2. membuat module\n3. membuat menu\n4. membuat method chart dan print out\n[btn=parkir/parkir]Coba[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]userdev[/svg][/div][/div1]\n',	'app',	'1'),
(9,	'Kunjungan Sales',	'[span=judul2]Aplikasi Absensi[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan\n[btn=parkir/parkir]Demo[/btn]\n[svg=img kanan vert-move]hp[/svg]\n[more]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]userend[/svg][/div]\n[div=s-12 l-8][span=judul2]User[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan dan sebagai tanda bukti penggunaan lahan parkir.\nmencatat waktu masuk dan keluar kendaraan. tidak dibolehkan masuk tanpa tiket dari apliaksi parkir.\npengguna mengambil tiket dari pos masuk dengan menyentuh tombol ambil yag tertera pada layar aplikasi,\nsimpan dan serahkan ke petugas parkir saat akan keluar lahan parkir\n[btn=parkir/parkir]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Administrator [/span]\naplikasi pengelolaan penggunaan lahan parkir,\nmencatat penggunaan lahan parkir, mancatat waktu, jumlah kendaraan, dan jenis kendaraan dan\nmencatat biaya pemakaian lahan parkir.\nmencatat kendaraan keluar dengan cara menekan tombol keluar dan memasukan nomor polisi kendaraan sebagai validasi,\npada layar aplikasi.\n[btn=parkir/view]Demo[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]usermanager[/svg][/div]\n[div=s-12 l-8][span=judul2]Manager[/span]\nlaporan analisa penggunaan lahan parkir, ketersediaan lahan dan tren penggunaan lahan parkir.\ndiharapkan dapat memprediksi peluang yang ada dimasa mendatang.\ndengan cara menanalisa grafik aktifitas parkir dalam periode tertentu.\n[btn=parkir/chart]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Developer [/span]\nadalah framework aplikasi parkir berbasis web.\nuntuk membangun sistem parkir dengan cepat dan bisa diintegrasikan dengan aplikasi panunjang lainnya.\nseperti aplikasi tamu atau aplikasi absensi.\ntersedia print qrcode untuk tiket masuk,\nmembangun sistem parkir mulai dari pembuatan table, module, method, menu, chart dan printout dapat di laklukan dalam satu framework.\n4 tahapan membangun aplikasi parkir.\n1. membuat table\n2. membuat module\n3. membuat menu\n4. membuat method chart dan print out\n[btn=parkir/parkir]Coba[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]userdev[/svg][/div][/div1]\n',	'app',	'1'),
(11,	'Antrian',	'[span=judul2]Sistem Antrian[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan\n[btn=parkir/parkir]Demo[/btn]\n[svg=img kanan vert-move]ticket[/svg]\n[more]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]userend[/svg][/div]\n[div=s-12 l-8][span=judul2]User[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan dan sebagai tanda bukti penggunaan lahan parkir.\nmencatat waktu masuk dan keluar kendaraan. tidak dibolehkan masuk tanpa tiket dari apliaksi parkir.\npengguna mengambil tiket dari pos masuk dengan menyentuh tombol ambil yag tertera pada layar aplikasi,\nsimpan dan serahkan ke petugas parkir saat akan keluar lahan parkir\n[btn=parkir/parkir]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Administrator [/span]\naplikasi pengelolaan penggunaan lahan parkir,\nmencatat penggunaan lahan parkir, mancatat waktu, jumlah kendaraan, dan jenis kendaraan dan\nmencatat biaya pemakaian lahan parkir.\nmencatat kendaraan keluar dengan cara menekan tombol keluar dan memasukan nomor polisi kendaraan sebagai validasi,\npada layar aplikasi.\n[btn=parkir/view]Demo[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]usermanager[/svg][/div]\n[div=s-12 l-8][span=judul2]Manager[/span]\nlaporan analisa penggunaan lahan parkir, ketersediaan lahan dan tren penggunaan lahan parkir.\ndiharapkan dapat memprediksi peluang yang ada dimasa mendatang.\ndengan cara menanalisa grafik aktifitas parkir dalam periode tertentu.\n[btn=parkir/chart]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Developer [/span]\nadalah framework aplikasi parkir berbasis web.\nuntuk membangun sistem parkir dengan cepat dan bisa diintegrasikan dengan aplikasi panunjang lainnya.\nseperti aplikasi tamu atau aplikasi absensi.\ntersedia print qrcode untuk tiket masuk,\nmembangun sistem parkir mulai dari pembuatan table, module, method, menu, chart dan printout dapat di laklukan dalam satu framework.\n4 tahapan membangun aplikasi parkir.\n1. membuat table\n2. membuat module\n3. membuat menu\n4. membuat method chart dan print out\n[btn=parkir/parkir]Coba[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]userdev[/svg][/div][/div1]\n',	'app',	'1'),
(12,	'Kuis',	'[span=judul2]Aplikasi Kuis[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan\n[btn=parkir/parkir]Demo[/btn]\n[svg=img kanan vert-move]exam2[/svg]\n[more]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]userend[/svg][/div]\n[div=s-12 l-8][span=judul2]User[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan dan sebagai tanda bukti penggunaan lahan parkir.\nmencatat waktu masuk dan keluar kendaraan. tidak dibolehkan masuk tanpa tiket dari apliaksi parkir.\npengguna mengambil tiket dari pos masuk dengan menyentuh tombol ambil yag tertera pada layar aplikasi,\nsimpan dan serahkan ke petugas parkir saat akan keluar lahan parkir\n[btn=parkir/parkir]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Administrator [/span]\naplikasi pengelolaan penggunaan lahan parkir,\nmencatat penggunaan lahan parkir, mancatat waktu, jumlah kendaraan, dan jenis kendaraan dan\nmencatat biaya pemakaian lahan parkir.\nmencatat kendaraan keluar dengan cara menekan tombol keluar dan memasukan nomor polisi kendaraan sebagai validasi,\npada layar aplikasi.\n[btn=parkir/view]Demo[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]usermanager[/svg][/div]\n[div=s-12 l-8][span=judul2]Manager[/span]\nlaporan analisa penggunaan lahan parkir, ketersediaan lahan dan tren penggunaan lahan parkir.\ndiharapkan dapat memprediksi peluang yang ada dimasa mendatang.\ndengan cara menanalisa grafik aktifitas parkir dalam periode tertentu.\n[btn=parkir/chart]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Developer [/span]\nadalah framework aplikasi parkir berbasis web.\nuntuk membangun sistem parkir dengan cepat dan bisa diintegrasikan dengan aplikasi panunjang lainnya.\nseperti aplikasi tamu atau aplikasi absensi.\ntersedia print qrcode untuk tiket masuk,\nmembangun sistem parkir mulai dari pembuatan table, module, method, menu, chart dan printout dapat di laklukan dalam satu framework.\n4 tahapan membangun aplikasi parkir.\n1. membuat table\n2. membuat module\n3. membuat menu\n4. membuat method chart dan print out\n[btn=parkir/parkir]Coba[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]userdev[/svg][/div][/div1]\n',	'app',	'1'),
(13,	'Blog',	'[span=judul2]Blog[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan\n[btn=parkir/parkir]Demo[/btn]\n[svg=img kanan vert-move]blog[/svg]\n[more]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]userend[/svg][/div]\n[div=s-12 l-8][span=judul2]User[/span]\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan dan sebagai tanda bukti penggunaan lahan parkir.\nmencatat waktu masuk dan keluar kendaraan. tidak dibolehkan masuk tanpa tiket dari apliaksi parkir.\npengguna mengambil tiket dari pos masuk dengan menyentuh tombol ambil yag tertera pada layar aplikasi,\nsimpan dan serahkan ke petugas parkir saat akan keluar lahan parkir\n[btn=parkir/parkir]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Administrator [/span]\naplikasi pengelolaan penggunaan lahan parkir,\nmencatat penggunaan lahan parkir, mancatat waktu, jumlah kendaraan, dan jenis kendaraan dan\nmencatat biaya pemakaian lahan parkir.\nmencatat kendaraan keluar dengan cara menekan tombol keluar dan memasukan nomor polisi kendaraan sebagai validasi,\npada layar aplikasi.\n[btn=parkir/view]Demo[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\n\n[div1=row]\n[div=s-12 l-4 artikel][svg=img]usermanager[/svg][/div]\n[div=s-12 l-8][span=judul2]Manager[/span]\nlaporan analisa penggunaan lahan parkir, ketersediaan lahan dan tren penggunaan lahan parkir.\ndiharapkan dapat memprediksi peluang yang ada dimasa mendatang.\ndengan cara menanalisa grafik aktifitas parkir dalam periode tertentu.\n[btn=parkir/chart]Demo[/btn]\n[/div]\n[/div1]\n\n[div1=row][div=s-12 l-8][span=judul2]Developer [/span]\nadalah framework aplikasi parkir berbasis web.\nuntuk membangun sistem parkir dengan cepat dan bisa diintegrasikan dengan aplikasi panunjang lainnya.\nseperti aplikasi tamu atau aplikasi absensi.\ntersedia print qrcode untuk tiket masuk,\nmembangun sistem parkir mulai dari pembuatan table, module, method, menu, chart dan printout dapat di laklukan dalam satu framework.\n4 tahapan membangun aplikasi parkir.\n1. membuat table\n2. membuat module\n3. membuat menu\n4. membuat method chart dan print out\n[btn=parkir/parkir]Coba[/btn]\n[/div]\n[div=s-12 l-4 artikel][svg=img kanan]userdev[/svg][/div][/div1]\n',	'app',	'1'),
(4,	'About',	'[svg=simg]map[/svg]\r\n[span=judul]Contact Info[/span]\r\nWawan Sismadi\r\nPhone:087885073237\r\nemail: wawan@sismadi.co.id\r\n[url=https://www.linkedin.com/in/sismadi][svg=svgIco-black]linkedin[/svg][/url]\r\n[url=https://www.facebook.com/wawan.sismadi/][svg=svgIco-black]facebook[/svg][/url]\r\n[url=https://twitter.com/wawansismadi][svg=svgIco-black]twitter[/svg][/url]\r\n[url=https://wa.me/6287885073237][svg=svgIco-black]whatsapp[/svg][/url]\r\n[svg=img]donasi[/svg]\r\n',	'slide',	'1'),
(14,	'Login',	'[span=judul2]Aplikasi Login[/span]\r\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan\r\n[btn=parkir/parkir]Demo[/btn]\r\n[svg=img kanan vert-move]login[/svg]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]userend[/svg][/div]\r\n[div=s-12 l-8][span=judul2]User[/span]\r\naplikasi parkir adalah aplikasi pencatatan keluar masuk kendaraan dan sebagai tanda bukti penggunaan lahan parkir.\r\nmencatat waktu masuk dan keluar kendaraan. tidak dibolehkan masuk tanpa tiket dari apliaksi parkir.\r\npengguna mengambil tiket dari pos masuk dengan menyentuh tombol ambil yag tertera pada layar aplikasi,\r\nsimpan dan serahkan ke petugas parkir saat akan keluar lahan parkir\r\n[btn=parkir/parkir]Demo[/btn]\r\n[/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Administrator [/span]\r\naplikasi pengelolaan penggunaan lahan parkir,\r\nmencatat penggunaan lahan parkir, mancatat waktu, jumlah kendaraan, dan jenis kendaraan dan\r\nmencatat biaya pemakaian lahan parkir.\r\nmencatat kendaraan keluar dengan cara menekan tombol keluar dan memasukan nomor polisi kendaraan sebagai validasi,\r\npada layar aplikasi.\r\n[btn=parkir/view]Demo[/btn]\r\n[/div]\r\n[div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]usermanager[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Manager[/span]\r\nlaporan analisa penggunaan lahan parkir, ketersediaan lahan dan tren penggunaan lahan parkir.\r\ndiharapkan dapat memprediksi peluang yang ada dimasa mendatang.\r\ndengan cara menanalisa grafik aktifitas parkir dalam periode tertentu.\r\n[btn=parkir/chart]Demo[/btn]\r\n[/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Developer [/span]\r\nadalah framework aplikasi parkir berbasis web.\r\nuntuk membangun sistem parkir dengan cepat dan bisa diintegrasikan dengan aplikasi panunjang lainnya.\r\nseperti aplikasi tamu atau aplikasi absensi.\r\ntersedia print qrcode untuk tiket masuk,\r\nmembangun sistem parkir mulai dari pembuatan table, module, method, menu, chart dan printout dapat di laklukan dalam satu framework.\r\n4 tahapan membangun aplikasi parkir.\r\n1. membuat table\r\n2. membuat module\r\n3. membuat menu\r\n4. membuat method chart dan print out\r\n[btn=parkir/parkir]Coba[/btn]\r\n[/div]\r\n[div=s-12 l-4 artikel][svg=img kanan]userdev[/svg][/div][/div1]\r\n',	'app',	'1'),
(15,	'bbcode',	'[span=judul2]BBCode[/span]\r\nAplikasi Pengelolaan Website.\r\n[spoiler=bbcode-spoiler]\r\n[btn=blog/d/bbcode/view]Show[/btn]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]camera2[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-4][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[div=s-12 l-8 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n',	'addon',	'1'),
(16,	'svg',	'[span=judul2]SVG[/span]\r\nAplikasi Pengelolaan Website.\r\n[spoiler=svg-spoiler]\r\n[btn=blog/d/svg/view]Show[/btn]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]camera2[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-4][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[div=s-12 l-8 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n',	'addon',	'1'),
(17,	'color',	'[span=judul2]Color[/span]\r\nAplikasi Pengelolaan Website.\r\n[spoiler=color-spoiler]\r\n[btn=blog/d/color/view]Show[/btn]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]camera2[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-4][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[div=s-12 l-8 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n',	'addon',	'1'),
(18,	'aurora',	'[span=judul2]Aurora[/span]\r\nAplikasi Pengelolaan Website.\r\n[spoiler=aurora-spoiler]\r\n[btn=blog/d/aurora/view]Show[/btn]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]camera2[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-4][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[div=s-12 l-8 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n',	'addon',	'1'),
(19,	'chart',	'[span=judul2]Chart[/span]\r\nAplikasi Pengelolaan Website.\r\n[spoiler=chart-spoiler]\r\n[btn=blog/d/chart/view]Show[/btn]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]camera2[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-4][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[div=s-12 l-8 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n',	'addon',	'1'),
(20,	'phpmailer',	'[span=judul2]CMS[/span]\r\nAplikasi Pengelolaan Website.\r\n[btn=blog/blog]Demo[/btn][btn=blog/order/kuis]Order[/btn]\r\n[svg=img kanan]blog[/svg]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]camera2[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-4][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[div=s-12 l-8 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n',	'addon',	'1'),
(21,	'map leaflet',	'[span=judul2]CMS[/span]\r\nAplikasi Pengelolaan Website.\r\n[btn=blog/blog]Demo[/btn][btn=blog/order/kuis]Order[/btn]\r\n[svg=img kanan]blog[/svg]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]camera2[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-4][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[div=s-12 l-8 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Free Inventory System [/span]Gratis Program Gudang, Inventory,Penjualan dan Akuntansi.[url=#]download[/url][/div]\r\n[/div1]\r\n',	'addon',	'1'),
(22,	'Model',	'[span=judul2]Model[/span]\r\nkelola data dengan memberikan web service.\r\n[spoiler=chart-spoiler]\r\n[btn=blog/d/chart/view]Show[/btn]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]param[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Instalasi\r\n[/span]aturan penulisan pada file model.\r\n[code]public function mymethod(){\r\n$out=\'Hi\';\r\necho json_encode($out);\r\n}[/code]\r\n[/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Penggunaan[/span]\r\nUntuk mengambil data dari data base, caranya adalah dengan mengetikan\r\n[code]https://ktupad.com/api2/?mod=mymethod.[/code]\r\nhasil:\r\n[code]Hi[/code]\r\n[url=https://ktupad.com/api2/?mod=mymethod]Coba[/url]\r\n[/div]\r\n[div=s-12 l-4 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Parameter[/span]\r\nuntuk mengambil data dengan parameter tertentu maka pada method di tambahkan kode menjadi sebagai berikut\r\n[code]public function mymethod(){\r\n$d=$this->conf;\r\n$out=$d[\'myparam\'];\r\necho json_encode($out);\r\n}\r\n[/code]\r\nselanjutnya menuliskan pada url dengan menambahkan parameter,\r\n[code]https://ktupad.com/api2/?mod=mymethod&myparam=hello[/code]\r\nhasil:\r\n[code]hello[/code]\r\n[url=https://ktupad.com/api2/?mod=mymethod&myparam=hello]Coba[/url]\r\n[/div]\r\n[/div1]\r\n',	'mvc',	'1'),
(23,	'View',	'[span=judul2]View[/span]\r\nAdalah tampilan sebuah aplikasi, berfungsi agar manusia dapat berinteraksi aplikasi.\r\nfile view berada di system/view.js\r\n[btn=dev/mymethod]Show[/btn]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]param[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Instalasi\r\n[/span]Aturan penulisan pada file view, adalah sebagai berikut.\r\n[code]mydiv:\'&lt;div id=\"mydiv\" class=\"myclass\"&gt;Hi &lt;/div&gt;\',\r\n[/code]\r\n[/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Penggunaan[/span]\r\nUntuk melihat hasil yang sudah kita tuliskan, caranya adalah dengan mengetikan pada broser\r\n[code]https://ktupad.com/?c=dev/getView[/code]\r\n[url=https://ktupad.com/?c=dev/loadView/]Coba[/url]\r\n[/div]\r\n[div=s-12 l-4 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Class[/span]\r\nmerubah tampilan view dlakukan si style.class\r\n[code].myclass{\r\n  background:purple;\r\n}[/code]selanjutnya bisa kita lihat melalui broser\r\n[/div]\r\n[/div1]\r\n',	'mvc',	'1'),
(24,	'Controller',	'[span=judul2]Controller[/span]\r\nkelola data dengan memberikan web service.\r\nfile controller berada di system/controller.js\r\n[btn=blog/d/chart/view]Show[/btn]\r\n[more]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]param[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Instalasi\r\n[/span]Aturan penulisan pada file controller.\r\n[code]mymethod:function(){\r\nk[x].ajax.data={mod:\'mymethod\',tb:\'mytable\'};\r\nk[x].ajax.get(function callback(json){ res=JSON.parse(json);\r\ndebug(res);\r\ndocument.getElementById(\'content\').innerHTML=res;\r\n});\r\n},[/code]\r\n[/div]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Penggunaan[/span]\r\nUntuk mengambil data dari data base, caranya adalah dengan mengetikan\r\n[code]https://ktupad.com/?c=mymodul/mymethod/[/code]\r\natau:\r\n[code]&lt;button onclick=\"conf.loadfunction(\'mymodul/mymethod\')\"&gt;&lt;/button&gt;[/code]\r\n[url=https://ktupad.com/?c=mymodul/mymethod/]Coba[/url]\r\n[/div]\r\n[div=s-12 l-4 artikel][svg=img kanan]map[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]clock[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Parameter[/span]\r\nuntuk mengambil data dengan parameter tertentu maka pada method di tambahkan kode menjadi sebagai berikut\r\n[code]mymethod:function(){\r\nm=conf.loadFunctionData;\r\nif(m[2]){ id=m[2]; }\r\nk[x].ajax.data={mod:\'mymethod\',tb:\'mytable\',id:id};\r\nk[x].ajax.get(function callback(json){ res=JSON.parse(json);\r\ndebug(res);\r\ndocument.getElementById(\'content\').innerHTML=res;\r\n});\r\n},[/code]\r\nselanjutnya menuliskan pada url dengan menambahkan parameter,\r\n[code]https://ktupad.com/?c=mymodul/mymethod/myparam[/code]\r\nhasil:\r\n[code]&lt;button onclick=\"conf.loadfunction(\'mymodul/mymethod/myparam\')\"&gt;&lt;/button&gt;[/code]\r\n[url=https://ktupad.com/?c=mymodul/mymethod/myparam]Coba[/url]\r\n[/div]\r\n[/div1]\r\n',	'mvc',	'1'),
(25,	'Home',	'[div1=row]\r\n[div=s-12 l-8][span=judul2]Tinggalkan cara lama,\r\nmasuki era digital[/span]\r\n- Kamu masih antri untuk membeli makanan ke warung,\r\n- atau masih melakukan promosi  dagang dari rumah ke rumah,\r\n- atau masih menulis catatan transaksi secara manual,\r\n- atau masih menunggu karyawan selesai merekap laporan penjualan,\r\n- atau masih bekerja sendiri membuat program penjualan.\r\nya, semua itu sangat tidak menguntungkan, tidak efisien dan tidak keren :D.\r\nLalu bagaimana yang menguntungkan di era digital hari ini?.\r\nYa. Kamu sudah benar, dan beruntung menemukan website ini.\r\n[btn=blog/blogList]Products[/btn][btn=blog/blog/4]contact[/btn]\r\n[/div]\r\n[div=s-12 l-4][svg=img kanan dark-shadow]responsive[/svg][/div]\r\n[more]\r\n[/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Assalamualaikum [/span]\r\nApa kabar? Sehat ya. Semoga kita sehat semua dan sekeluarga juga sehat. Aamiin.\r\nHari ini kita akan membahas sebuah web framework buatan anak indonesia, namannya Ktupad Apps, apa itu ktupad?.\r\nAdalah aplikasi komputer berbasis web, yang bisa di gunakan di smartphon, latop atau dektop.\r\nSampai hari ini ktupad sudah memilik delapan aplikasi. yang bisa jadi adalah solusi kerumitan masalah yang saya sampaikan diawal, yaini:\r\n+ [b]Blog[/b],\r\n+ [b]Antrian[/b],\r\n+ [b]Parkir[/b],\r\n+ [b]Gudang[/b],\r\n+ [b]Kasir[/b],\r\n+ [b]Absensi[/b],\r\n+ [b]kuis[/b] dan\r\n+ [b]Pengelolaan Pelanggan[/b].\r\n\r\nBagaimana ktupad apps dapat membuat hidup kita lebih sederhana dan ringan?. ini tantangan menarik.\r\nSaya akan sampaikan dalam empat kelompok pengguna, yaini:\r\n[/div][div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\r\n\r\n[div1=row]\r\n[div=s-12 l-4 artikel][svg=img]userend[/svg][/div]\r\n[div=s-12 l-8][span=judul2]User[/span]\r\n--[b]Single Touch[/b]\r\nSemakin sedikit berinteraksi dengan palikasi semakin baik, itu pasti, kamu tidak ingin direpotkan dengan buku petunjuk bukan?.\r\nCukup sekali sentuh, apa yang kamu butuhkan tersedia. :D\r\n--[b]Weareable[/b]\r\nAplikasi hari ini tidak hanya sekedar alat bantu kita melakukan aktifitas sehari hari, tapi juga bisa dijadikan aksesoris, dapat menyesuaikan suasana hati pengguna. semisal, mengganti latar cukup dengan mengeser ke kiri atau kekanan.\r\n[btn=app/home]Demo[/btn]\r\n[/div][/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Administrator [/span]\r\n--[b]Personalis.[/b]\r\nPengaturan pengunaan hanya untuk yang diberikan akses saja. kita ga mau kan, kerjaan kita yang bersifat pribadi diacak acak orang lain.\r\n--[b]Integrated.[/b]\r\nLebih menyenangkan dan jauh punya faedah jika menyelesaikan pekerjaan dari data yang sudah ada, jadi tidak input ulang, bisa menggunakan fitur eksport dan import data menggunakan CSV.\r\n[btn=demo/home]Demo[/btn]\r\n[/div][div=s-12 l-4 artikel][svg=img kanan]useradmin[/svg][/div][/div1]\r\n\r\n[div1=row][div=s-12 l-4 artikel][svg=img]usermanager[/svg][/div]\r\n[div=s-12 l-8][span=judul2]Manager[/span]\r\n--[b]Support 24 Jam.[/b]\r\nKetersediaan data, sumberdaya dan dukungan teknis.\r\n--[b]Easy Report Reader.[/b]\r\nMudah membaca dan menaalisa data melalui chart yang disediakan.\r\n[btn=demo/chart]Demo[/btn]\r\n[/div][/div1]\r\n\r\n[div1=row][div=s-12 l-8][span=judul2]Developer [/span]\r\nMungkin kita familiar dengan [b]Laravel[/b] atau [b]CodeIgniter[/b], mereka adalah web framework yang menggunakan pola modular dimana mereka membagi pekerjaan menjadi tiga kelompok yaini. Model, View dan Controller.\r\n[b]Model[/b] sebagai pengelolaan database, [b]View[/b] sebagai user interface dan [b]Controller[/b] sebagai pemograman.\r\nTidak berbeda dengan [b]ktupad[/b], sama sama memiliki fitur seperti kedua framework tersebut, bedanya adalah jika laravel atau CI menggunakan monilitik arsitektur, ktupad sudah setingkat beralih ke microservice.\r\nHal ini bisa dilihat dengan adanya API yang berkomunikasi mengunakan JSON, sehingga aplikasi kecil lain dapat saling berkomunikasi.\r\n\r\n--[b]Crossplatform.[/b]\r\n---[b]PDO-PHP Data Object.[/b] Adalah database interface universal dari PHP, tidak mengikat pada database tertentu.\r\n---[b]PWA-Progresive Web Apps.[/b] Menjadikan akses ke web app menjadi lebih cepat, kenapa? karena PWA mampu menyimpan file website ke dalam cache memory di web browser, dengan begitu dapat dijalankan secara offline.\r\n\r\n--[b]Modular.[/b]\r\nPenting untuk bekerja dalam era digital hari ini dengan memanfaatkan sumber daya yang ada, salah satu nya addon yang banyak bertebarang di internet, dan siap digunakan.\r\n+ [b]Color[/b],\r\n+ [b]Aurora[/b],\r\n+ [b]Chart[/b],\r\n+ [b]BBCode[/b],\r\n+ [b]SVG[/b],\r\n+ [b]PHPMailer[/b],\r\n+ [b]QRScan[/b] dan\r\n+ [b]Leaflet Map[/b].\r\n[btn=addon/home]Demo[/btn]\r\n---[b]MVC[/b] Berbagi pekerjaan menjadi tiga bagian, yaini. model, view dan Controller, manjadikan pekerjaan lebih cepat dan efisien pada proses pembuatan dan pengujian.\r\n---[b]Single Tool[/b] Proses pembuatan aplikasi dalam dilakukan pada aplikasi itu sendiri mulai dari [b]Database[/b]>[b]Modul[/b]>[b]Menu[/b]>[b]Form[/b]>[b]Table[/b]>[b]Report[/b].\r\n\r\n--[b]Teamwork[/b]\r\n---[b]SDLC- Software Development Live Cycle.[/b]\r\n----[b]Database[/b] Model, menggunakan  PHP dan MySQL.\r\n----[b]Design[/b] View, menggunakan HTMl dan CSS.\r\n----[b]Coding[/b] Controller menggunakan JS\r\n----[b]Testing[/b] Pengujian dilakukan dengan metode forensik, yaini menggunakn webdev tools, adalah alat pengujian website.\r\n----[b]Documenting[/b] Jika memiliki pertanyaan, ide atau berbagi pengetahuan, atau sekedar ngobrol ringan, kita bisa menyampaikannya di forum facebook berikut\r\n[btn=dev/home]Coba[/btn]\r\n[/div]\r\n[div=s-12 l-4 artikel][svg=img kanan]userdev[/svg][/div][/div1]\r\n',	'body',	'1');

DROP TABLE IF EXISTS `copy_img`;
CREATE TABLE `copy_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `copy_img` (`id`, `img`) VALUES
(1,	'data:image/jpeg;base64,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');

DROP TABLE IF EXISTS `dev_addon`;
CREATE TABLE `dev_addon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `url` varchar(254) CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_addon` (`id`, `nama`, `url`, `status`) VALUES
(1,	'SVG',	'addon/svg/svg',	'1'),
(2,	'Chart',	'addon/chart/chart',	'1'),
(3,	'Aurora',	'addon/aurora/aurora',	'1'),
(4,	'Color',	'addon/color/color',	'1'),
(38,	'BBCode',	'addon/bbcode/bbcode',	'1');

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
(1,	'1',	'ktupad v3.5',	'Green2',	'system/database.php',	'http://localhost/new/',	'app/home',	'',	'0'),
(15,	'1',	'ktupad v3.5',	'Green',	'api2/',	'http://localhost/new/',	'blog/blogHome/25',	'',	'1');

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
(10,	'hadir',	'editor',	'keterangan',	'1'),
(14,	'form',	'dropdown',	'{\"id\":\"nama\",\"arr\":[\"textarea\",\"dropdown\",\"droprow\",\"date\",\"editor\",\"gps\",\"jam\",\"tanggal\"]}',	'1'),
(12,	'method',	'textarea',	'isi',	'1'),
(13,	'method',	'dropdown',	'{\"id\":\"nama\",\"arr\":[\"home\",\"add\",\"read\",\"view2\",\"pilih\",\"pilih2\",\"bar\",\"cetak\",\"qrprint\",\"blog\"]}',	'1'),
(15,	'form',	'textarea',	'isi',	'1'),
(17,	'modul',	'droprow',	'{\"id\":\"tb\",\"tb\":\"dev_table\",\"fld\":\"nama\"}',	'0'),
(22,	'',	'droprow',	'{\"id\":\"induk\",\"tb\":\"dev_modul\",\"fld\":\"nama\"}',	'0'),
(21,	'form',	'droprow',	'{\"id\":\"induk\",\"tb\":\"dev_modul\",\"fld\":\"nama\"}',	'1'),
(23,	'blog',	'editor',	'isi',	'1'),
(24,	'hadir',	'gps',	'gps',	'1'),
(27,	'hadir',	'jam',	'jam',	'1'),
(29,	'hadir',	'tanggal',	'tanggal',	'1'),
(41,	'kuis',	'editor',	'pertanyaan',	'1'),
(32,	'blog',	'dropdown',	'{\"id\":\"posisi\",\"arr\":[\"slide\",\"side\",\"body\"]}',	'1'),
(42,	'kuis',	'editor',	'jawaban',	'1'),
(43,	'report',	'editor',	'isi',	'1');

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
(1,	'0',	'1',	'Dev',	'dev/home',	'param',	'1'),
(2,	'0',	'2',	'App',	'app/home',	'param',	'1'),
(3,	'0',	'3',	'Demo',	'demo/home',	'view',	'1'),
(4,	'0',	'4',	'Addon',	'addon/home',	'laporan',	'1'),
(5,	'1',	'5',	'Setting',	'app/view',	'param',	'1'),
(6,	'1',	'6',	'Table',	'table/view5',	'cloud',	'1'),
(7,	'1',	'7',	'Modul',	'modul/view',	'label',	'1'),
(8,	'1',	'8',	'Menu',	'menu/view',	'menu',	'1'),
(9,	'1',	'9',	'Form',	'form/view',	'exam',	'1'),
(10,	'1',	'10',	'Method',	'method/view',	'code',	'1'),
(13,	'1',	'13',	'Param',	'param/view',	'param',	'1'),
(14,	'1',	'14',	'Update',	'dev/appUpdate',	'param',	'1'),
(15,	'3',	'15',	'pengguna',	'pengguna/view',	'kontak',	'1'),
(16,	'3',	'16',	'antrian',	'antrian/view',	'label',	'1'),
(17,	'3',	'17',	'parkir',	'parkir/parkir',	'lokasi',	'1'),
(18,	'3',	'18',	'kuis',	'kuis/kuis',	'exam',	'1'),
(19,	'3',	'19',	'Blog',	'blog/view',	'share',	'1'),
(20,	'3',	'20',	'Barang',	'barang/view',	'bag',	'1'),
(21,	'3',	'21',	'Tas',	'tas/view',	'bag',	'1'),
(22,	'3',	'22',	'Kasir',	'kasir/view',	'cart',	'1'),
(23,	'3',	'23',	'Hadir',	'hadir/view',	'camera',	'1'),
(24,	'2',	'24',	'login',	'pengguna/login',	'kontak',	'1'),
(25,	'2',	'25',	'antrian',	'antrian/tiket',	'label',	'1'),
(26,	'2',	'26',	'parkir',	'parkir/view',	'lokasi',	'1'),
(27,	'2',	'27',	'kuis',	'kuis/view',	'exam',	'1'),
(28,	'2',	'28',	'Blog',	'blog/blogHome/1',	'share',	'1'),
(29,	'2',	'29',	'Barang',	'barang/view',	'bag',	'1'),
(30,	'2',	'30',	'Kasir',	'kasir/view',	'cart',	'1'),
(31,	'2',	'31',	'Hadir',	'hadir/view',	'camera',	'1'),
(32,	'4',	'32',	'Install',	'addon/view',	'param',	'1'),
(33,	'1',	'33',	'Report',	'report/view',	'laporan',	'1'),
(34,	'4',	'34',	'Aurora',	'addon/d/aurora/view',	'bucket',	'1'),
(35,	'4',	'35',	'Chart',	'addon/d/chart/view',	'laporan',	'1'),
(36,	'4',	'36',	'SVG',	'addon/d/svg/view',	'image',	'1'),
(37,	'4',	'37',	'Color',	'addon/d/color/view',	'bucket',	'1');

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
(15,	'kasir',	'read',	'{\"method\":\"view2\",\"induk\":\"kode\"}',	'1'),
(14,	'kasirItems',	'cetak',	'report/kasirreport/1',	'1'),
(19,	'hadir',	'add',	'scan',	'1'),
(44,	'kasirDetail',	'add',	'pilih2',	'1'),
(17,	'kasirItems',	'add',	'pilih2',	'1'),
(47,	'kasir',	'cetak',	'report/kasirreport/1',	'1'),
(21,	'kasir',	'view2',	'{\"data\":[{\"nama\":\"kasirDetail\",\"tabel\":\"kasir\",\"mod\":\"kasirDetail\",\"menu\":\"header\"},  {\"nama\":\"kasirItems\",\"tabel\":\"tas\",\"mod\":\"kasirItems\",\"menu\":\"body\"}]}',	'1'),
(46,	'parkir',	'cetak',	'report/qrreport/1',	'1'),
(26,	'kasir',	'bar',	'{\"bar\":[{\"url\":\"k.kasir.app.scan()\",\"ikon\":\"camera\"},{\"url\":\"k.kasir.app.qrScan2()\",\"ikon\":\"target\"},{\"url\":\"k.kasir.app.cetak()\",\"ikon\":\"printer\"}]}',	'1'),
(27,	'table',	'view2',	'{\"data\":[{\"nama\":\"tables\",\"tabel\":\"dev_table\",\"mod\":\"tables\",\"menu\":\"header\"},  {\"nama\":\"column\",\"tabel\":\"dev_column\",\"mod\":\"column\",\"menu\":\"body\"}]}',	'1'),
(38,	'app',	'home',	'2',	'1'),
(37,	'dev',	'home',	'1',	'1'),
(36,	'tables',	'read',	'{\"method\":\"tableread\",\"induk\":\"Tables_in_dev\",\"isColumn\":\"2\"}',	'1'),
(33,	'column',	'read',	'{\"method\":\"tableread\",\"induk\":\"Field\",\"isColumn\":\"1\"}',	'1'),
(34,	'table',	'read',	'{\"method\":\"view2\",\"induk\":\"Tables_in_dev\",\"isColumn\":\"0\"}',	'1'),
(39,	'barang',	'bar',	'{\"bar\":[{\"url\":\"k.barang.app.qrscan()\",\"ikon\":\"camera\"},{\"url\":\"k.barang.app.qrprint()\",\"ikon\":\"printer\"}]}',	'1'),
(41,	'hadir',	'read',	'{\"method\":\"map\",\"induk\":\"gps\"}',	'1'),
(40,	'barang',	'cetak',	'report/qrreport/1',	'1'),
(42,	'demo',	'home',	'3',	'1'),
(43,	'blog',	'blog',	'{\"menu\":[{\"url\":\"blog/blogHome/1\",\"nama\":\"Home\"},{\"url\":\"blog/blogList/mvc\",\"nama\":\"About\"},{\"url\":\"blog/blogList/app\",\"nama\":\"App\"},{\"url\":\"blog/blogList/addon\",\"nama\":\"Addon\"},{\"url\":\"blog/blog/4\",\"nama\":\"Price\"}],\"app\":{\"header\":\"Ktupad.com\",\"footer\":\"ktupad 2021\",\"background\":\"aurora-agrabah\"}}',	'1'),
(45,	'antrian',	'cetak',	'report/qrreport/1',	'1'),
(48,	'addon',	'home',	'4',	'1');

DROP TABLE IF EXISTS `dev_modul`;
CREATE TABLE `dev_modul` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `tabel` varchar(50) CHARACTER SET latin1 NOT NULL,
  `menu` varchar(50) CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_modul` (`id`, `induk`, `nama`, `tabel`, `menu`, `status`) VALUES
(1,	'99',	'param',	'dev_param',	'param',	'1'),
(2,	'1',	'barang',	'barang',	'barang',	'1'),
(3,	'1',	'kasirItems',	'tas',	'tas',	'1'),
(8,	'1',	'kasir',	'kasir',	'kasir',	'1'),
(9,	'1',	'kasirDetail',	'kasir',	'kasir',	'1'),
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
(46,	'99',	'svg',	'dev_column',	'svg',	'1'),
(35,	'1',	'antrian',	'antrian',	'antrian',	'1'),
(38,	'1',	'parkir',	'parkir',	'parkir',	'1'),
(43,	'1',	'kuis',	'kuis',	'kuis',	'1'),
(26,	'99',	'demo',	'dev_column',	'demo',	'1'),
(31,	'1',	'pengguna',	'pengguna',	'pengguna',	'1'),
(44,	'1',	'report',	'dev_report',	'report',	'1'),
(45,	'99',	'addon',	'dev_addon',	'addon',	'1');

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
(7,	'1',	'JL',	'28',	'1'),
(8,	'1',	'tiket',	'68',	'1');

DROP TABLE IF EXISTS `dev_report`;
CREATE TABLE `dev_report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) CHARACTER SET latin1 NOT NULL,
  `nama` varchar(50) CHARACTER SET latin1 NOT NULL,
  `isi` text CHARACTER SET latin1 NOT NULL,
  `status` varchar(20) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `dev_report` (`id`, `induk`, `nama`, `isi`, `status`) VALUES
(1,	'umum',	'umum',	'[div=s-12 l-4][svg=img dark-shadow]ktupad[/svg][/div]\r\n[div=s-12 l-8][span=judul]Ktupad[/span]\r\nKami yang menegerjakan semua IT bisnis anda.\r\n[/div]\r\n',	'');

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

DROP TABLE IF EXISTS `img`;
CREATE TABLE `img` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `img` (`id`, `img`) VALUES
(1,	'data:image/jpeg;base64,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');

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
  `nama` varchar(50) DEFAULT NULL,
  `pertanyaan` text,
  `jawaban` text,
  `kunci` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `kuis` (`id`, `nama`, `pertanyaan`, `jawaban`, `kunci`, `status`) VALUES
(1,	'1',	'ibukota indonesia adalah',	'a|jakarta;b|surabaya',	'a',	'1');

DROP TABLE IF EXISTS `parkir`;
CREATE TABLE `parkir` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama32` varchar(15) DEFAULT NULL,
  `kode` varchar(15) DEFAULT NULL,
  `masuk` varchar(15) DEFAULT NULL,
  `keluar` varchar(15) DEFAULT NULL,
  `keterangan` varchar(15) DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `parkir` (`id`, `nama32`, `kode`, `masuk`, `keluar`, `keterangan`, `status`) VALUES
(1,	NULL,	'park1',	'2021-05-26 22:5',	NULL,	NULL,	NULL),
(2,	NULL,	'park1',	'2021-05-26 22:5',	NULL,	NULL,	NULL),
(3,	NULL,	'park1',	'2021-06-01 07:1',	NULL,	NULL,	NULL),
(4,	NULL,	'park1',	'2021-06-01 07:1',	NULL,	NULL,	NULL),
(5,	NULL,	'park1',	'2021-06-01 07:1',	NULL,	NULL,	NULL),
(6,	NULL,	'park1',	'2021-06-01 07:2',	NULL,	NULL,	NULL),
(7,	NULL,	'park1',	'2021-06-01 07:2',	NULL,	NULL,	NULL),
(8,	NULL,	'park1',	'2021-06-01 07:2',	NULL,	NULL,	NULL),
(9,	NULL,	'park1',	'2021-06-01 07:2',	NULL,	NULL,	NULL),
(10,	NULL,	'park1',	'2021-06-01 07:2',	NULL,	NULL,	NULL),
(11,	NULL,	'park1',	'2021-06-01 07:2',	NULL,	NULL,	NULL),
(12,	NULL,	'park1',	'2021-06-01 07:3',	NULL,	NULL,	NULL),
(13,	NULL,	'park1',	'2021-06-01 07:3',	NULL,	NULL,	NULL),
(14,	NULL,	'park1',	'2021-06-01 07:5',	NULL,	NULL,	NULL),
(15,	NULL,	'park1',	'2021-06-01 07:5',	NULL,	NULL,	NULL),
(16,	NULL,	'park1',	'2021-06-01 07:5',	NULL,	NULL,	NULL),
(17,	NULL,	'park1',	'2021-06-01 07:5',	NULL,	NULL,	NULL),
(18,	NULL,	'park1',	'2021-06-01 08:1',	NULL,	NULL,	NULL),
(19,	NULL,	'park1',	'2021-06-01 08:1',	NULL,	NULL,	NULL),
(20,	NULL,	'park1',	'2021-06-01 09:1',	NULL,	NULL,	NULL),
(21,	NULL,	'park1',	'2021-06-01 09:2',	NULL,	NULL,	NULL),
(22,	NULL,	'park1',	'2021-06-01 09:4',	NULL,	NULL,	NULL),
(23,	NULL,	'park1',	'2021-06-01 11:1',	NULL,	NULL,	NULL),
(24,	NULL,	'park1',	'2021-06-01 11:2',	NULL,	NULL,	NULL),
(25,	NULL,	'park1',	'2021-06-01 11:2',	NULL,	NULL,	NULL),
(26,	NULL,	'park1',	'2021-06-01 11:2',	NULL,	NULL,	NULL),
(27,	NULL,	'park1',	'2021-06-01 11:2',	NULL,	NULL,	NULL),
(28,	NULL,	'park1',	'2021-06-01 12:5',	NULL,	NULL,	NULL),
(29,	NULL,	'park1',	'2021-06-01 13:5',	NULL,	NULL,	NULL),
(30,	NULL,	'park1',	'2021-06-03 12:1',	NULL,	NULL,	NULL),
(31,	NULL,	'park1',	'2021-06-05 11:1',	NULL,	NULL,	NULL),
(32,	NULL,	'park1',	'2021-06-06 18:3',	NULL,	NULL,	NULL),
(33,	NULL,	'park1',	'2021-06-07 00:0',	NULL,	NULL,	NULL);

DROP TABLE IF EXISTS `pengguna`;
CREATE TABLE `pengguna` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` int(11) NOT NULL,
  `nama` varchar(15) DEFAULT NULL,
  `pin` varchar(15) DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `pengguna` (`id`, `induk`, `nama`, `pin`, `status`) VALUES
(1,	0,	'admin',	'123',	'1'),
(13,	0,	'sa',	'sa',	'0'),
(14,	0,	'da',	'da',	'1');

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
(64223,	'JL-25',	'2021-05-08',	'1',	'satu',	'38',	100,	3800,	0),
(64224,	'JL-25',	'2021-05-08',	'2',	'duas',	'18',	200,	3600,	0),
(64225,	'JL-26',	'2021-05-09',	'1',	'satu',	'21',	100,	2100,	0),
(64226,	'JL-26',	'2021-05-09',	'2',	'duas',	'18',	200,	3600,	0),
(64227,	'JL-27',	'2021-05-12',	'1',	'satu',	'52',	100,	5200,	0),
(64228,	'JL-27',	'2021-05-12',	'2',	'duas',	'22',	200,	4400,	0);

DROP TABLE IF EXISTS `tes`;
CREATE TABLE `tes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) NOT NULL,
  `pin` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user` (`id`, `nama`, `pin`) VALUES
(1,	'admin',	'123');

-- 2021-06-07 07:17:57
