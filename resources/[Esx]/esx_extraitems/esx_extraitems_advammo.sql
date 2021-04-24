USE `essentialmode`;

INSERT INTO `items` (`name`, `label`, `weight`, `rare`, `can_remove`) VALUES
	('binoculars', 'Binoculars', 1, 0, 1),
	('boxpistol', 'Ammo Box Pistol', 1, 0, 1),
	('boxsmg', 'Ammo Box SMG', 1, 0, 1),
	('boxshot', 'Ammo Box Shotgun', 1, 0, 1),
	('boxrifle', 'Ammo Box Rifle', 1, 0, 1),
	('boxmg', 'Ammo Box MG', 1, 0, 1),
	('boxsniper', 'Ammo Box Sniper', 1, 0, 1),
	('boxflare', 'Ammo Box Flare', 1, 0, 1),
	('bulletproof', 'Bullet-Proof Vest', 1, 0, 1),
	('oxygenmask', 'Oxygen Mask', 1, 0, 1),
	('repairkit', 'Repair Kit', 1, 0, 1)
;

INSERT INTO `shops` (store, item, price) VALUES
	('TwentyFourSeven', 'binoculars', 100),
	('TwentyFourSeven', 'boxpistol', 1400),
	('TwentyFourSeven', 'boxsmg', 2500),
	('TwentyFourSeven', 'boxshot', 900),
	('TwentyFourSeven', 'boxrifle', 10000),
	('TwentyFourSeven', 'boxflare', 100),
	('TwentyFourSeven', 'oxygenmask', 1500),
	('TwentyFourSeven', 'repairkit', 1500)
;

INSERT INTO `shops2` (store, item, price) VALUES
	('TwentyFourSeven', 'boxsniper', 15000),
	('TwentyFourSeven', 'bulletproof', 20000),
	('TwentyFourSeven', 'boxmg', 10000)
;