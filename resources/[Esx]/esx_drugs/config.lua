Config = {}

Config.Locale = 'en'

Config.Delays = {
	WeedProcessing = 1000 * 10
}

Config.DrugDealerItems = {
	marijuana = 91,
	bandage = 2,
	bandage2 = 3,
	medikit = 30,
	bruiser = 450,
	bruiser2 = 450,
	bruiser3 = 450,
	brutus = 500,
	brutus2 = 500,
	brutus3 = 500,
	deathbike = 250,
	deathbike2 = 250,
	deathbike3 = 250,
	deviant = 850,
	impaler = 650,
	impaler2 = 550,
	impaler3 = 850,
	impaler4 = 750,
	imperator = 850,
	imperator2 = 850,
	imperator3 = 950,
	issi4 = 800,
	issi5 = 899,
	issi6 = 599,
	monster3 = 450,
	monster4 = 850,
	monster5 = 860,
	slamvan4 = 450,
	slamvan5 = 650,
	slamvan6 = 750,
	tulip = 950,
	vamos = 950,
	zr380 = 550,
	zr3802 = 550,
	zr3803 = 950,
	dominator4 = 800,
	dominator5 = 890,
	dominator6 = 890,
	cerberus = 800,
	cerberus2 = 800,
	cerberus3 = 800,
	scarab = 5000,
	scarab2 = 5000,
	scarab3 = 5000,
	binoculars = 20,
	boxpistol = 350,
	boxsmg = 900,
	boxshot = 300,
	boxrifle = 3500,
	boxflare = 20,
	oxygenmask = 600,
	repairkit = 600,
	boxsniper = 4500,
	bulletproof = 6000,
	boxmg = 3500,
	yusuf = 1200,
	grip = 900,
	flashlight = 750,
	suppressor = 2000
}

Config.DealerBlip = true

Config.LicenseEnable = false -- enable processing licenses? The player will be required to buy a license in order to process drugs. Requires esx_license

Config.LicensePrices = {
	weed_processing = {label = _U('license_weed'), price = 15000}
}

Config.GiveBlack = false -- give black money? if disabled it'll give regular cash.

Config.CircleZones = {
	WeedField = {coords = vector3(310.91, 4290.87, 45.15), name = _U('blip_weedfield'), color = 25, sprite = 496, radius = 100.0},
	WeedProcessing = {coords = vector3(2329.02, 2571.29, 46.68), name = _U('blip_weedprocessing'), color = 25, sprite = 496, radius = 100.0},

	
}

Config.DealerCoords = {

	DrugDealer = {coords = vector3(437.76,-992.98,30.69), name = _U('blip_drugdealer'), color = 6, sprite = 496, radius = 25.0},
}