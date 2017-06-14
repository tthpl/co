

        var scrollY = 0;
        var distance = 40;
        var speed = 24; 
		function autos(el)
		{
			var currentY = window.pageYOffset;
			var targetY = document.getElementById(el).offsetTop;
			var bodyHeight = document.body.offsetHeight;
			var yPos = currentY + window.innerHeight;
			var anim = setTimeout('autos(\'' + el + '\')',24);
			if(yPos > bodyHeight)
			{
				clearTimeout(anim);
			}
			else
			{
				if(currentY < targetY-distance)
				{
					scrollY = currentY+ distance; 
					window.scroll(0,scrollY);
				}
				else
				{
					clearTimeout(anim);
				}
			}
		}