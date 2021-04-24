---------------------------------------------------------------------
                --[[SCRIPT MADE BY : ALEXMIHAI04]]--
               --[[DO NOT SELL OR COPY THIS SCRIPT]]--
                   --[[github.com/ItsAlexYTB]]--
        --[[ENJOY THE SCRIPT , DO NOT MAKE 1000 NPCS :))))) ]]
---------------------------------------------------------------------

--[[EXPLANATION [EN]: 

-1,2,3 : Coordonates
-4 : Name for the drawtext
-5 : Ped heading
-6 : Ped hash
-7: Ped model

]]--

--[[DO NOT TOUCH IF YOU DON'T KNOW WHAT YOU DO]]--

--[[EXPLANATION [RO]
-1,2,3 : sunt coordonatele de la npc
-4 : Numele care apare deasupra npc-ului
-5 : Heading (partea in care sta orientat)
-6 : Hash de la ped , se poate lua de pe net
-7 : Modelul de la ped , asemenea , il gasiti pe net


]]--

local coordonate = {
	{454.15,-980.37,29.69,"sell weapons",95.24,0x65793043,"s_m_y_marine_01"},
	{441.81,-977.06,29.69,"Weapons",172.17,0x65793043,"s_m_y_marine_01"},
	{456.84,-988.83,29.69,"clothes",128.81,0x65793043,"s_m_y_marine_01"},
	{459.94,-990.83,29.69,"clothes",87.31,0x65793043,"s_m_y_marine_01"},
	{455.64,-992.74,29.69,"clothes",359.2,0x65793043,"s_m_y_marine_01"},
	{451.88,-993.13,29.69,"clothes",329.69,0x65793043,"s_m_y_marine_01"},
	{449.94,-990.84,29.69,"clothes",293.6,0x65793043,"s_m_y_marine_01"},
	{454.47,-988.54,29.69,"Barber",175.06,0x65793043,"s_m_y_marine_01"},
	{437.76,-992.98,29.69,"Dealer",265.48,0x65793043,"s_m_y_marine_01"},
    {453.26,-1021.22,27.36,"Customs",58.67,0x65793043,"s_m_y_marine_01"},
    {450.27,-1014.06,27.48,"Vehicles",181.67,0x65793043,"s_m_y_marine_01"},
    {454.31,-1013.41,27.46,"Ranked Vehicles",183.32,0x65793043,"s_m_y_marine_01"}
}

Citizen.CreateThread(function()

    for _,v in pairs(coordonate) do
      RequestModel(GetHashKey(v[7]))
      while not HasModelLoaded(GetHashKey(v[7])) do
        Wait(1)
      end
  
      RequestAnimDict("mini@strip_club@idles@bouncer@base")
      while not HasAnimDictLoaded("mini@strip_club@idles@bouncer@base") do
        Wait(1)
      end
      ped =  CreatePed(4, v[6],v[1],v[2],v[3], 3374176, false, true)
      SetEntityHeading(ped, v[5])
      FreezeEntityPosition(ped, true)
      SetEntityInvincible(ped, true)
      SetBlockingOfNonTemporaryEvents(ped, true)
      TaskPlayAnim(ped,"mini@strip_club@idles@bouncer@base","base", 8.0, 0.0, -1, 1, 0, 0, 0, 0)
    end
end)

Citizen.CreateThread(function()
    while true do
        local pos = GetEntityCoords(GetPlayerPed(-1), true)
        Citizen.Wait(0)
        for _,v in pairs(coordonate) do
            x = v[1]
            y = v[2]
            z = v[3]
            if(Vdist(pos.x, pos.y, pos.z, x, y, z) < 20.0)then
                DrawText3D(x,y,z+2.10, "~g~"..v[4], 1.2, 1)
                DrawText3D(x,y,z+1.95, "~w~Sosay.com", 1.0, 1)
            end
        end
    end
end)


function DrawText3D(x,y,z, text, scl, font) 

    local onScreen,_x,_y=World3dToScreen2d(x,y,z)
    local px,py,pz=table.unpack(GetGameplayCamCoords())
    local dist = GetDistanceBetweenCoords(px,py,pz, x,y,z, 1)
 
    local scale = (1/dist)*scl
    local fov = (1/GetGameplayCamFov())*100
    local scale = scale*fov
   
    if onScreen then
        SetTextScale(0.0*scale, 1.1*scale)
        SetTextFont(font)
        SetTextProportional(1)
        SetTextColour(255, 255, 255, 255)
        SetTextDropshadow(0, 0, 0, 0, 255)
        SetTextEdge(2, 0, 0, 0, 150)
        SetTextDropShadow()
        SetTextOutline()
        SetTextEntry("STRING")
        SetTextCentre(1)
        AddTextComponentString(text)
        DrawText(_x,_y)
    end
end

--[[ENJOY]]--