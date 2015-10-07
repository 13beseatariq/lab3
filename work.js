console.log ("caleed");
while (true)
			{
				var obs1 = document.getElementById('obstacle1');
				var obs1_x = obs1.getBoundingClientRect();	
			
				var plane = document.getElementById('plane');
				var plane_x = plane.getBoundingClientRect();	
				
				if ((parseInt(obs1_x.left)==parseInt(plane_x.left)))
				{
					console.log ("crash");
				alert ("Plane: "+plane_x.left+" : " +plane_x.top);
				alert ("OBS: "+obs1_x.left+" : " +obs1_x.top);
	
					break;
				}
					
			}