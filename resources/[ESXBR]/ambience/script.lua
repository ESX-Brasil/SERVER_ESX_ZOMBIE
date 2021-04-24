Citizen.CreateThread(function()
    while true 
    	do
		
		SetWeatherTypePersist("FOGGY")
        SetWeatherTypeNowPersist("FOGGY")
        SetWeatherTypeNow("FOGGY")
        SetOverrideWeather("FOGGY")
    	
		Citizen.Wait(1)
	end

end)