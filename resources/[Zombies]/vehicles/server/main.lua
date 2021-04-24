ESX             = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterServerEvent('zombies:veh_put_away') 			-- will add vehicle to inventory if in the db
AddEventHandler('zombies:veh_put_away', function(name)	-- will error if car not in db
	local xPlayer = ESX.GetPlayerFromId(source)
	local spawn = string.lower(name)

	xPlayer.addInventoryItem(spawn, 1)
end)