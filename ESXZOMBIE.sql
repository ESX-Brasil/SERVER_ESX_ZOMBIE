
-- Dumping database structure for essentialmode
CREATE DATABASE IF NOT EXISTS `essentialmode` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `essentialmode`;

-- Dumping structure for table essentialmode.addon_account
CREATE TABLE IF NOT EXISTS `addon_account` (
  `name` varchar(60) COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `shared` int(11) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping data for table essentialmode.addon_account: ~0 rows (approximately)
DELETE FROM `addon_account`;
/*!40000 ALTER TABLE `addon_account` DISABLE KEYS */;
INSERT INTO `addon_account` (`name`, `label`, `shared`) VALUES
	('vault_black_money', 'Money Vault', 0);
/*!40000 ALTER TABLE `addon_account` ENABLE KEYS */;

-- Dumping structure for table essentialmode.addon_account_data
CREATE TABLE IF NOT EXISTS `addon_account_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account_name` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
  `money` int(11) NOT NULL,
  `owner` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_addon_account_data_account_name_owner` (`account_name`,`owner`),
  KEY `index_addon_account_data_account_name` (`account_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping structure for table essentialmode.addon_inventory
CREATE TABLE IF NOT EXISTS `addon_inventory` (
  `name` varchar(60) COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `shared` int(11) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping data for table essentialmode.addon_inventory: ~0 rows (approximately)
DELETE FROM `addon_inventory`;
/*!40000 ALTER TABLE `addon_inventory` DISABLE KEYS */;
INSERT INTO `addon_inventory` (`name`, `label`, `shared`) VALUES
	('vault', 'Vault', 0);
/*!40000 ALTER TABLE `addon_inventory` ENABLE KEYS */;

-- Dumping structure for table essentialmode.addon_inventory_items
CREATE TABLE IF NOT EXISTS `addon_inventory_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inventory_name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `count` int(11) NOT NULL,
  `owner` varchar(60) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_addon_inventory_items_inventory_name_name` (`inventory_name`,`name`),
  KEY `index_addon_inventory_items_inventory_name_name_owner` (`inventory_name`,`name`,`owner`),
  KEY `index_addon_inventory_inventory_name` (`inventory_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping structure for table essentialmode.datastore
CREATE TABLE IF NOT EXISTS `datastore` (
  `name` varchar(60) COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `shared` int(11) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping data for table essentialmode.datastore: ~5 rows (approximately)
DELETE FROM `datastore`;
/*!40000 ALTER TABLE `datastore` DISABLE KEYS */;
INSERT INTO `datastore` (`name`, `label`, `shared`) VALUES
	('user_ears', 'Ears', 0),
	('user_glasses', 'Glasses', 0),
	('user_helmet', 'Helmet', 0),
	('user_mask', 'Mask', 0),
	('vault', 'Vault', 0);
/*!40000 ALTER TABLE `datastore` ENABLE KEYS */;

-- Dumping structure for table essentialmode.datastore_data
CREATE TABLE IF NOT EXISTS `datastore_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_bin NOT NULL,
  `owner` varchar(60) COLLATE utf8mb4_bin DEFAULT NULL,
  `data` longtext COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_datastore_data_name_owner` (`name`,`owner`),
  KEY `index_datastore_data_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping structure for table essentialmode.items
CREATE TABLE IF NOT EXISTS `items` (
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `weight` int(11) NOT NULL DEFAULT 1,
  `limit` int(10) NOT NULL DEFAULT 0,
  `rare` tinyint(1) NOT NULL DEFAULT 0,
  `can_remove` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping data for table essentialmode.items: ~56 rows (approximately)
DELETE FROM `items`;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` (`name`, `label`, `weight`, `limit`, `rare`, `can_remove`) VALUES
	('bandage', 'Bandage', 2, 0, 0, 1),
	('bandage2', 'Bandage 2', 2, 0, 0, 1),
	('binoculars', 'Binoculars', 1, 0, 0, 1),
	('boxflare', 'Ammo Box Flare', 1, 0, 0, 1),
	('boxmg', 'Ammo Box MG', 1, 0, 0, 1),
	('boxpistol', 'Ammo Box Pistol', 1, 0, 0, 1),
	('boxrifle', 'Ammo Box Rifle', 1, 0, 0, 1),
	('boxshot', 'Ammo Box Shotgun', 1, 0, 0, 1),
	('boxsmg', 'Ammo Box SMG', 1, 0, 0, 1),
	('boxsniper', 'Ammo Box Sniper', 1, 0, 0, 1),
	('bruiser', 'bruiser', 3, 0, 0, 1),
	('bruiser2', 'bruiser2', 3, 0, 0, 1),
	('bruiser3', 'bruiser3', 3, 0, 0, 1),
	('brutus', 'brutus', 3, 0, 0, 1),
	('brutus2', 'brutus2', 3, 0, 0, 1),
	('brutus3', 'brutus3', 3, 0, 0, 1),
	('bulletproof', 'Bullet-Proof Vest', 1, 0, 0, 1),
	('cannabis', 'Cannabis', 3, 0, 0, 1),
	('cerberus', 'cerberus', 5, 0, 0, 1),
	('cerberus2', 'cerberus2', 5, 0, 0, 1),
	('cerberus3', 'cerberus3', 5, 0, 0, 1),
	('deathbike', 'deathbike', 2, 0, 0, 1),
	('deathbike2', 'deathbike2', 2, 0, 0, 1),
	('deathbike3', 'deathbike3', 2, 0, 0, 1),
	('deviant', 'deviant', 4, 0, 0, 1),
	('dominator4', 'dominator4', 4, 0, 0, 1),
	('dominator5', 'dominator5', 4, 0, 0, 1),
	('dominator6', 'dominator6', 4, 0, 0, 1),
	('impaler', 'impaler', 3, 0, 0, 1),
	('impaler2', 'impaler2', 3, 0, 0, 1),
	('impaler3', 'impaler3', 3, 0, 0, 1),
	('impaler4', 'impaler4', 3, 0, 0, 1),
	('imperator', 'imperator', 3, 0, 0, 1),
	('imperator2', 'imperator2', 3, 0, 0, 1),
	('imperator3', 'imperator3', 3, 0, 0, 1),
	('issi4', 'issi4', 3, 0, 0, 1),
	('issi5', 'issi5', 3, 0, 0, 1),
	('issi6', 'issi6', 3, 0, 0, 1),
	('marijuana', 'Marijuana', 2, 0, 0, 1),
	('medikit', 'Medikit', 2, 0, 0, 1),
	('monster3', 'monster3', 5, 0, 0, 1),
	('monster4', 'monster4', 5, 0, 0, 1),
	('monster5', 'monster5', 5, 0, 0, 1),
	('oxygenmask', 'Oxygen Mask', 1, 0, 0, 1),
	('repairkit', 'Repair Kit', 1, 0, 0, 1),
	('scarab', 'scarab', 5, 0, 0, 1),
	('scarab2', 'scarab2', 5, 0, 0, 1),
	('scarab3', 'scarab3', 5, 0, 0, 1),
	('slamvan4', 'slamvan4', 4, 0, 0, 1),
	('slamvan5', 'slamvan5', 4, 0, 0, 1),
	('slamvan6', 'slamvan6', 4, 0, 0, 1),
	('tulip', 'tulip', 3, 0, 0, 1),
	('vamos', 'vamos', 3, 0, 0, 1),
	('zr380', 'zr380', 3, 0, 0, 1),
	('zr3802', 'zr3802', 3, 0, 0, 1),
	('zr3803', 'zr3803', 3, 0, 0, 1);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;

-- Dumping structure for table essentialmode.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping data for table essentialmode.jobs: ~0 rows (approximately)
DELETE FROM `jobs`;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` (`name`, `label`) VALUES
	('unemployed', 'Unemployed');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;

-- Dumping structure for table essentialmode.job_grades
CREATE TABLE IF NOT EXISTS `job_grades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_name` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `grade` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `salary` int(11) NOT NULL,
  `skin_male` longtext COLLATE utf8mb4_bin NOT NULL,
  `skin_female` longtext COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping data for table essentialmode.job_grades: ~0 rows (approximately)
DELETE FROM `job_grades`;
/*!40000 ALTER TABLE `job_grades` DISABLE KEYS */;
INSERT INTO `job_grades` (`id`, `job_name`, `grade`, `name`, `label`, `salary`, `skin_male`, `skin_female`) VALUES
	(1, 'unemployed', 0, 'unemployed', 'Unemployed', 0, '{}', '{}');
/*!40000 ALTER TABLE `job_grades` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_app_chat
CREATE TABLE IF NOT EXISTS `phone_app_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `channel` varchar(20) NOT NULL,
  `message` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table essentialmode.phone_app_chat: ~0 rows (approximately)
DELETE FROM `phone_app_chat`;
/*!40000 ALTER TABLE `phone_app_chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_app_chat` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_calls
CREATE TABLE IF NOT EXISTS `phone_calls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` varchar(10) NOT NULL COMMENT 'Name',
  `num` varchar(10) NOT NULL COMMENT 'Phone Number',
  `incoming` int(11) NOT NULL COMMENT 'Define Incoming Call',
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `accepts` int(11) NOT NULL COMMENT 'Accept Call',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8;

-- Dumping data for table essentialmode.phone_calls: ~0 rows (approximately)
DELETE FROM `phone_calls`;
/*!40000 ALTER TABLE `phone_calls` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_calls` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_messages
CREATE TABLE IF NOT EXISTS `phone_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `transmitter` varchar(10) NOT NULL,
  `receiver` varchar(10) NOT NULL,
  `message` varchar(255) NOT NULL DEFAULT '0',
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `isRead` int(11) NOT NULL DEFAULT 0,
  `owner` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table essentialmode.phone_messages: 0 rows
DELETE FROM `phone_messages`;
/*!40000 ALTER TABLE `phone_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_messages` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_users_contacts
CREATE TABLE IF NOT EXISTS `phone_users_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL,
  `number` varchar(10) CHARACTER SET utf8mb4 DEFAULT NULL,
  `display` varchar(64) CHARACTER SET utf8mb4 NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table essentialmode.phone_users_contacts: 0 rows
DELETE FROM `phone_users_contacts`;
/*!40000 ALTER TABLE `phone_users_contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_users_contacts` ENABLE KEYS */;

-- Dumping structure for table essentialmode.shops
CREATE TABLE IF NOT EXISTS `shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `store` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `item` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping data for table essentialmode.shops: ~36 rows (approximately)
DELETE FROM `shops`;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
INSERT INTO `shops` (`id`, `store`, `item`, `price`) VALUES
	(1, 'TwentyFourSeven', 'bruiser', 4000),
	(2, 'TwentyFourSeven', 'bruiser2', 6500),
	(3, 'TwentyFourSeven', 'bruiser3', 5000),
	(4, 'TwentyFourSeven', 'brutus', 5000),
	(5, 'TwentyFourSeven', 'brutus2', 7500),
	(6, 'TwentyFourSeven', 'brutus3', 5000),
	(7, 'TwentyFourSeven', 'deathbike', 2000),
	(8, 'TwentyFourSeven', 'deathbike2', 2000),
	(9, 'TwentyFourSeven', 'deathbike3', 2000),
	(10, 'TwentyFourSeven', 'deviant', 8000),
	(11, 'TwentyFourSeven', 'impaler', 10000),
	(12, 'TwentyFourSeven', 'impaler2', 12000),
	(13, 'TwentyFourSeven', 'impaler3', 15000),
	(14, 'TwentyFourSeven', 'impaler4', 10000),
	(15, 'TwentyFourSeven', 'imperator', 9000),
	(16, 'TwentyFourSeven', 'imperator2', 8500),
	(17, 'TwentyFourSeven', 'imperator3', 10000),
	(18, 'TwentyFourSeven', 'issi4', 15000),
	(19, 'TwentyFourSeven', 'issi5', 15000),
	(20, 'TwentyFourSeven', 'issi6', 15000),
	(21, 'TwentyFourSeven', 'monster3', 20000),
	(22, 'TwentyFourSeven', 'monster4', 19000),
	(23, 'TwentyFourSeven', 'monster5', 20000),
	(24, 'TwentyFourSeven', 'slamvan4', 6000),
	(25, 'TwentyFourSeven', 'slamvan5', 9000),
	(26, 'TwentyFourSeven', 'slamvan6', 5000),
	(27, 'TwentyFourSeven', 'tulip', 19000),
	(28, 'TwentyFourSeven', 'vamos', 20000),
	(29, 'TwentyFourSeven', 'binoculars', 100),
	(30, 'TwentyFourSeven', 'boxpistol', 1400),
	(31, 'TwentyFourSeven', 'boxsmg', 2500),
	(32, 'TwentyFourSeven', 'boxshot', 900),
	(33, 'TwentyFourSeven', 'boxrifle', 10000),
	(34, 'TwentyFourSeven', 'boxflare', 100),
	(35, 'TwentyFourSeven', 'oxygenmask', 1500),
	(36, 'TwentyFourSeven', 'repairkit', 1500);
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;

-- Dumping structure for table essentialmode.shops2
CREATE TABLE IF NOT EXISTS `shops2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `store` varchar(100) NOT NULL,
  `item` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table essentialmode.shops2: ~15 rows (approximately)
DELETE FROM `shops2`;
/*!40000 ALTER TABLE `shops2` DISABLE KEYS */;
INSERT INTO `shops2` (`id`, `store`, `item`, `price`) VALUES
	(1, 'TwentyFourSeven2', 'zr380', 10000),
	(2, 'TwentyFourSeven2', 'zr3802', 15000),
	(3, 'TwentyFourSeven2', 'zr3803', 15000),
	(4, 'TwentyFourSeven2', 'dominator4', 15000),
	(5, 'TwentyFourSeven2', 'dominator5', 20000),
	(6, 'TwentyFourSeven2', 'dominator6', 19000),
	(7, 'TwentyFourSeven2', 'cerberus', 20000),
	(8, 'TwentyFourSeven2', 'cerberus2', 20000),
	(9, 'TwentyFourSeven2', 'cerberus3', 19000),
	(10, 'TwentyFourSeven2', 'scarab', 100000),
	(11, 'TwentyFourSeven2', 'scarab2', 100000),
	(12, 'TwentyFourSeven2', 'scarab3', 100000),
	(13, 'TwentyFourSeven2', 'boxsniper', 15000),
	(14, 'TwentyFourSeven2', 'bulletproof', 20000),
	(15, 'TwentyFourSeven2', 'boxmg', 10000);
/*!40000 ALTER TABLE `shops2` ENABLE KEYS */;

-- Dumping structure for table essentialmode.users
CREATE TABLE IF NOT EXISTS `users` (
  `identifier` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `license` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_bin DEFAULT '',
  `skin` longtext COLLATE utf8mb4_bin DEFAULT NULL,
  `job` varchar(50) COLLATE utf8mb4_bin DEFAULT 'unemployed',
  `job_grade` int(11) DEFAULT 0,
  `loadout` longtext COLLATE utf8mb4_bin DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `bank` int(11) DEFAULT NULL,
  `permission_level` int(11) DEFAULT NULL,
  `group` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `is_dead` tinyint(1) DEFAULT 0,
  `phone_number` varchar(10) COLLATE utf8mb4_bin DEFAULT NULL,
  `rp_xp` int(11) NOT NULL DEFAULT 0,
  `rp_rank` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


-- Dumping structure for table essentialmode.user_accounts
CREATE TABLE IF NOT EXISTS `user_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(22) COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `money` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping structure for table essentialmode.user_inventory
CREATE TABLE IF NOT EXISTS `user_inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(22) COLLATE utf8mb4_bin NOT NULL,
  `item` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping structure for table essentialmode.weashops
CREATE TABLE IF NOT EXISTS `weashops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `zone` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `item` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Dumping data for table essentialmode.weashops: ~17 rows (approximately)
DELETE FROM `weashops`;
/*!40000 ALTER TABLE `weashops` DISABLE KEYS */;
INSERT INTO `weashops` (`id`, `zone`, `item`, `price`) VALUES
	(1, 'GunShop', 'WEAPON_PISTOL', 300),
	(2, 'GunShop', 'WEAPON_FLASHLIGHT', 60),
	(3, 'GunShop', 'WEAPON_MACHETE', 90),
	(4, 'GunShop', 'WEAPON_NIGHTSTICK', 150),
	(5, 'GunShop', 'WEAPON_BAT', 100),
	(6, 'GunShop', 'WEAPON_STUNGUN', 50),
	(7, 'GunShop', 'WEAPON_MICROSMG', 1400),
	(8, 'GunShop', 'WEAPON_PUMPSHOTGUN', 3400),
	(9, 'GunShop', 'WEAPON_ASSAULTRIFLE', 10000),
	(10, 'GunShop', 'WEAPON_SPECIALCARBINE', 15000),
	(11, 'GunShop', 'WEAPON_SNIPERRIFLE', 22000),
	(12, 'GunShop', 'WEAPON_FIREWORK', 18000),
	(13, 'GunShop', 'WEAPON_GRENADE', 500),
	(14, 'GunShop', 'WEAPON_BZGAS', 200),
	(15, 'GunShop', 'WEAPON_FIREEXTINGUISHER', 100),
	(16, 'GunShop', 'WEAPON_BALL', 50),
	(17, 'GunShop', 'WEAPON_SMOKEGRENADE', 100);
/*!40000 ALTER TABLE `weashops` ENABLE KEYS */;

-- Dumping structure for table essentialmode.weashops2
CREATE TABLE IF NOT EXISTS `weashops2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `zone` varchar(255) NOT NULL,
  `item` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table essentialmode.weashops2: ~17 rows (approximately)
DELETE FROM `weashops2`;
/*!40000 ALTER TABLE `weashops2` DISABLE KEYS */;
INSERT INTO `weashops2` (`id`, `zone`, `item`, `price`) VALUES
	(1, 'GunShop', 'WEAPON_PISTOL', 100),
	(2, 'GunShop', 'WEAPON_FLASHLIGHT', 10),
	(3, 'GunShop', 'WEAPON_MACHETE', 30),
	(4, 'GunShop', 'WEAPON_NIGHTSTICK', 75),
	(5, 'GunShop', 'WEAPON_BAT', 55),
	(6, 'GunShop', 'WEAPON_STUNGUN', 30),
	(7, 'GunShop', 'WEAPON_MICROSMG', 700),
	(8, 'GunShop', 'WEAPON_PUMPSHOTGUN', 1200),
	(9, 'GunShop', 'WEAPON_ASSAULTRIFLE', 4600),
	(10, 'GunShop', 'WEAPON_SPECIALCARBINE', 8500),
	(11, 'GunShop', 'WEAPON_SNIPERRIFLE', 9000),
	(12, 'GunShop', 'WEAPON_FIREWORK', 6000),
	(13, 'GunShop', 'WEAPON_GRENADE', 200),
	(14, 'GunShop', 'WEAPON_BZGAS', 50),
	(15, 'GunShop', 'WEAPON_FIREEXTINGUISHER', 30),
	(16, 'GunShop', 'WEAPON_BALL', 10),
	(17, 'GunShop', 'WEAPON_SMOKEGRENADE', 40);
/*!40000 ALTER TABLE `weashops2` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
