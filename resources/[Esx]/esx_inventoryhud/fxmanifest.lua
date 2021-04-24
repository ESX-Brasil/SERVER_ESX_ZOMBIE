fx_version 'adamant'
games { 'rdr3', 'gta5' }
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

description 'ESX Inventory HUD'

version 'Not A Clue ;)'

ui_page 'html/ui.html'

client_scripts {
  "@es_extended/locale.lua",
  "client/main.lua",
  "client/trunk.lua",
  "client/property.lua",
  "client/glovebox.lua",
  "client/player.lua",
  "client/vault.lua",
  "locales/cs.lua",
  "locales/en.lua",
  "locales/fr.lua",
  "config.lua"
}

server_scripts {
  '@es_extended/locale.lua',
  'server/main.lua',
  'locales/cs.lua',
  'locales/en.lua',
  'locales/fr.lua',
  'config.lua'	
}

files {
    'html/ui.html',
    'html/css/ui.css',
    'html/css/jquery-ui.css',
    'html/js/inventory.js',
    'html/js/config.js',
    -- JS LOCALES
    'html/locales/cs.js',
    'html/locales/en.js',
    'html/locales/fr.js',
    -- IMAGES

    'html/img/*.png', -- loads all in folder

   -- 'html/img/bullet.png',
    -- ICONS

    'html/img/items/*.png', -- loads all in folder
--[[
    'html/img/items/beer.png',
    'html/img/items/binoculars.png',
    'html/img/items/bread.png',
    'html/img/items/weed.png,
    'html/img/items/coffee.png',
    'html/img/items/coke.png',
    'html/img/items/crack.png',
    'html/img/items/marijuana.png',
    'html/img/items/sandwich.png',
    'html/img/items/cash.png',
    'html/img/items/medikit.png',
    'html/img/items/phone.png',
    'html/img/items/vodka.png',
    'html/img/items/water.png',
    'html/img/items/black_money.png',
    'html/img/items/bag.png',
    'html/img/items/bandage.png',
    'html/img/items/clothe.png',
    'html/img/items/fabric.png',
    'html/img/items/fish.png',
    'html/img/items/lockpick.png',
    'html/img/items/lotteryticket.png',
    'html/img/items/wool.png',
    'html/img/items/rope.png',
    'html/img/items/handcuffs.png',
    'html/img/items/key.png',
    'html/img/items/WEAPON_APPISTOL.png',
    'html/img/items/WEAPON_ASSAULTRIFLE.png',
    'html/img/items/WEAPON_ASSAULTSHOTGUN.png',
    'html/img/items/WEAPON_BOTTLE.png',
    'html/img/items/WEAPON_BULLPUPRIFLE.png',
    'html/img/items/WEAPON_CARBINERIFLE.png',
    'html/img/items/WEAPON_COMBATMG.png',
    'html/img/items/WEAPON_BAT.png',
    'html/img/items/WEAPON_COMBATPISTOL.png',
    'html/img/items/WEAPON_CROWBAR.png',
    'html/img/items/WEAPON_GOLFCLUB.png',
    'html/img/items/WEAPON_KNIFE.png',
    'html/img/items/WEAPON_MICROSMG.png',
    'html/img/items/WEAPON_NIGHTSTICK.png',
    'html/img/items/WEAPON_HAMMER.png',
    'html/img/items/WEAPON_PISTOL.png',
    'html/img/items/WEAPON_PUMPSHOTGUN.png',
    'html/img/items/WEAPON_SAWNOFFSHOTGUN.png',
    'html/img/items/WEAPON_SMG.png',
    'html/img/items/WEAPON_STUNGUN.png',
    'html/img/items/WEAPON_SPECIALCARBINE.png',
    'html/img/items/WEAPON_KNUCKLE.png',
    'html/img/items/WEAPON_FLASHLIGHT.png',
    'html/img/items/WEAPON_REVOLVER.png',
    'html/img/items/WEAPON_DAGGER.png',
    'html/img/items/WEAPON_PETROLCAN.png',
    'html/img/items/WEAPON_PISTOL50.png',
    'html/img/items/WEAPON_DBSHOTGUN.png',
    'html/img/items/WEAPON_SWITCHBLADE.png',
    'html/img/items/WEAPON_POOLCUE.png',
    'html/img/items/airbag.png',
    'html/img/items/battery.png',
    'html/img/items/highradio.png',
	'html/img/items/highrim.png',
	'html/img/items/lowradio.png',
    'html/img/items/stockrim.png',
    'html/img/items/turbo.png',
    'html/img/items/ring.png',
    'html/img/items/goldNecklace.png',
    'html/img/items/laptop.png',
    'html/img/items/samsungS10.png',
    'html/img/items/rolex.png',
    'html/img/items/camera.png',
    'html/img/items/jewels.png',
    'html/img/items/spice.png',
    'html/img/items/fishingrod.png',
    'html/img/items/fishingbait.png',
    'html/img/items/turtlebait.png',
	'html/img/items/taco.png',
	'html/img/items/monster.png',
    ]]
}
