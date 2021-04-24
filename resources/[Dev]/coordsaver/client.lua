RegisterNetEvent("CoordSaver:GetCoords")
AddEventHandler("CoordSaver:GetCoords", function(Comment)
	local X, Y, Z = table.unpack(GetEntityCoords(PlayerPedId(), true))
	TriggerServerEvent("CoordSaver:SaveCoords", GetPlayerName(PlayerId()), round(X, 3), round(Y, 3), round(Z, 3), round(GetEntityHeading(PlayerPedId()), 3), Comment)			
end)

function round(num, numDecimalPlaces)
	local mult = 10^(numDecimalPlaces or 0)
	return math.floor(num * mult + 0.5) / mult
end
