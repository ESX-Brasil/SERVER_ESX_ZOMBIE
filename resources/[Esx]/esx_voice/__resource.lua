resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'

description 'ESX Voice Controller'

version '1.1.0'

client_scripts {
	'@es_extended/locale.lua',
	'locales/br.lua',
	'locales/en.lua',
	'locales/fi.lua',
  'locales/fr.lua',
	'locales/pl.lua',
	'locales/sv.lua',
	'config.lua',
	'client/main.lua'
}
