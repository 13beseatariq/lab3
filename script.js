	var image_object = null;
		var animate;
		
		function init(){
               image_object = document.getElementById('plane');
               image_object.style.position= 'relative'; 
               image_object.style.left = '100px';
				image_object.style.top = '200px'; 
            }
			
			 function moveUP(){
				stop();
               image_object.style.top = parseInt(image_object.style.top) + 1 + 'px';
			   if (parseInt(image_object.style.top)<480)
			   {

               	animate = setTimeout(moveUP,10); // call moveRight in 20msec
			   }
            }
			
			function moveDOWN(){
				stop();
               image_object.style.top = parseInt(image_object.style.top) - 1 + 'px';
               if (parseInt(image_object.style.top)>20)
			   {
               	animate = setTimeout(moveDOWN,10); // call moveRight in 20msec
			   }
            }
            
            function stop(){
               clearTimeout(animate);
            }
            
			
            window.onload =init;
			