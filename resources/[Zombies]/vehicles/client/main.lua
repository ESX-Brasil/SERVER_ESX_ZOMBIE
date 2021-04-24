ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
end)

Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)

		local ped = GetPlayerPed(-1)
		local vehicle = GetVehiclePedIsIn(ped, false)
		local model = GetEntityModel(vehicle)
		local name = GetDisplayNameFromVehicleModel(model)

		local speed = GetEntitySpeed(vehicle)
		local kmh = (speed * 3.6)
		local mph = (speed * 2.236936)
		
		if IsPedInVehicle(ped, vehicle, true) then
			if IsControlJustPressed(0, 311) then
				
				if mph == 0.0 then
					TriggerServerEvent('zombies:veh_put_away', name)
					ESX.Game.DeleteVehicle(vehicle)
				else
					ESX.ShowNotification("~r~you need to stop to store vehicles")
				end
			end
		end
	end
end)