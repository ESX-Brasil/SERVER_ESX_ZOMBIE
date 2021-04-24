RegisterServerEvent('playerDied')
AddEventHandler('playerDied',function(killer,reason)
	if killer == "**Invalid**" then --Can't figure out what's generating invalid, it's late. If you figure it out, let me know. I just handle it as a string for now.
		reason = 2
	end
	if reason == 0 then
		TriggerClientEvent('showNotification', -1,"~c~".. GetPlayerName(source).."~r~ committed suicide. ")
	elseif reason == 1 then
		TriggerClientEvent('showNotification', -1,"~c~".. killer .. "~r~ killed ~c~"..GetPlayerName(source).."~c~.")
	else
		TriggerClientEvent('showNotification', -1,"~c~".. GetPlayerName(source).."~r~ died.")
	end
end)