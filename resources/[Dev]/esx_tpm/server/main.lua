local ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) 
    ESX = obj 
end)

TriggerEvent('es:addGroupCommand', 'tpm', 'admin', function(source, args, user)
	TriggerClientEvent('esx:tpm', source)
end, function(source, args, user)
	TriggerClientEvent('chat:addMessage', source, { args = { '^1SYSTEM', 'Insufficient Permissions.' } })
end, {help = 'tp to waypoint'})

TriggerEvent('es:addGroupCommand', 'yooo', 'admin', function(source, args, user)
	TriggerClientEvent('mythic_notify:client:SendAlert', source, { type = 'inform', text = 'Test Message' })
end, function(source, args, user)
	TriggerClientEvent('chat:addMessage', source, { args = { '^1SYSTEM', 'Insufficient Permissions.' } })
end, {help = 'tp to waypoint'})